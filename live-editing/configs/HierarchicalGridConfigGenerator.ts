/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-len */
import { HttpClientModule } from '@angular/common/http';
import {
    IgxActionStripModule,
    IgxAvatarModule,
    IgxButtonGroupModule,
    IgxButtonModule,
    IgxCheckboxModule,
    IgxDatePickerModule,
    IgxDialogModule,
    IgxDragDropModule,
    IgxGridModule,
    IgxHierarchicalGridAPIService,
    IgxHierarchicalGridModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxListModule,
    IgxOverlayService,
    IgxSelectModule,
    IgxSnackbarModule,
    IgxSwitchModule,
    IgxToastModule,
    IgxTooltipModule,
    IgxToggleModule,
    IgxExcelExporterService
} from 'igniteui-angular';
import { AppModuleConfig, Config, IConfigGenerator } from 'igniteui-live-editing';
import { Router, RouterModule } from '@angular/router';
export class HierarchicalGridConfigGenerator implements IConfigGenerator {
    public additionalImports = {
        IgxPreventDocumentScrollModule: '../../src/app/directives/prevent-scroll.directive',
        RemoteValuesService: '../../src/app/services/remoteValues.service',
        HGridContextmenuComponent: '../../src/app/hierarchical-grid/hierarchical-grid-sorting/hgrid-contextmenu/hgrid-contextmenu.component',
        RemoteLoDService: '../../src/app/services/remote-lod.service'
    };
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridEditingSampleComponent', 'IgxDialogModule',
                    'IgxButtonModule', 'IgxCheckboxModule', 'IgxDatePickerModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridEditingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule', 'IgxDialogModule', 'IgxButtonModule', 'IgxCheckboxModule',
                    'IgxDatePickerModule']
            }),
            component: 'HGridEditingSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridEditingEventsComponent', 'IgxToastModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridEditingEventsComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule', 'IgxToastModule']
            }),
            component: 'HGridEditingEventsComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridRowEditingSampleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridRowEditingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridRowEditingSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridRowEditStyleComponent', 'IgxIconModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridRowEditStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule', 'IgxIconModule']
            }),
            component: 'HGridRowEditStyleComponent'

        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridEditingStyleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridEditingStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridEditingStyleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridBatchEditingSampleComponent',
                    'IgxButtonModule', 'IgxCheckboxModule',
                    'IgxDatePickerModule', 'IgxGridModule', 'IgxDialogModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridBatchEditingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule', 'IgxButtonModule', 'IgxCheckboxModule',
                    'IgxDatePickerModule', 'IgxGridModule', 'IgxDialogModule']
            }),
            component: 'HGridBatchEditingSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HierarchicalGridFilteringStyleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HierarchicalGridFilteringStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HierarchicalGridFilteringStyleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridFilteringSampleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridFilteringSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridFilteringSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridFilteringTemplateSampleComponent', 'IgxInputGroupModule', 'IgxDatePickerModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridFilteringTemplateSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule', 'IgxInputGroupModule', 'IgxDatePickerModule']
            }),
            component: 'HGridFilteringTemplateSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridExcelStyleFilteringSample1Component', 'IgxButtonGroupModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridExcelStyleFilteringSample1Component'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule', 'IgxButtonGroupModule']
            }),
            component: 'HGridExcelStyleFilteringSample1Component'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridExcelStyleFilteringSample2Component', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridExcelStyleFilteringSample2Component'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridExcelStyleFilteringSample2Component'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridExcelStyleFilteringSample3Component', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridExcelStyleFilteringSample3Component'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridExcelStyleFilteringSample3Component'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridExcelStyleFilteringStyleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridExcelStyleFilteringStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridExcelStyleFilteringStyleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridExternalExcelStyleFilteringComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridExternalExcelStyleFilteringComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridExternalExcelStyleFilteringComponent'
        }));

        configs.push(new Config({
            component: 'HGridExcelExportSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/artistData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['HGridExcelExportSampleComponent', 'IgxHierarchicalGridModule', 'IgxPreventDocumentScrollModule', 'IgxExcelExporterService'],
                ngDeclarations: ['HGridExcelExportSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule'],
                ngProviders: ['IgxExcelExporterService']
            })
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridExternalAdvancedFilteringComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridExternalAdvancedFilteringComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridExternalAdvancedFilteringComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridCustomFilteringSampleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridCustomFilteringSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridCustomFilteringSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/hierarchical-grid-sorting/hgrid-contextmenu/hgrid-contextmenu.component.ts',
                '/src/app/hierarchical-grid/hierarchical-grid-sorting/hgrid-contextmenu/hgrid-contextmenu.component.scss',
                '/src/app/hierarchical-grid/hierarchical-grid-sorting/hgrid-contextmenu/hgrid-contextmenu.component.html'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridSortingSampleComponent', 'HGridContextmenuComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridSortingSampleComponent', 'HGridContextmenuComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridSortingSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridSortingStylingComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridSortingStylingComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridSortingStylingComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridSelectionSampleComponent', 'IgxSwitchModule',
                    'IgxSnackbarModule', 'IgxButtonGroupModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridSelectionSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule', 'IgxSwitchModule', 'IgxSnackbarModule', 'IgxButtonGroupModule']
            }),
            component: 'HGridSelectionSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridSummaryStylingComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridSummaryStylingComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridSummaryStylingComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridSummarySampleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridSummarySampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridSummarySampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridPagingSampleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridPagingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridPagingSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/hierarchical-grid/hierarchical-grid-paging/remotePagingService.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridRemotePagingSampleComponent', 'HttpClientModule', 'IgxSelectModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridRemotePagingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule', 'HttpClientModule', 'IgxSelectModule']
            }),
            component: 'HGridRemotePagingSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridDisplayDensitySampleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridDisplayDensitySampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridDisplayDensitySampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridColumnMovingSampleStyledComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridColumnMovingSampleStyledComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridColumnMovingSampleStyledComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridColumnMovingSampleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridColumnMovingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridColumnMovingSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridPinningSampleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridPinningSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridPinningSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridToolbarPinningComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridToolbarPinningComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridToolbarPinningComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridResizeLineStylingComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridResizeLineStylingComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridResizeLineStylingComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridColumnHidingSampleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridColumnHidingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridColumnHidingSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HierarchicalGridColumnHidingToolbarStyleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HierarchicalGridColumnHidingToolbarStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HierarchicalGridColumnHidingToolbarStyleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridCostumHidingSampleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridCostumHidingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridCostumHidingSampleComponent'
        }));

        // HGrid Multi Cell Selection Styling
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridMultiCellStyleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridMultiCellStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridMultiCellStyleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridMultiHeadersSampleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridMultiHeadersSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridMultiHeadersSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridMultiHeadersStylingComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridMultiHeadersStylingComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridMultiHeadersStylingComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridMultiColumnHeadersExportComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridMultiColumnHeadersExportComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridMultiColumnHeadersExportComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridToolbarTitleSampleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridToolbarTitleSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridToolbarTitleSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridToolbarOptionsSampleComponent', 'IgxPreventDocumentScrollModule', 'IgxSwitchModule'],
                ngDeclarations: ['HGridToolbarOptionsSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule', 'IgxSwitchModule']
            }),
            component: 'HGridToolbarOptionsSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridToolbarCustomSampleComponent', 'IgxButtonModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridToolbarCustomSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule', 'IgxButtonModule']
            }),
            component: 'HGridToolbarCustomSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HierarchicalGridToolbarStyleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HierarchicalGridToolbarStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HierarchicalGridToolbarStyleComponent'
        }));

        // Hierarchical Grid Load on Demand Sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/services/remote-lod.service.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HierarchicalGridLoDSampleComponent', 'RemoteLoDService', 'HttpClientModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HierarchicalGridLoDSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule', 'HttpClientModule'],
                ngProviders: ['RemoteLoDService']
            }),
            component: 'HierarchicalGridLoDSampleComponent'
        }));

        // Hierarchical Grid Excel Style Filtering Load On Demand Sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/services/remoteValues.service.ts',
                '/src/app/data/singersData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HierarchicalGridExcelStyleFilteringLoadOnDemandComponent', 'RemoteValuesService', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HierarchicalGridExcelStyleFilteringLoadOnDemandComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule'],
                ngProviders: ['RemoteValuesService']
            }),
            component: 'HierarchicalGridExcelStyleFilteringLoadOnDemandComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/utils.ts', '/src/app/data/files.data.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridDragSampleComponent', 'IgxDragDropModule', 'IgxIconModule', 'IgxButtonModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridDragSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule', 'IgxDragDropModule', 'IgxIconModule', 'IgxButtonModule']
            }),
            component: 'HGridDragSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/utils.ts', '/src/app/data/files.data.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridRowDragBaseComponent', 'IgxDragDropModule', 'IgxButtonModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridRowDragBaseComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule', 'IgxDragDropModule', 'IgxButtonModule']
            }),
            component: 'HGridRowDragBaseComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/data/utils.ts',
                '/src/app/data/files.data.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridMultiRowDragComponent', 'IgxDragDropModule', 'IgxButtonModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridMultiRowDragComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule', 'IgxDragDropModule', 'IgxButtonModule']
            }),
            component: 'HGridMultiRowDragComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridCustomKBNavigationComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridCustomKBNavigationComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridCustomKBNavigationComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/utils.ts', '/src/app/data/files.data.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'IgxDragDropModule', 'HGridRowReorderComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridRowReorderComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule', 'IgxDragDropModule']
            }),
            component: 'HGridRowReorderComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridPagingStyleSampleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridPagingStyleSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridPagingStyleSampleComponent',
            shortenComponentPathBy: '/hierarchical-grid/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridMultiHeaderTemplateSampleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridMultiHeaderTemplateSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridMultiHeaderTemplateSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridStylingComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridStylingComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridStylingComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridAdvancedFilteringSampleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridAdvancedFilteringSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridAdvancedFilteringSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridAdvancedFilteringStyleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridAdvancedFilteringStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridAdvancedFilteringStyleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/data/singersData.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridConditionalRowSelectorsComponent', 'IgxCheckboxModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridConditionalRowSelectorsComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule', 'IgxCheckboxModule']
            }),
            component: 'HGridConditionalRowSelectorsComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxCheckboxModule', 'IgxHierarchicalGridModule', 'HGridSelectionTemplateNumbersSampleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridSelectionTemplateNumbersSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxCheckboxModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridSelectionTemplateNumbersSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'IgxTooltipModule', 'HGridCollapsibleColumnGroupComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridCollapsibleColumnGroupComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule', 'IgxTooltipModule']
            }),
            component: 'HGridCollapsibleColumnGroupComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridAllDataSummaryComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridAllDataSummaryComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridAllDataSummaryComponent'
        }));

        configs.push(new Config({
            additionalFiles: [
                '/src/app/data/employeesData.ts',
                '/src/app/data/athletesData.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['HierarchicalGridRightPinningSampleComponent', 'IgxHierarchicalGridModule', 'IgxAvatarModule', 'IgxTooltipModule'],
                ngDeclarations: ['HierarchicalGridRightPinningSampleComponent'],
                ngImports: ['IgxHierarchicalGridModule', 'IgxAvatarModule', 'IgxTooltipModule'],
                ngProviders: []
            }),
            component: 'HierarchicalGridRightPinningSampleComponent'
        }));

        configs.push(new Config({
            component: 'HierarchicalGridColumnSelectionComponent',
            additionalFiles: [
                '/src/app/data/singersData.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['HierarchicalGridColumnSelectionComponent', 'IgxHierarchicalGridModule'],
                ngDeclarations: ['HierarchicalGridColumnSelectionComponent'],
                ngImports: ['IgxHierarchicalGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'HierarchicalGridColumnGroupSelectionComponent',
            additionalFiles: [
                '/src/app/data/customers.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['HierarchicalGridColumnGroupSelectionComponent', 'IgxHierarchicalGridModule'],
                ngDeclarations: ['HierarchicalGridColumnGroupSelectionComponent'],
                ngImports: ['IgxHierarchicalGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'HGridColumnSelectionStylesComponent',
            additionalFiles: [
                '/src/app/data/singersData.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['HGridColumnSelectionStylesComponent', 'IgxHierarchicalGridModule'],
                ngDeclarations: ['HGridColumnSelectionStylesComponent'],
                ngImports: ['IgxHierarchicalGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'HGridRowPinningExtraColumnSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts', '/src/app/services/svgIcons.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['HGridRowPinningExtraColumnSampleComponent', 'IgxHierarchicalGridModule', 'IgxIconModule', 'IgxPreventDocumentScrollModule',
                    'IgxSwitchModule'],
                ngDeclarations: ['HGridRowPinningExtraColumnSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule', 'IgxIconModule', 'IgxSwitchModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'HGridRowPinningSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts', '/src/app/services/svgIcons.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['HGridRowPinningSampleComponent', 'IgxHierarchicalGridModule', 'IgxActionStripModule', 'IgxPreventDocumentScrollModule',
                    'IgxSwitchModule'],
                ngDeclarations: ['HGridRowPinningSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxActionStripModule', 'IgxHierarchicalGridModule', 'IgxSwitchModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'HGridRowPinningStylingSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts', '/src/app/services/svgIcons.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['HGridRowPinningStylingSampleComponent', 'IgxHierarchicalGridModule', 'IgxActionStripModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridRowPinningStylingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxActionStripModule', 'IgxHierarchicalGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'HGridKeyboardnavGuide',
            additionalFiles: [
                '/src/app/data/customers.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['HGridKeyboardnavGuide', 'IgxHierarchicalGridModule', 'IgxListModule', 'IgxOverlayService'],
                ngDeclarations: ['HGridKeyboardnavGuide'],
                ngImports: ['IgxHierarchicalGridModule', 'IgxListModule'],
                ngProviders: ['IgxOverlayService']
            })
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/hierarchical-grid/hierarchical-grid-remote-paging-default-template/remotePagingService.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridRemotePagingDefaultTemplateComponent', 'HttpClientModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridRemotePagingDefaultTemplateComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule', 'HttpClientModule']
            }),
            component: 'HGridRemotePagingDefaultTemplateComponent'
        }));

        const hGridSaveStateSampleConfig = new Config({
            additionalFiles: [
                '/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/hierarchical-grid-save-state/about.component.ts',
                '/src/app/hierarchical-grid/hierarchical-grid-save-state/about.component.html'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridSaveStateComponent', 'HGridAboutComponent', 'IgxPreventDocumentScrollModule', 'Router', 'RouterModule'],
                ngDeclarations: ['HGridSaveStateComponent', 'HGridAboutComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule',
                    'RouterModule.forRoot([\{component: HGridAboutComponent, path: \'hGrid-state-about\'},\{component: HGridSaveStateComponent, path: \'hGrid-state\'},\{ path: \'\', redirectTo: \'/hGrid-state\', pathMatch: \'full\' }])']
            }),
            component: 'HGridSaveStateComponent'
        });
        hGridSaveStateSampleConfig.usesRouting = true;
        configs.push(hGridSaveStateSampleConfig);

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['HierarchicalGridExternalOutletComponent', 'IgxHierarchicalGridModule', 'IgxToggleModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HierarchicalGridExternalOutletComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule', 'IgxToggleModule']
            }),
            component: 'HierarchicalGridExternalOutletComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HierarchicalGridCellSelectionComponent', 'IgxSnackbarModule',
                    'IgxButtonModule', 'IgxButtonGroupModule', 'IgxIconModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HierarchicalGridCellSelectionComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule', 'IgxSnackbarModule', 'IgxButtonModule', 'IgxButtonGroupModule', 'IgxIconModule']
            }),
            component: 'HierarchicalGridCellSelectionComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'IgxPreventDocumentScrollModule', 'HGridEditingLifecycleComponent', 'IgxSwitchModule'],
                ngDeclarations: ['HGridEditingLifecycleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule', 'IgxSwitchModule'],
                ngProviders: []
            }),
            component: 'HGridEditingLifecycleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridAddRowSampleComponent', 'IgxDialogModule',
                    'IgxButtonModule', 'IgxCheckboxModule', 'IgxDatePickerModule', 'IgxPreventDocumentScrollModule',
                    'IgxActionStripModule'],
                ngDeclarations: ['HGridAddRowSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule', 'IgxDialogModule', 'IgxButtonModule', 'IgxCheckboxModule',
                    'IgxDatePickerModule', 'IgxActionStripModule']
            }),
            component: 'HGridAddRowSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridFormattedFilteringStrategyComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridFormattedFilteringStrategyComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridFormattedFilteringStrategyComponent'
        }));

        configs.push(new Config({
            component: 'HGridSummaryFormatterComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['HGridSummaryFormatterComponent', 'IgxHierarchicalGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridSummaryFormatterComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            })
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule',
                    'HierarchicalGridPagerSampleComponent', 'IgxButtonModule', 'IgxIconModule', 'IgxSwitchModule'],
                ngDeclarations: ['HierarchicalGridPagerSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule',
                    'IgxButtonModule', 'IgxIconModule', 'IgxSwitchModule']
            }),
            component: 'HierarchicalGridPagerSampleComponent'
        }));

        return configs;
    }
}
