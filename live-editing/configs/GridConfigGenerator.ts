/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {Router,
RouterModule} from '@angular/router';
import {IgxActionStripModule,
IgxAvatarModule,
IgxBadgeModule,
IgxButtonGroupModule,
IgxButtonModule,
IgxCheckboxModule,
IgxChipsModule,
IgxComboModule,
IgxCsvExporterService,
IgxDatePickerModule,
IgxDialogModule,
IgxDividerModule,
IgxDragDropModule,
IgxExcelExporterService,
IgxExpansionPanelModule,
IgxFocusModule,
IgxGridModule,
IgxIconModule,
IgxInputGroupModule,
IgxListModule,
IgxOverlayService,
IgxProgressBarModule,
IgxRadioModule,
IgxRippleModule,
IgxSelectModule,
IgxSnackbarModule,
IgxSwitchModule,
IgxTabsModule,
IgxToastModule,
IgxTooltipModule,
IgxToggleModule} from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing';
export class GridConfigGenerator implements IConfigGenerator {
    public additionalImports = {
        IgxPreventDocumentScrollModule: '../../src/app/directives/prevent-scroll.directive',
        ContextmenuComponent: '../../src/app/grid/grid-contextmenu-sample/contextmenu/contextmenu.component',
        RemoteValuesService: '../../src/app/grid/grid-excel-style-filtering-load-on-demand/remoteValues.service',
        PlanetComponent: '../../src/app/grid/grid-row-drag/planet/planet.component',
        LocalService: '../../src/app/grid/grid-sample-2/grid-sample-2.component',
        RemoteService: '../../src/app/services/remote.service',
        RemoteFilteringService: '../../src/app/services/remoteFiltering.service',
        RemotePagingService: '../../src/app/services/remotePaging.service',
        RemoteServiceVirt: '../../src/app/services/remoteVirtualization.service',
        FinancialDataService: '../../src/app/services/financial.service'
};
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'FinancialSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/financialData.ts',
                '/src/app/services/financial.service.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['HttpClientModule', 'IgxAvatarModule', 'IgxBadgeModule', 'IgxButtonModule',
                    'IgxGridModule', 'IgxIconModule', 'IgxInputGroupModule', 'IgxProgressBarModule',
                    'IgxRippleModule', 'IgxSwitchModule', 'FinancialSampleComponent', 'FinancialDataService', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['FinancialSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxAvatarModule', 'IgxBadgeModule', 'IgxButtonModule', 'IgxGridModule',
                    'IgxIconModule', 'IgxInputGroupModule', 'IgxProgressBarModule',
                    'IgxRippleModule', 'IgxSwitchModule', 'HttpClientModule'],
                ngProviders: ['FinancialDataService']
            })
        }));

        configs.push(new Config({
            component: 'GridSample3Component',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['HttpClientModule', 'IgxButtonModule', 'IgxGridModule', 'IgxInputGroupModule',
                    'IgxRippleModule', 'IgxSwitchModule', 'GridSample3Component', 'LocalService', 'IgxIconModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridSample3Component'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxButtonModule', 'IgxGridModule',
                    'IgxInputGroupModule', 'IgxRippleModule', 'HttpClientModule', 'IgxIconModule']
            })
        }));

        configs.push(new Config({
            component: 'GridGroupByCustomSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/invoiceData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxGridModule',
                    'IgxSwitchModule', 'GridGroupBySampleComponent', 'IgxIconModule', 'IgxBadgeModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridGroupBySampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxButtonModule', 'IgxGridModule', 'IgxIconModule', 'IgxBadgeModule']
            })
        }));

        configs.push(new Config({
            component: 'GridGroupBySampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/invoiceData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxGridModule',
                    'IgxSwitchModule', 'GridGroupBySampleComponent', 'IgxIconModule', 'IgxBadgeModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridGroupBySampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxButtonModule', 'IgxGridModule', 'IgxIconModule', 'IgxBadgeModule']
            })
        }));

        configs.push(new Config({
            component: 'GridGroupBySummarySampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/invoiceData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxButtonGroupModule', 'IgxGridModule',
                    'IgxSwitchModule', 'GridGroupBySummarySampleComponent', 'IgxIconModule', 'IgxBadgeModule', 'IgxPreventDocumentScrollModule', 'IgxSwitchModule'],
                ngDeclarations: ['GridGroupBySummarySampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxButtonModule', 'IgxButtonGroupModule', 'IgxGridModule',
                    'IgxIconModule', 'IgxBadgeModule', 'IgxSwitchModule']
            })
        }));

        configs.push(new Config({
            component: 'GridGroupBySummaryStylingSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/invoiceData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxButtonGroupModule', 'IgxGridModule',
                    'IgxSwitchModule', 'GridGroupBySummaryStylingSampleComponent', 'IgxIconModule', 'IgxBadgeModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridGroupBySummaryStylingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxButtonModule', 'IgxButtonGroupModule', 'IgxGridModule',
                    'IgxIconModule', 'IgxBadgeModule']
            })
        }));

        configs.push(new Config({
            component: 'GridFilteringStyleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'GridFilteringStyleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridFilteringStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'FilteringSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'IgxRippleModule', 'FilteringSampleComponent', 'IgxInputGroupModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['FilteringSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxRippleModule', 'IgxInputGroupModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'FilteringTemplateSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: [
                    'IgxGridModule',
                    'IgxRippleModule',
                    'FilteringTemplateSampleComponent',
                    'IgxInputGroupModule',
                    'IgxDatePickerModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['FilteringTemplateSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxRippleModule', 'IgxInputGroupModule', 'IgxDatePickerModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'PagingSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/athletesData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['HttpClientModule', 'IgxAvatarModule', 'IgxBadgeModule', 'IgxButtonModule',
                    'IgxGridModule', 'IgxIconModule', 'IgxInputGroupModule', 'IgxProgressBarModule',
                    'IgxRippleModule', 'IgxSwitchModule', 'PagingSampleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['PagingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxAvatarModule', 'IgxBadgeModule', 'IgxButtonModule', 'IgxGridModule',
                    'IgxIconModule', 'IgxInputGroupModule', 'IgxProgressBarModule',
                    'IgxRippleModule', 'IgxSwitchModule', 'HttpClientModule']
            })
        }));

        configs.push(new Config({
            component: 'GridPagerSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/athletesData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'IgxRippleModule', 'IgxSwitchModule', 'GridPagerSampleComponent', 'IgxSelectModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridPagerSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxRippleModule', 'IgxSwitchModule', 'IgxSelectModule']
            })
        }));

        configs.push(new Config({
            component: 'GridSelectionSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/financialData.ts',
                '/src/app/services/financial.service.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['HttpClientModule', 'IgxAvatarModule', 'IgxBadgeModule', 'IgxButtonModule', 'IgxSnackbarModule',
                    'IgxGridModule', 'IgxIconModule', 'IgxInputGroupModule', 'IgxSwitchModule', 'GridSelectionSampleComponent', 'IgxPreventDocumentScrollModule',
                        'FinancialDataService'],
                ngDeclarations: ['GridSelectionSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxAvatarModule', 'IgxBadgeModule', 'IgxButtonModule', 'IgxGridModule', 'IgxSnackbarModule',
                    'IgxIconModule', 'IgxInputGroupModule', 'IgxSwitchModule', 'HttpClientModule'],
                ngProviders: ['FinancialDataService']
            })
        }));

        configs.push(new Config({
            component: 'GridSelectionTemplateExcelComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'GridSelectionTemplateExcelComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridSelectionTemplateExcelComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridSelectionTemplateNumbersComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/data/customers.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxCheckboxModule', 'IgxGridModule',
                    'GridSelectionTemplateNumbersComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridSelectionTemplateNumbersComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxCheckboxModule', 'IgxGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridSearchSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/grid/grid-search-sample/data.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['HttpClientModule', 'IgxButtonModule', 'IgxGridModule', 'IgxIconModule',
                    'IgxInputGroupModule', 'IgxRippleModule', 'IgxChipsModule', 'GridSearchSampleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridSearchSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxButtonModule', 'IgxGridModule',
                    'IgxIconModule', 'IgxInputGroupModule',
                    'IgxRippleModule', 'IgxChipsModule', 'HttpClientModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridColumnHidingSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['HttpClientModule', 'IgxGridModule', 'IgxRadioModule', 'GridColumnHidingSampleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridColumnHidingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxRadioModule', 'HttpClientModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridColumnHidingToolbarSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['HttpClientModule', 'IgxGridModule', 'GridColumnHidingToolbarSampleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridColumnHidingToolbarSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'HttpClientModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridColumnHidingToolbarStyleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['HttpClientModule', 'IgxGridModule', 'GridColumnHidingToolbarStyleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridColumnHidingToolbarStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'HttpClientModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'ResizingSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'ResizingSampleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['ResizingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridResizeLineStylingSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/athletesData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'GridResizeLineStylingSampleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridResizeLineStylingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'SortingSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/localData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'IgxIconModule', 'IgxRippleModule',
                    'SortingSampleComponent', 'IgxInputGroupModule', 'IgxSelectModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['SortingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxRippleModule', 'IgxIconModule', 'IgxInputGroupModule', 'IgxSelectModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/localData.ts'],
            component: 'SortingStylingComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'IgxIconModule', 'IgxRippleModule',
                    'SortingStylingComponent', 'IgxInputGroupModule', 'IgxSelectModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['SortingStylingComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxRippleModule', 'IgxIconModule', 'IgxInputGroupModule', 'IgxSelectModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridRemoteVirtualizationSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/services/remoteVirtualization.service.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridRemoteVirtualizationSampleComponent', 'IgxGridModule', 'IgxToastModule',
                    'IgxBadgeModule', 'HttpClientModule', 'RemoteServiceVirt', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridRemoteVirtualizationSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxToastModule', 'IgxBadgeModule', 'HttpClientModule'],
                ngProviders: ['RemoteServiceVirt']
            })
        }));

        configs.push(new Config({
            component: 'RemoteFilteringSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/services/remoteFiltering.service.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['RemoteFilteringSampleComponent', 'IgxGridModule',
                    'IgxBadgeModule', 'HttpClientModule', 'RemoteFilteringService', 'IgxToastModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['RemoteFilteringSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxBadgeModule', 'HttpClientModule', 'IgxToastModule'],
                ngProviders: ['RemoteFilteringService']
            })
        }));

        configs.push(new Config({
            component: 'PinningSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts', '/src/app/services/svgIcons.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['PinningSampleComponent', 'IgxGridModule', 'IgxIconModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['PinningSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxIconModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'PinningToolbarSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['PinningToolbarSampleComponent', 'IgxGridModule', 'IgxIconModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['PinningToolbarSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxIconModule'],
                ngProviders: []
            })
        }));

        // column-moving sample
        configs.push(new Config({
            component: 'GridMovingSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/financialData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridMovingSampleComponent', 'IgxGridModule', 'IgxBadgeModule', 'IgxIconModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridMovingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxBadgeModule', 'IgxIconModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridMovingStyledSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/financialData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridMovingStyledSampleComponent', 'IgxGridModule', 'IgxBadgeModule', 'IgxIconModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridMovingStyledSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxBadgeModule', 'IgxIconModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridToolbarSample1Component',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/athletesData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridToolbarSample1Component', 'IgxAvatarModule', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridToolbarSample1Component'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxAvatarModule', 'IgxGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridToolbarSample2Component',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/athletesData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridToolbarSample2Component', 'IgxAvatarModule', 'IgxGridModule', 'IgxSwitchModule',
                    'IgxExcelExporterService', 'IgxCsvExporterService', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridToolbarSample2Component'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxAvatarModule', 'IgxGridModule', 'IgxSwitchModule'],
                ngProviders: ['IgxExcelExporterService', 'IgxCsvExporterService']
            })
        }));

        configs.push(new Config({
            component: 'GridToolbarSample3Component',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/athletesData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridToolbarSample3Component', 'IgxAvatarModule', 'IgxGridModule',
                    'IgxExcelExporterService', 'IgxCsvExporterService', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridToolbarSample3Component'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxAvatarModule', 'IgxGridModule'],
                ngProviders: ['IgxExcelExporterService', 'IgxCsvExporterService']
            })
        }));

        configs.push(new Config({
            component: 'GridToolbarSample4Component',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/athletesData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridToolbarSample4Component', 'IgxAvatarModule', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridToolbarSample4Component'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxAvatarModule', 'IgxGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridToolbarStyleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/athletesData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridToolbarStyleComponent', 'IgxAvatarModule', 'IgxGridModule',
                    'IgxExcelExporterService', 'IgxCsvExporterService', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridToolbarStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxAvatarModule', 'IgxGridModule'],
                ngProviders: ['IgxExcelExporterService', 'IgxCsvExporterService']
            })
        }));

        configs.push(new Config({
            component: 'GridEditingSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/grid/grid-editing-sample/data.ts',
                '/src/app/grid/grid-editing-sample/product.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxCheckboxModule', 'IgxDatePickerModule', 'IgxDialogModule',
                    'IgxGridModule', 'IgxInputGroupModule', 'IgxIconModule', 'IgxComboModule', 'IgxToastModule',
                    'IgxRippleModule', 'GridEditingSampleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridEditingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxButtonModule', 'IgxCheckboxModule', 'IgxDatePickerModule', 'IgxDialogModule',
                    'IgxGridModule', 'IgxInputGroupModule', 'IgxIconModule', 'IgxRippleModule', 'IgxToastModule', 'IgxComboModule']
            })
        }));

        configs.push(new Config({
            component: 'GridEditingEventsComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'IgxToastModule', 'GridEditingEventsComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridEditingEventsComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxToastModule']
            })
        }));

        configs.push(new Config({
            component: 'GridEditingStyleSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridEditingStyleSampleComponent', 'IgxGridModule', 'IgxDatePickerModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridEditingStyleSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxDatePickerModule']
            })
        }));

        configs.push(new Config({
            component: 'GridMultiColumnHeadersComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridMultiColumnHeadersComponent', 'IgxGridModule', 'IgxButtonModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridMultiColumnHeadersComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxButtonModule']
            })
        }));

        configs.push(new Config({
            component: 'GridMultiColumnHeadersStylingComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridMultiColumnHeadersStylingComponent', 'IgxGridModule', 'IgxButtonModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridMultiColumnHeadersStylingComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxButtonModule']
            })
        }));

        configs.push(new Config({
            component: 'GridMultiColumnHeadersExportComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridMultiColumnHeadersExportComponent', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridMultiColumnHeadersExportComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            component: 'RemotePagingGridSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/services/remotePaging.service.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['RemotePagingGridSampleComponent', 'IgxGridModule', 'RouterModule', 'HttpClientModule', 'RemotePagingService',
                    'IgxSelectModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['RemotePagingGridSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'RouterModule.forRoot([])', 'IgxGridModule', 'HttpClientModule', 'IgxSelectModule'],
                ngProviders: ['RemotePagingService']
            })
        }));

        configs.push(new Config({
            component: 'CustomRemotePagingGridSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/services/remotePaging.service.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['CustomRemotePagingGridSampleComponent', 'IgxGridModule', 'RouterModule', 'HttpClientModule',
                    'RemotePagingService', 'IgxSelectModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['CustomRemotePagingGridSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'RouterModule.forRoot([])', 'IgxGridModule', 'HttpClientModule', 'IgxSelectModule'],
                ngProviders: ['RemotePagingService']
            })
        }));

        configs.push(new Config({
            component: 'GridDisplayDensitySampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/invoiceData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxButtonGroupModule',
                    'IgxGridModule', 'GridDisplayDensitySampleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridDisplayDensitySampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxButtonModule', 'IgxButtonGroupModule',
                    'IgxGridModule']
            })
        }));

        // Grid cellClasses
        configs.push(new Config({
            component: 'GridConditionalCellStyleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/athletesData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'GridConditionalCellStyleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridConditionalCellStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            })
        }));

        // Grid cellStyles
        configs.push(new Config({
            component: 'GridConditionalCellStyle2Component',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/athletesData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'GridConditionalCellStyle2Component', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridConditionalCellStyle2Component'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            })
        }));

        // Grid Batch Editing
        configs.push(new Config({
            component: 'GridBatchEditingSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts', '/src/app/data/utils.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridBatchEditingSampleComponent', 'IgxGridModule', 'IgxDialogModule', 'IgxButtonModule',
                    'IgxFocusModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridBatchEditingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxDialogModule', 'IgxButtonModule',
                    'IgxFocusModule']
            })
        }));

        // Grid with Action Strip
        configs.push(new Config({
            component: 'GridActionStripSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts', '/src/app/data/utils.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridActionStripSampleComponent', 'IgxGridModule', 'IgxDialogModule', 'IgxButtonModule',
                    'IgxFocusModule', 'IgxPreventDocumentScrollModule', 'IgxActionStripModule'],
                ngDeclarations: ['GridActionStripSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxDialogModule', 'IgxButtonModule', 'IgxActionStripModule',
                    'IgxFocusModule']
            })
        }));

        // Grid Custom Summaries
        configs.push(new Config({
            component: 'GridCustomSummariesSelectionComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridCustomSummariesSelectionComponent', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridCustomSummariesSelectionComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            })
        }));

        // Grid Row Editing
        configs.push(new Config({
            component: 'GridRowEditSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridRowEditSampleComponent', 'IgxGridModule', 'IgxFocusModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridRowEditSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxFocusModule']
            })
        }));

        // Grid Row Editing Styling
        configs.push(new Config({
            component: 'GridRowEditStyleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridRowEditStyleComponent', 'IgxGridModule', 'IgxFocusModule', 'IgxIconModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridRowEditStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxFocusModule', 'IgxIconModule']
            })
        }));

        configs.push(new Config({
            component: 'GridCustomFilteringComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridCustomFilteringComponent', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridCustomFilteringComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            component: 'ExcelStyleFilteringSample1Component',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['ExcelStyleFilteringSample1Component', 'IgxGridModule', 'IgxButtonGroupModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['ExcelStyleFilteringSample1Component'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxButtonGroupModule']
            })
        }));

        configs.push(new Config({
            component: 'ExcelStyleFilteringSample2Component',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['ExcelStyleFilteringSample2Component', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['ExcelStyleFilteringSample2Component'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            component: 'ExcelStyleFilteringSample3Component',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['ExcelStyleFilteringSample3Component', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['ExcelStyleFilteringSample3Component'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            component: 'GridExcelStyleFilteringLoadOnDemandComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/grid/grid-excel-style-filtering-load-on-demand/remoteValues.service.ts',
                '/src/app/grid/grid-excel-style-filtering-load-on-demand/employees.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridExcelStyleFilteringLoadOnDemandComponent', 'IgxGridModule', 'RemoteValuesService', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridExcelStyleFilteringLoadOnDemandComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule'],
                ngProviders: ['RemoteValuesService']
            })
        }));

        configs.push(new Config({
            component: 'ExcelStyleFilteringStyleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['ExcelStyleFilteringStyleComponent', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['ExcelStyleFilteringStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            component: 'GridExternalExcelStyleFilteringComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridExternalExcelStyleFilteringComponent', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridExternalExcelStyleFilteringComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            component: 'GridExternalAdvancedFilteringComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridExternalAdvancedFilteringComponent', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridExternalAdvancedFilteringComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            component: 'GridMultiCellSelectionComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridMultiCellSelectionComponent', 'IgxGridModule', 'IgxToastModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridMultiCellSelectionComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxToastModule']
            })
        }));

        configs.push(new Config({
            component: 'GridMultiCellSelectionStyleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridMultiCellSelectionStyleComponent', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridMultiCellSelectionStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            component: 'GridMultiRowLayoutComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridMultiRowLayoutComponent', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridMultiRowLayoutComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            })
        }));

        const gridSaveStateSampleConfig = new Config({
            component: 'GridSaveStateComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/grid/grid-save-state/localData.ts',
                '/src/app/grid/grid-save-state/about.component.ts',
                '/src/app/grid/grid-save-state/about.component.html'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridSaveStateComponent', 'IgxGridModule', 'IgxTooltipModule',
                    'IgxToastModule', 'IgxSwitchModule', 'AboutComponent', 'Router', 'RouterModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridSaveStateComponent', 'AboutComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxTooltipModule',
                    'RouterModule.forRoot([\{component: AboutComponent, path: \'grid-about\'},\{component: GridSaveStateComponent, path: \'grid-state\'},\{ path: \'\', redirectTo: \'/grid-state\', pathMatch: \'full\' }])',
                    'IgxToastModule', 'IgxSwitchModule']
            })
        });
        gridSaveStateSampleConfig.usesRouting = true;
        configs.push(gridSaveStateSampleConfig);

        configs.push(new Config({
            component: 'GridMultiRowLayoutConfigurationComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridMultiRowLayoutConfigurationComponent', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridMultiRowLayoutConfigurationComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'GridDragToGridSampleComponent', 'IgxDragDropModule',
                    'IgxIconModule', 'IgxButtonModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridDragToGridSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxDragDropModule', 'IgxIconModule', 'IgxButtonModule']
            }),
            component: 'GridDragToGridSampleComponent'
        }));

        configs.push(new Config({
            component: 'GridNestedDataBindComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/grid/grid-nested-data-binding/nestedData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridNestedDataBindComponent', 'IgxGridModule', 'IgxInputGroupModule', 'IgxExpansionPanelModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridNestedDataBindComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxInputGroupModule', 'IgxExpansionPanelModule']
            })
        }));

        configs.push(new Config({
            component: 'GridNestedDataBindAminoacidComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/grid/grid-nested-data-binding-2/data.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridNestedDataBindAminoacidComponent', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridNestedDataBindAminoacidComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            component: 'GridCompositeDataComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridCompositeDataComponent', 'IgxGridModule', 'IgxInputGroupModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridCompositeDataComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxInputGroupModule']
            })
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'GridDragBaseSampleComponent', 'IgxDragDropModule', 'IgxButtonModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridDragBaseSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxDragDropModule', 'IgxButtonModule']
            }),
            component: 'GridDragBaseSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts',
                'src/app/grid/grid-contextmenu-sample/contextmenu/contextmenu.component.ts',
                'src/app/grid/grid-contextmenu-sample/contextmenu/contextmenu.component.html',
                'src/app/grid/grid-contextmenu-sample/contextmenu/contextmenu.component.scss'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'GridContextmenuSampleComponent', 'ContextmenuComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridContextmenuSampleComponent', 'ContextmenuComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            }),
            component: 'GridContextmenuSampleComponent'
        }));

        configs.push(new Config({
            component: 'GridCustomKBNavigationComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridCustomKBNavigationComponent', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridCustomKBNavigationComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/grid/grid-row-drag/data.ts',
                '/src/app/grid/grid-row-drag/planet/planet.component.html',
                '/src/app/grid/grid-row-drag/planet/planet.component.scss',
                '/src/app/grid/grid-row-drag/planet/planet.component.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'GridDragSampleComponent', 'PlanetComponent', 'IgxDragDropModule', 'IgxDialogModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridDragSampleComponent', 'PlanetComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxDragDropModule', 'IgxDialogModule']
            }),
            component: 'GridDragSampleComponent'
        }));

        configs.push(new Config({
            component: 'GridMRLCustomNavigationComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/company-data.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridMRLCustomNavigationComponent', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridMRLCustomNavigationComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            component: 'CustomGridPagingStyleSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/athletesData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['CustomGridPagingStyleSampleComponent', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['CustomGridPagingStyleSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            component: 'GridMultipleRowDragComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/data/customers.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'GridMultipleRowDragComponent', 'IgxDragDropModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridMultipleRowDragComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxDragDropModule']
            })
        }));

        configs.push(new Config({
            component: 'GridRowReorderComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/data/customers.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'GridRowReorderComponent', 'IgxDragDropModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridRowReorderComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxDragDropModule']
            })
        }));

        configs.push(new Config({
            component: 'GridGroupByPagingSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/data/invoiceData.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'IgxIconModule', 'GridGroupByPagingSampleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridGroupByPagingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxIconModule']
            })
        }));
        configs.push(new Config({
            component: 'GridMultiColumnHeaderTemplateComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridMultiColumnHeaderTemplateComponent', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridMultiColumnHeaderTemplateComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            })
        }));
        configs.push(new Config({
            component: 'GridClipboardSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridClipboardSampleComponent', 'IgxGridModule', 'IgxSwitchModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridClipboardSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxSwitchModule']
            })
        }));
        configs.push(new Config({
            component: 'PinningStylingComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['PinningStylingComponent', 'IgxGridModule', 'IgxIconModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['PinningStylingComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxIconModule']
            })
        }));
        configs.push(new Config({
            component: 'GridGroupByStylingComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/invoiceData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridGroupByStylingComponent', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridGroupByStylingComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            })
        }));
        configs.push(new Config({
            component: 'GridCellSelectionComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridCellSelectionComponent', 'IgxGridModule', 'IgxSwitchModule',
                    'IgxIconModule', 'IgxButtonGroupModule', 'IgxAvatarModule', 'IgxSnackbarModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridCellSelectionComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxSnackbarModule']
            })
        }));

        configs.push(new Config({
            component: 'GridMultiRowLayoutStylingComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridMultiRowLayoutStylingComponent', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridMultiRowLayoutStylingComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            component: 'GridAdvancedFilteringSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridAdvancedFilteringSampleComponent', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridAdvancedFilteringSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            component: 'GridColumnDataTypesSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridColumnDataTypesSampleComponent', 'IgxGridModule', 'IgxTooltipModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridColumnDataTypesSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxTooltipModule']
            })
        }));

        configs.push(new Config({
            component: 'GridAdvancedFilteringStyleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridAdvancedFilteringStyleComponent', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridAdvancedFilteringStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            component: 'GridConditionalRowSelectorsComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: [
                    'IgxGridModule', 'GridConditionalRowSelectorsComponent', 'IgxCheckboxModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridConditionalRowSelectorsComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxCheckboxModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridAllDataSummaryComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridAllDataSummaryComponent', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridAllDataSummaryComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            component: 'GridCollapsibleColumnGroupsComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/invoiceData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridCollapsibleColumnGroupsComponent', 'IgxGridModule', 'IgxTooltipModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridCollapsibleColumnGroupsComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxTooltipModule']
            })
        }));

        configs.push(new Config({
            component: 'RightPinningSampleComponent',
            additionalFiles: [
                '/src/app/data/employeesData.ts',
                '/src/app/data/athletesData.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['RightPinningSampleComponent', 'IgxGridModule', 'IgxTooltipModule', 'IgxAvatarModule'],
                ngDeclarations: ['RightPinningSampleComponent'],
                ngImports: ['IgxGridModule', 'IgxTooltipModule', 'IgxAvatarModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridColumnSelectionComponent',
            additionalFiles: [
                '/src/app/data/customers.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridColumnSelectionComponent', 'IgxGridModule'],
                ngDeclarations: ['GridColumnSelectionComponent'],
                ngImports: ['IgxGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridColumnGroupSelectionComponent',
            additionalFiles: [
                '/src/app/data/customers.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridColumnGroupSelectionComponent', 'IgxGridModule'],
                ngDeclarations: ['GridColumnGroupSelectionComponent'],
                ngImports: ['IgxGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridColumnSelectionStylesComponent',
            additionalFiles: [
                '/src/app/data/customers.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridColumnSelectionStylesComponent', 'IgxGridModule'],
                ngDeclarations: ['GridColumnSelectionStylesComponent'],
                ngImports: ['IgxGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridRemoteVirtualizationAddRowSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/services/remote.service.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridRemoteVirtualizationAddRowSampleComponent', 'IgxGridModule', 'IgxToastModule',
                    'IgxBadgeModule', 'HttpClientModule', 'RemoteService', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridRemoteVirtualizationAddRowSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxToastModule', 'IgxBadgeModule', 'HttpClientModule'],
                ngProviders: ['RemoteService']
            })
        }));

        configs.push(new Config({
            component: 'GridRowPinningSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridRowPinningSampleComponent', 'IgxActionStripModule', 'IgxSwitchModule', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridRowPinningSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxActionStripModule', 'IgxSwitchModule', 'IgxGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridRowPinningExtraColumnSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts', '/src/app/services/svgIcons.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridRowPinningExtraColumnSampleComponent', 'IgxSwitchModule', 'IgxGridModule', 'IgxIconModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridRowPinningExtraColumnSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxSwitchModule', 'IgxGridModule', 'IgxIconModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridPinningDragSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridPinningDragSampleComponent', 'IgxActionStripModule', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridPinningDragSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxActionStripModule', 'IgxGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridRowPinningStylingSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridRowPinningStylingSampleComponent', 'IgxActionStripModule', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridRowPinningStylingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxActionStripModule', 'IgxGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridKeyboardnavGuide',
            additionalFiles: [
                '/src/app/data/customers.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridKeyboardnavGuide', 'IgxGridModule', 'IgxListModule', 'IgxOverlayService'],
                ngDeclarations: ['GridKeyboardnavGuide'],
                ngImports: ['IgxGridModule', 'IgxListModule'],
                ngProviders: ['IgxOverlayService']
            })
        }));

        configs.push(new Config({
            component: 'RemotePagingDefaultTemplateComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/services/remotePaging.service.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['RemotePagingDefaultTemplateComponent', 'IgxGridModule', 'RouterModule',
                    'HttpClientModule', 'RemotePagingService', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['RemotePagingDefaultTemplateComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'RouterModule.forRoot([])', 'IgxGridModule', 'HttpClientModule'],
                ngProviders: ['RemotePagingService']
            })
        }));

        // Grid Batch Editing with remote paging
        configs.push(new Config({
            component: 'RemotePagingBatchEditingComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/utils.ts', '/src/app/services/remotePaging.service.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['RemotePagingBatchEditingComponent', 'IgxGridModule', 'IgxDialogModule', 'IgxButtonModule',
                    'RemotePagingService', 'HttpClientModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['RemotePagingBatchEditingComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxDialogModule', 'IgxButtonModule',
                    'HttpClientModule'],
                ngProviders: ['RemotePagingService']
            })
        }));

        configs.push(new Config({
            component: 'RemotePagingDefaultTemplateComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/services/remotePaging.service.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['RemotePagingDefaultTemplateComponent', 'IgxGridModule', 'RouterModule',
                    'HttpClientModule', 'RemotePagingService', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['RemotePagingDefaultTemplateComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'RouterModule.forRoot([])', 'IgxGridModule', 'HttpClientModule'],
                ngProviders: ['RemotePagingService']
            })
        }));

        configs.push(new Config({
            component: 'GridExternalOutletComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridExternalOutletComponent', 'IgxGridModule', 'IgxToggleModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridExternalOutletComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxToggleModule']
            })
        }));

        configs.push(new Config({
            component: 'GridSortingIndicatorsComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/utils.ts', '/src/app/data/financialData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridSortingIndicatorsComponent', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridSortingIndicatorsComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridExportVisualizationComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/utils.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridExportVisualizationComponent', 'IgxGridModule', 'IgxPreventDocumentScrollModule', 'IgxExcelExporterService', 'IgxCsvExporterService'],
                ngDeclarations: ['GridExportVisualizationComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule'],
                ngProviders: ['IgxExcelExporterService', 'IgxCsvExporterService']
            })
        }));

        configs.push(new Config({
            component: 'GridAddRowSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridAddRowSampleComponent', 'IgxGridModule', 'IgxPreventDocumentScrollModule', 'IgxActionStripModule', 'IgxInputGroupModule', 'IgxFocusModule'],
                ngDeclarations: ['GridAddRowSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule','IgxActionStripModule', 'IgxInputGroupModule', 'IgxFocusModule']
            })
        }));

        configs.push(new Config({
            component: 'GridEditingLifecycleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'IgxPreventDocumentScrollModule', 'GridEditingLifecycleComponent', 'IgxSwitchModule'],
                ngDeclarations: ['GridEditingLifecycleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxSwitchModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridSelectComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/grid/grid-select/data.ts', '/src/app/grid/grid-select/characters.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxSelectModule', 'GridSelectComponent' ],
                ngDeclarations: ['GridSelectComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxSelectModule']
            })
        }));

        configs.push(new Config({
            component: 'GridFormattedFilteringStrategyComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridFormattedFilteringStrategyComponent', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridFormattedFilteringStrategyComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            component: 'GridSummaryFormatterComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridSummaryFormatterComponent', 'IgxGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['GridSummaryFormatterComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule']
            })
        }));

        return configs;
    }
}
