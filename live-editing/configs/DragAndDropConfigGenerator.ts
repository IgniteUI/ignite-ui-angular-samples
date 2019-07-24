/* tslint:disable:object-literal-sort-keys */
import { IgxDialogModule, IgxDragDirective, IgxDragDropModule, IgxDropDirective } from "igniteui-angular";
import { DragAndDropSampleComponent } from "../../src/app/interactions/drag-drop/drag-drop.component";
import { KanbanSampleComponent } from "../../src/app/interactions/drag-drop/kanban-sample/kanban-sample.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class DragAndDropConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: DragAndDropSampleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDragDirective, IgxDropDirective,
                    IgxDragDropModule, IgxDialogModule, DragAndDropSampleComponent],
                ngDeclarations: [DragAndDropSampleComponent],
                ngImports: [IgxDragDropModule, IgxDialogModule]
            }),
            shortenComponentPathBy: "/interactions/"
        }));

        configs.push(new Config({
            component: KanbanSampleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDragDirective, IgxDropDirective,
                    IgxDragDropModule, IgxDialogModule, KanbanSampleComponent],
                ngDeclarations: [KanbanSampleComponent],
                ngImports: [IgxDragDropModule]
            }),
            shortenComponentPathBy: "/interactions/"
        }));
        return configs;
    }
}
