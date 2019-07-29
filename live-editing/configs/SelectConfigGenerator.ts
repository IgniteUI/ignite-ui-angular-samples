import { IgxButtonModule, IgxDropDownModule, IgxIconModule, IgxInputGroupModule,
    IgxSelectModule } from "igniteui-angular";
import { SelectFormComponent } from "../../src/app/data-entries/select/select-form/select-form.component";
import { SelectInputDirectivesComponent
} from "../../src/app/data-entries/select/select-input-directives/select-input-directives";
import { SelectSample1Component } from "../../src/app/data-entries/select/select-sample-1/select-sample-1.component";
import { SelectSample2Component } from "../../src/app/data-entries/select/select-sample-2/select-sample-2.component";
import { SelectSample3Component } from "../../src/app/data-entries/select/select-sample-3/select-sample-3.component";
import { SelectSample4Component } from "../../src/app/data-entries/select/select-sample-4/select-sample-4.component";
import { SelectStylingComponent } from "../../src/app/data-entries/select/select-styling/select-styling.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class SelectConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            appModuleConfig: new AppModuleConfig({
                imports: [IgxSelectModule, SelectSample1Component, IgxInputGroupModule],
                ngDeclarations: [SelectSample1Component],
                ngImports: [IgxSelectModule, IgxInputGroupModule]
            }),
            component: SelectSample1Component,
            shortenComponentPathBy: "/data-entries/select/"
        }));

        configs.push(new Config({
            appModuleConfig: new AppModuleConfig({
                imports: [IgxSelectModule, SelectSample2Component, IgxInputGroupModule, IgxDropDownModule],
                ngDeclarations: [SelectSample2Component],
                ngImports: [IgxSelectModule, IgxInputGroupModule, IgxDropDownModule]
            }),
            component: SelectSample2Component,
            shortenComponentPathBy: "/data-entries/select/"
        }));

        configs.push(new Config({
            appModuleConfig: new AppModuleConfig({
                imports: [IgxSelectModule, SelectSample3Component, IgxButtonModule, IgxInputGroupModule],
                ngDeclarations: [SelectSample3Component],
                ngImports: [IgxSelectModule, IgxButtonModule, IgxInputGroupModule]
            }),
            component: SelectSample3Component,
            shortenComponentPathBy: "/data-entries/select/"
        }));

        configs.push(new Config({
            appModuleConfig: new AppModuleConfig({
                imports: [IgxSelectModule, SelectSample4Component, IgxInputGroupModule],
                ngDeclarations: [SelectSample4Component],
                ngImports: [IgxSelectModule, IgxInputGroupModule]
            }),
            component: SelectSample4Component,
            shortenComponentPathBy: "/data-entries/select/"
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/data/heroData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxSelectModule, SelectStylingComponent],
                ngDeclarations: [SelectStylingComponent],
                ngImports: [IgxSelectModule]
            }),
            component: SelectStylingComponent
        }));

        configs.push(new Config({
            appModuleConfig: new AppModuleConfig({
                imports: [IgxSelectModule, SelectInputDirectivesComponent, IgxInputGroupModule, IgxIconModule],
                ngDeclarations: [SelectInputDirectivesComponent],
                ngImports: [IgxSelectModule, IgxInputGroupModule, IgxIconModule]
            }),
            component: SelectInputDirectivesComponent
        }));

        configs.push(new Config({
            appModuleConfig: new AppModuleConfig({
                imports: [IgxSelectModule, SelectFormComponent, IgxInputGroupModule],
                ngDeclarations: [SelectFormComponent],
                ngImports: [IgxSelectModule, IgxInputGroupModule]
            }),
            component: SelectFormComponent
        }));

        return configs;
    }
}
