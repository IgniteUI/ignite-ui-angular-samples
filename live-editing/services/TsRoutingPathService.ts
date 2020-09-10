import { TsImportsService } from "./TsImportsService";
import * as path from "path";
// tslint:disable-next-line: no-implicit-dependencies
import * as ts from "typescript";
import * as fs from "fs";

interface IComponentRoute{
    component: string,
    route: string;
}

interface IModuleRouting {
    module: string,
    path: string,
    routes: IComponentRoute[]
}

const ROUTES = "./Routes.ts";
export class TsRoutingPathService {

    private routingImports: Map<string, string>;
    private tsImportService: TsImportsService;
    public appRouting = new Map<string, IModuleRouting[]>();
    public importedPaths = new Map<string, string>();
    private dependencies: string[];
    constructor(){
        this.tsImportService =  new TsImportsService();
        this.routingImports = this.tsImportService.getFileImports(path.join(__dirname, ROUTES));
        this.dependencies = Object.keys(JSON.parse(fs.readFileSync(path.join(__dirname, "../../package.json"), "utf8")).dependencies);
    }

    public generateRouting(routePath: string = ROUTES, moduleRouting?: IModuleRouting) {
        const source = ts.createSourceFile(routePath, fs.readFileSync(path.join(__dirname, routePath)).toString(), ts.ScriptTarget.ES2015, true);
        let routing: ts.Statement;
        let name: ts.Identifier;
        let classRoutePath: ts.StringLiteral;
        let routingArray: ts.ArrayLiteralExpression;
        let properties: ts.ObjectLiteralElementLike[];
        let route: IComponentRoute | IModuleRouting;

        if (moduleRouting){
            routing = source.statements.find(s => s.kind === ts.SyntaxKind.VariableStatement) as ts.VariableStatement;
            [, routingArray] = this.getRoutesArray(routing, ts.SyntaxKind.VariableDeclarationList);
            routingArray.elements.forEach((object: ts.ObjectLiteralExpression) => {
                [...properties] = object.properties;
                name = this.getObjectLiteralPropertyValue<ts.Identifier>(properties, 'component', ts.SyntaxKind.Identifier);
                classRoutePath = this.getObjectLiteralPropertyValue<ts.StringLiteral>(properties, 'path', ts.SyntaxKind.StringLiteral);
                const componentImports = this.tsImportService.getFileImports(path.join(__dirname, routePath));
                const componentPath = path.join(path.dirname(routePath), componentImports.get(name.text));
                this.importedPaths.set(name.text, componentPath);
                route = {component: name.text, route: classRoutePath.text} as IComponentRoute;
                moduleRouting.routes.push(route);
            });
        } else {
            const routingAssignments = source.statements.filter(s => s.kind === ts.SyntaxKind.VariableStatement);
            let variableName;
            routingAssignments.forEach(rA => {
                routing = rA;
                [variableName, routingArray] = this.getRoutesArray(routing, ts.SyntaxKind.VariableDeclarationList);
                this.appRouting.set(variableName.text, []);
                routingArray.elements.forEach((node: ts.ObjectLiteralExpression) => {
                    [...properties] = node.properties;
                    name = this.getObjectLiteralPropertyValue<ts.Identifier>(properties, 'module', ts.SyntaxKind.Identifier);
                    classRoutePath = this.getObjectLiteralPropertyValue<ts.StringLiteral>(properties, 'path', ts.SyntaxKind.StringLiteral);
                    const componentRoutes =  this.getObjectLiteralPropertyValue<ts.PropertyAccessExpression>(properties, 'routes', ts.SyntaxKind.PropertyAccessExpression);
                    route = { module: name.text, routes: [], path: classRoutePath.text} as IModuleRouting;
                    const moduleName = route.module;
                    const moduleRoutingIdentifier = componentRoutes.getChildren()[0].getText();
                    const moduleRoutingPath = `${this.routingImports.get(moduleRoutingIdentifier)}.ts`;
                    this.generateRouting(moduleRoutingPath, route);
                    this.appRouting.get(variableName.text).push(route);
                    const moduleImports = this.tsImportService.getFileImports(path.join(__dirname, `${this.routingImports.get(name.text)}.ts`));
                    moduleImports.forEach((importPath, className) => {
                        if (!this.importedPaths.has(className) && this.dependencies.includes(importPath)) {
                            this.importedPaths.set(className, importPath)
                        }
                    });
                    console.log(`Configure Routing and Paths for ${moduleName}`);
                });
            });
            this.importedPaths.forEach((importPath, className) => {
                if (!this.dependencies.includes(importPath)){
                    const content = fs.readFileSync(path.join(__dirname, `${importPath}.ts`), 'utf8');
                    const imports = this.tsImportService.getFileImports(importPath, content.toString());
                    imports.forEach((i, c) => {
                        if (!this.importedPaths.has(c) && this.dependencies.includes(i)){
                            this.importedPaths.set(c, i);
                        }
                    });
                }
            });
        }
    }

    private getRoutesArray(parent: ts.Node, searchKind: ts.SyntaxKind): never | [ts.Identifier, ts.ArrayLiteralExpression] {
        const child = parent.getChildren().find(node => node.kind === searchKind)
        switch (child.kind) {
            case ts.SyntaxKind.VariableDeclarationList:
                return this.getRoutesArray(child, ts.SyntaxKind.SyntaxList);
            case ts.SyntaxKind.SyntaxList:
                return this.getRoutesArray(child, ts.SyntaxKind.VariableDeclaration);
            case ts.SyntaxKind.VariableDeclaration:
                return child.getChildren().filter(node => node.kind === ts.SyntaxKind.Identifier || node.kind === ts.SyntaxKind.ArrayLiteralExpression) as unknown as [ts.Identifier, ts.ArrayLiteralExpression]
        }
    }

    private getObjectLiteralPropertyValue<T extends ts.Node>(props: ts.ObjectLiteralElementLike[], propertyName: string, valueSyntaxKind: ts.SyntaxKind): T {
        return (props.find(prop => prop.name.getText() === propertyName) as unknown as T).
                getChildren().find(n => n.kind === valueSyntaxKind && n.getText() !== propertyName) as T;
    }
}
