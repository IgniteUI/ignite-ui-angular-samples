// tslint:disable:prefer-const
// tslint:disable:prefer-for-of
import * as fs from "fs";
// tslint:disable-next-line:no-implicit-dependencies
import * as ts from "typescript";

export class TsImportsService {
    public getFileImports(filePath: string): Map<string, string> {
        let sourceFile = ts.createSourceFile(
            filePath, fs.readFileSync(filePath).toString(), ts.ScriptTarget.ES2015, true);
        let imports = new Map<string, string>();
        let children = sourceFile.getChildren()[0].getChildren();
        for (let i = 0; i < children.length; i++) {
            this.getImports(children[i], imports, false);
        }

        return imports;
    }

    public getFileNamespacesImports(filePath: string): Map<string, string> {
        let sourceFile = ts.createSourceFile(
            filePath, fs.readFileSync(filePath).toString(), ts.ScriptTarget.ES2015, true);
        let imports = new Map<string, string>();
        let children = sourceFile.getChildren()[0].getChildren();
        for (let i = 0; i < children.length; i++) {
            this.getImports(children[i], imports, true);
        }

        return imports;
    }

    private getImports(node: ts.Node, imports: Map<string, string>, namespaces: boolean) {
        if (node.kind === ts.SyntaxKind.ImportDeclaration) {
            let importDeclaration = (node as ts.ImportDeclaration);
            let moduleSpecifier = importDeclaration.moduleSpecifier.getText();
            moduleSpecifier = moduleSpecifier.substring(1, moduleSpecifier.length - 1);
            let importSpecifiers = new Array<string>();
            let children = node.getChildren();
            for (let i = 0; i < children.length; i++) {
                namespaces ? this.getNamespacesImports(node, importSpecifiers) : this.getImportSpecifiers(node, importSpecifiers);
            }

            for (let i = 0; i < importSpecifiers.length; i++) {
                imports.set(importSpecifiers[i], moduleSpecifier);
            }
        }
    }

    private getNamespacesImports(node: ts.Node, importSpecifiers: string[]) {
        if (node.kind === ts.SyntaxKind.NamespaceImport) {
            let importSpecifierNode = node.getChildren().find(n => n.kind === ts.SyntaxKind.Identifier);
            importSpecifiers.push(importSpecifierNode.getText());
            return;
        }

        let children = node.getChildren();
        for (let i = 0; i < children.length; i++) {
            this.getNamespacesImports(children[i], importSpecifiers);
        }
    }


    private getImportSpecifiers(node: ts.Node, importSpecifiers: string[]) {
        if (node.kind === ts.SyntaxKind.ImportSpecifier) {
            let importSpecifier = (node as ts.ImportSpecifier);
            importSpecifiers.push(importSpecifier.getText());
            return;
        }

        let children = node.getChildren();
        for (let i = 0; i < children.length; i++) {
            this.getImportSpecifiers(children[i], importSpecifiers);
        }
    }
}
