import {HttpClientModule} from '@angular/common/http';
import {IgxButtonGroupModule,
IgxButtonModule,
IgxCsvExporterService,
IgxExcelExporterService,
IgxIconModule,
IgxRippleModule,
IgxSliderModule,
IgxSwitchModule,
IgxToggleModule,
IgxTreeGridModule} from 'igniteui-angular';
import {IgxSparklineCoreModule,
IgxSparklineModule} from 'igniteui-angular-charts';
import { Config, IConfigGenerator, AppModuleConfig } from 'igniteui-live-editing';

export class DVTreeGridConfigGenerator implements IConfigGenerator {
    public additionalImports = {
        'LocalDataService': '../../../projects/app-lob/src/app/grid-finjs/localData.service',
        'TreeGridGroupingPipe': '../../../projects/app-lob/src/app/treegrid-finjs/tree-grid-grouping.pipe',
        'IgxTreeGridGroupAreaComponent': '../../../projects/app-lob/src/app/treegrid-finjs/tree-grid-group-area.component',
        'IgxPreventDocumentScrollModule': '../../../src/app/directives/prevent-scroll.directive',
        'SignalRService' : '../../../projects/app-lob/src/app/services/signal-r.service'
};

    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

                // TreeGrid ChildDataKey Sample
        configs.push(new Config({
                    additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/projects/app-lob/src/app/tree-grid/tree-grid-childdatakey-sample/data.ts",
                        "/projects/app-lob/src/_app-layout.scss", "/projects/app-lob/src/_variables.scss"],
                    additionalDependencies: ["igniteui-angular-charts", "igniteui-angular-core"],
                    appModuleConfig: new AppModuleConfig({
                        imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridChilddatakeySampleComponent', 'IgxExcelExporterService', 'IgxCsvExporterService', 'IgxSparklineCoreModule', 'IgxSparklineModule'],
                        ngDeclarations: ['TreeGridChilddatakeySampleComponent'],
                        ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxSparklineCoreModule', 'IgxSparklineModule'],
                        ngProviders: ['IgxExcelExporterService', 'IgxCsvExporterService']
                    }),
                    component: 'TreeGridChilddatakeySampleComponent',
                    shortenComponentPathBy: "/tree-grid/"
                }));

        // TreeGrid Primary/Foreign Key Sample
        configs.push(new Config({
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/projects/app-lob/src/app/tree-grid/tree-grid-primaryforeignkey-sample/data.ts",
                "/projects/app-lob/src/_app-layout.scss", "/projects/app-lob/src/_variables.scss"],
            additionalDependencies: ["igniteui-angular-charts", "igniteui-angular-core"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridPrimaryforeignkeySampleComponent', 'IgxSparklineCoreModule', 'IgxSparklineModule'],
                ngDeclarations: ['TreeGridPrimaryforeignkeySampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxSparklineCoreModule', 'IgxSparklineModule']
            }),
            component: 'TreeGridPrimaryforeignkeySampleComponent',
            shortenComponentPathBy: "/tree-grid/"
        }));

        configs.push(new Config({
            additionalDependencies: ["@microsoft/signalr"],
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/projects/app-lob/src/app/grid-finjs/localData.service.ts",
                "/projects/app-lob/src/app/services/financialData.ts", "/projects/app-lob/src/app/services/signal-r.service.ts",
                "/projects/app-lob/src/app/treegrid-finjs/tree-grid-grouping.pipe.ts", "/projects/app-lob/src/app/treegrid-finjs/tree-grid-group-area.component.ts",
                "/projects/app-lob/src/app/treegrid-finjs/tree-grid-group-area.component.html", "/projects/app-lob/src/app/treegrid-finjs/tree-grid-group-area.component.scss",
                "/projects/app-lob/src/_app-layout.scss", "/projects/app-lob/src/_variables.scss"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxButtonGroupModule', 'IgxIconModule', 'IgxSliderModule', 'IgxToggleModule',
                    'IgxButtonModule', 'IgxExcelExporterService', 'IgxSwitchModule', 'IgxRippleModule', 'TreeGridFinJSComponent',
                    'LocalDataService', 'TreeGridGroupingPipe', 'HttpClientModule', 'SignalRService', 'IgxTreeGridGroupAreaComponent'],
                ngDeclarations: ['TreeGridFinJSComponent', 'TreeGridGroupingPipe', 'IgxTreeGridGroupAreaComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxButtonGroupModule', 'IgxIconModule', 'IgxSliderModule', 'IgxToggleModule',
                    'IgxButtonModule', 'IgxSwitchModule', 'IgxRippleModule', 'HttpClientModule'],
                ngProviders: ['LocalDataService', 'IgxExcelExporterService', 'SignalRService']
            }),
            component: 'TreeGridFinJSComponent'
        }));

        return configs;
    }
}
