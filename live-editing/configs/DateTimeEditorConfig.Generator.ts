import { IgxDateTimeEditorDirective, IgxInputGroupModule } from "igniteui-angular";

import { DateТimeЕditorSample1Component } from "../../src/app/scheduling/datetimeeditor/datetimeeditor-sample-1/datetimeeditor-sample-1.component";
// import { DateТimeЕditorSample2Component } from "../../src/app/scheduling/datetimeeditor/datetimeeditor-sample-2/datetimeeditor-sample-2.component";

import { Config } from "./core/Config";
import { AppModuleConfig } from "./core/AppModuleConfig";
export class DateTimeEditorConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // date time editor sample 1
        configs.push(
            new Config({
                component: DateТimeЕditorSample1Component,
                appModuleConfig: new AppModuleConfig({
                    imports: [
                        DateТimeЕditorSample1Component,
                        DateТimeЕditorSample1Component
                    ],
                    ngDeclarations: [DateТimeЕditorSample1Component],
                    ngImports: [IgxDateTimeEditorDirective]
                }),
                shortenComponentPathBy: "/scheduling/datetimeeditor"
            })
        );

        configs.push(
            new Config({
                component: DateТimeЕditorSample2Component,
                appModuleConfig: new AppModuleConfig({
                    imports: [
                        DateТimeЕditorSample2Component,
                        DateТimeЕditorSample2Component
                    ],
                    ngDeclarations: [DateТimeЕditorSample2Component],
                    ngImports: [IgxDateTimeEditorDirective]
                }),
                shortenComponentPathBy: "/scheduling/datetimeeditor"
            })
        );
        return configs;
    }
}
