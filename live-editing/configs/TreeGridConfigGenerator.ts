/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-len */
import {IgxActionStripModule,
IgxAvatarModule,
IgxBadgeModule,
IgxButtonGroupModule,
IgxButtonModule,
IgxCheckboxModule,
IgxChipsModule,
IgxCsvExporterService,
IgxDatePickerModule,
IgxDialogModule,
IgxDragDropModule,
IgxExcelExporterService,
IgxGridModule,
IgxIconModule,
IgxInputGroupModule,
IgxListModule,
IgxOverlayService,
IgxRadioModule,
IgxRippleModule,
IgxSelectModule,
IgxSnackbarModule,
IgxSwitchModule,
IgxToastModule,
IgxTooltipModule,
IgxTreeGridModule,
IgxToggleModule} from 'igniteui-angular';
import {IgxSparklineCoreModule,
IgxSparklineModule} from 'igniteui-angular-charts';
import {Router, RouterModule} from '@angular/router';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing';
export class TreeGridConfigGenerator implements IConfigGenerator {
    public additionalImports = {
        IgxPreventDocumentScrollModule: '../../src/app/directives/prevent-scroll.directive',
        RemoteValuesService: '../../src/app/tree-grid/tree-grid-excel-style-filtering-load-on-demand/remoteValues.service',
        TreeGridContextmenuComponent: '../../src/app/tree-grid/tree-grid-sorting-sample/tree-grid-contextmenu/tree-grid-contextmenu.component'
};
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // TreeGrid Row Edit Sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridRowEditSampleComponent'],
                ngDeclarations: ['TreeGridRowEditSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule']
            }),
            component: 'TreeGridRowEditSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Row Edit Style
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridRowEditStyleComponent', 'IgxIconModule'],
                ngDeclarations: ['TreeGridRowEditStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxIconModule']
            }),
            component: 'TreeGridRowEditStyleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Virtualization sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/financialData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxBadgeModule', 'TreeGridVirtualizationSampleComponent'],
                ngDeclarations: ['TreeGridVirtualizationSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxBadgeModule']
            }),
            component: 'TreeGridVirtualizationSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Conditional Cell Style sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/foods.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridConditionalCellStyleComponent'],
                ngDeclarations: ['TreeGridConditionalCellStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule']
            }),
            component: 'TreeGridConditionalCellStyleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Batch Editing sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/data/utils.ts',
                '/src/app/tree-grid/data/employees-flat.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridBatchEditingSampleComponent',
                    'IgxButtonModule', 'IgxDialogModule', 'IgxGridModule'],
                ngDeclarations: ['TreeGridBatchEditingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxButtonModule', 'IgxDialogModule', 'IgxGridModule']
            }),
            component: 'TreeGridBatchEditingSampleComponent'
        }));

        // TreeGrid Search sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridSearchSampleComponent', 'IgxButtonModule',
                    'IgxIconModule', 'IgxInputGroupModule', 'IgxRippleModule', 'IgxChipsModule'],
                ngDeclarations: ['TreeGridSearchSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxButtonModule', 'IgxIconModule', 'IgxInputGroupModule', 'IgxRippleModule', 'IgxChipsModule']
            }),
            component: 'TreeGridSearchSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Column Hiding sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-detailed.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridColumnHidingSampleComponent', 'IgxRadioModule'],
                ngDeclarations: ['TreeGridColumnHidingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxRadioModule']
            }),
            component: 'TreeGridColumnHidingSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Column Hiding Toolbar sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-detailed.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridColumnHidingToolbarSampleComponent'],
                ngDeclarations: ['TreeGridColumnHidingToolbarSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule']
            }),
            component: 'TreeGridColumnHidingToolbarSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Column Hiding Toolbar style sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-detailed.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridColumnHidingToolbarStyleComponent'],
                ngDeclarations: ['TreeGridColumnHidingToolbarStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule']
            }),
            component: 'TreeGridColumnHidingToolbarStyleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Selection sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridSelectionSampleComponent',
                    'IgxSwitchModule', 'IgxSnackbarModule', 'IgxButtonGroupModule'],
                ngDeclarations: ['TreeGridSelectionSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxSwitchModule', 'IgxSnackbarModule', 'IgxButtonGroupModule']
            }),
            component: 'TreeGridSelectionSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Sorting sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/foods.ts',
                '/src/app/tree-grid/tree-grid-sorting-sample/tree-grid-contextmenu/tree-grid-contextmenu.component.html',
                '/src/app/tree-grid/tree-grid-sorting-sample/tree-grid-contextmenu/tree-grid-contextmenu.component.ts',
                '/src/app/tree-grid/tree-grid-sorting-sample/tree-grid-contextmenu/tree-grid-contextmenu.component.scss'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridSortingSampleComponent', 'IgxIconModule', 'TreeGridContextmenuComponent'],
                ngDeclarations: ['TreeGridSortingSampleComponent', 'TreeGridContextmenuComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxIconModule']
            }),
            component: 'TreeGridSortingSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Sorting Styling sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/foods.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridSortingStylingComponent', 'IgxIconModule'],
                ngDeclarations: ['TreeGridSortingStylingComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxIconModule']
            }),
            component: 'TreeGridSortingStylingComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Column Moving sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-detailed.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridColumnMovingSampleComponent', 'IgxIconModule'],
                ngDeclarations: ['TreeGridColumnMovingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxIconModule']
            }),
            component: 'TreeGridColumnMovingSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-detailed.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridColumnMovingStyledSampleComponent', 'IgxIconModule'],
                ngDeclarations: ['TreeGridColumnMovingStyledSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxIconModule']
            }),
            component: 'TreeGridColumnMovingStyledSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Column Pinning sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-detailed.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridColumnPinningSampleComponent', 'IgxIconModule'],
                ngDeclarations: ['TreeGridColumnPinningSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxIconModule']
            }),
            component: 'TreeGridColumnPinningSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Toolbar Pinning sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-detailed.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridPinningToolbarSampleComponent', 'IgxIconModule'],
                ngDeclarations: ['TreeGridPinningToolbarSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxIconModule']
            }),
            component: 'TreeGridPinningToolbarSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Column Resizing sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-detailed.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridColumnResizingSampleComponent'],
                ngDeclarations: ['TreeGridColumnResizingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule']
            }),
            component: 'TreeGridColumnResizingSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Column Resizing Line Styling sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-detailed.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridResizeLineStylingSampleComponent'],
                ngDeclarations: ['TreeGridResizeLineStylingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule']
            }),
            component: 'TreeGridResizeLineStylingSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Filtering Style sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/foods.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridFilteringStyleComponent'],
                ngDeclarations: ['TreeGridFilteringStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule']
            }),
            component: 'TreeGridFilteringStyleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Filtering sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/foods.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridFilteringSampleComponent', 'IgxInputGroupModule'],
                ngDeclarations: ['TreeGridFilteringSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxInputGroupModule']
            }),
            component: 'TreeGridFilteringSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/foods.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridFilteringTemplateSampleComponent', 'IgxInputGroupModule', 'IgxDatePickerModule'],
                ngDeclarations: ['TreeGridFilteringTemplateSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxInputGroupModule', 'IgxDatePickerModule']
            }),
            component: 'TreeGridFilteringTemplateSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/foods.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridExcelStyleFilteringSample1Component', 'IgxInputGroupModule', 'IgxButtonGroupModule'],
                ngDeclarations: ['TreeGridExcelStyleFilteringSample1Component'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxInputGroupModule', 'IgxButtonGroupModule']
            }),
            component: 'TreeGridExcelStyleFilteringSample1Component',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/foods.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridExcelStyleFilteringSample2Component', 'IgxInputGroupModule'],
                ngDeclarations: ['TreeGridExcelStyleFilteringSample2Component'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxInputGroupModule']
            }),
            component: 'TreeGridExcelStyleFilteringSample2Component',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/foods.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridExcelStyleFilteringSample3Component', 'IgxInputGroupModule'],
                ngDeclarations: ['TreeGridExcelStyleFilteringSample3Component'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxInputGroupModule']
            }),
            component: 'TreeGridExcelStyleFilteringSample3Component',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/foods.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridExcelStyleFilteringStyleComponent'],
                ngDeclarations: ['TreeGridExcelStyleFilteringStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule']
            }),
            component: 'TreeGridExcelStyleFilteringStyleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Custom Filtering sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/foods.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridFilteringCustomSampleComponent', 'IgxInputGroupModule'],
                ngDeclarations: ['TreeGridFilteringCustomSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxInputGroupModule']
            }),
            component: 'TreeGridFilteringCustomSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Multi Column Headers sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-detailed.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridMultiColumnHeadersSampleComponent', 'IgxButtonModule'],
                ngDeclarations: ['TreeGridMultiColumnHeadersSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxButtonModule']
            }),
            component: 'TreeGridMultiColumnHeadersSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Multi Column Headers Styling
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-detailed.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridMultiColumnHeadersStylingComponent', 'IgxButtonModule'],
                ngDeclarations: ['TreeGridMultiColumnHeadersStylingComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxButtonModule']
            }),
            component: 'TreeGridMultiColumnHeadersStylingComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Multi Column Headers Export
        configs.push(new Config({
            component: 'TreeGridMultiColumnHeadersExportComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['TreeGridMultiColumnHeadersExportComponent', 'IgxTreeGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['TreeGridMultiColumnHeadersExportComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule']
            })
        }));

        // TreeGrid Display Density sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-detailed.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridDisplaydensitySampleComponent', 'IgxButtonGroupModule'],
                ngDeclarations: ['TreeGridDisplaydensitySampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxButtonGroupModule']
            }),
            component: 'TreeGridDisplaydensitySampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Toolbar sample 1
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-avatars.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridToolbarSample1Component', 'IgxAvatarModule',
                    'IgxExcelExporterService', 'IgxCsvExporterService', 'IgxSwitchModule'],
                ngDeclarations: ['TreeGridToolbarSample1Component'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxAvatarModule', 'IgxSwitchModule'],
                ngProviders: ['IgxExcelExporterService', 'IgxCsvExporterService']
            }),
            component: 'TreeGridToolbarSample1Component',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Toolbar sample 2
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-avatars.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridToolbarSample2Component', 'IgxAvatarModule',
                    'IgxExcelExporterService', 'IgxCsvExporterService'],
                ngDeclarations: ['TreeGridToolbarSample2Component'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxAvatarModule'],
                ngProviders: ['IgxExcelExporterService', 'IgxCsvExporterService']
            }),
            component: 'TreeGridToolbarSample2Component',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Toolbar sample 3
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-avatars.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridToolbarSample3Component', 'IgxAvatarModule', 'IgxButtonModule', 'IgxRippleModule', 'IgxIconModule'],
                ngDeclarations: ['TreeGridToolbarSample3Component'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxAvatarModule', 'IgxButtonModule', 'IgxRippleModule', 'IgxIconModule'],
                ngProviders: []
            }),
            component: 'TreeGridToolbarSample3Component',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Toolbar sample 4
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-avatars.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridToolbarSample4Component', 'IgxAvatarModule'],
                ngDeclarations: ['TreeGridToolbarSample4Component'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxAvatarModule'],
                ngProviders: []
            }),
            component: 'TreeGridToolbarSample4Component',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Toolbar style sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-avatars.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridToolbarStyleComponent', 'IgxAvatarModule',
                    'IgxExcelExporterService', 'IgxCsvExporterService'],
                ngDeclarations: ['TreeGridToolbarStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxAvatarModule'],
                ngProviders: ['IgxExcelExporterService', 'IgxCsvExporterService']
            }),
            component: 'TreeGridToolbarStyleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Summary sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/foods.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridSummarySampleComponent', 'IgxIconModule'],
                ngDeclarations: ['TreeGridSummarySampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxIconModule']
            }),
            component: 'TreeGridSummarySampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Summary Styling sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/foods.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridSummaryStylingComponent', 'IgxIconModule'],
                ngDeclarations: ['TreeGridSummaryStylingComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxIconModule']
            }),
            component: 'TreeGridSummaryStylingComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Summary2 sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/foods.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxButtonModule', 'IgxButtonGroupModule', 'IgxTreeGridModule', 'TreeGridSummary2SampleComponent', 'IgxIconModule', 'IgxSwitchModule'],
                ngDeclarations: ['TreeGridSummary2SampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxButtonModule', 'IgxButtonGroupModule', 'IgxTreeGridModule', 'IgxIconModule', 'IgxSwitchModule']
            }),
            component: 'TreeGridSummary2SampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Paging sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/foods.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridPagingSampleComponent', 'IgxButtonModule', 'IgxRippleModule', 'IgxIconModule'],
                ngDeclarations: ['TreeGridPagingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxButtonModule', 'IgxRippleModule', 'IgxIconModule']
            }),
            component: 'TreeGridPagingSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Reusable Paginator sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/foods.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridPagerSampleComponent', 'IgxButtonModule', 'IgxRippleModule', 'IgxIconModule', 'IgxSwitchModule'],
                ngDeclarations: ['TreeGridPagerSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxButtonModule', 'IgxRippleModule', 'IgxIconModule', 'IgxSwitchModule']
            }),
            component: 'TreeGridPagerSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Editing sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts', '/src/app/tree-grid/tree-grid-editing-sample/employee.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridEditingSampleComponent', 'IgxButtonModule', 'IgxDialogModule',
                    'IgxInputGroupModule', 'IgxCheckboxModule', 'IgxDatePickerModule'],
                ngDeclarations: ['TreeGridEditingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxButtonModule', 'IgxDialogModule', 'IgxInputGroupModule', 'IgxCheckboxModule', 'IgxDatePickerModule']
            }),
            component: 'TreeGridEditingSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'TreeGridEditingEventsComponent', 'IgxTreeGridModule', 'IgxToastModule'],
                ngDeclarations: ['TreeGridEditingEventsComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxToastModule']
            }),
            component: 'TreeGridEditingEventsComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridEditingStyleComponent'],
                ngDeclarations: ['TreeGridEditingStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule']
            }),
            component: 'TreeGridEditingStyleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/foods.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridExternalExcelStyleFilteringComponent'],
                ngDeclarations: ['TreeGridExternalExcelStyleFilteringComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule']
            }),
            component: 'TreeGridExternalExcelStyleFilteringComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/foods.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridExternalAdvancedFilteringComponent'],
                ngDeclarations: ['TreeGridExternalAdvancedFilteringComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule']
            }),
            component: 'TreeGridExternalAdvancedFilteringComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Remote Filtering sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts', '/src/app/tree-grid/services/remoteFilteringService.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridRemoteFilteringSampleComponent', 'IgxIconModule', 'IgxToastModule'],
                ngDeclarations: ['TreeGridRemoteFilteringSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxIconModule', 'IgxToastModule']
            }),
            component: 'TreeGridRemoteFilteringSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid multi cell selection
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/foods.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'TreeGridMultiCellSelectionComponent', 'IgxGridModule', 'IgxTreeGridModule', 'IgxToastModule', 'IgxSnackbarModule'],
                ngDeclarations: ['TreeGridMultiCellSelectionComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxTreeGridModule', 'IgxToastModule', 'IgxSnackbarModule']
            }),
            component: 'TreeGridMultiCellSelectionComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid multi cell selection - styling
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/foods.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'TreeGridMultiCellSelectionStyleComponent', 'IgxTreeGridModule'],
                ngDeclarations: ['TreeGridMultiCellSelectionStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule']
            }),
            component: 'TreeGridMultiCellSelectionStyleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Load On Demand Sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/tree-grid-load-on-demand-sample/remoteService.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridLoadOnDemandSampleComponent'],
                ngDeclarations: ['TreeGridLoadOnDemandSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule']
            }),
            component: 'TreeGridLoadOnDemandSampleComponent'
        }));

        // TreeGrid Group By Load On Demand Sample
        configs.push(new Config({
            additionalFiles: [
                '/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/tree-grid/tree-grid-group-by-load-on-demand-sample/remoteService.ts',
                '/src/app/data/invoiceData.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridGroupByLoadOnDemandComponent'],
                ngDeclarations: ['TreeGridGroupByLoadOnDemandComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule']
            }),
            component: 'TreeGridGroupByLoadOnDemandComponent'
        }));

        // TreeGrid Excel Style Filtering Load On Demand Sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/tree-grid-excel-style-filtering-load-on-demand/remoteValues.service.ts',
                '/src/app/tree-grid/data/employees-flat.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridExcelStyleFilteringLoadOnDemandComponent', 'IgxIconModule', 'RemoteValuesService'],
                ngDeclarations: ['TreeGridExcelStyleFilteringLoadOnDemandComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxIconModule'],
                ngProviders: ['RemoteValuesService']
            }),
            component: 'TreeGridExcelStyleFilteringLoadOnDemandComponent'
        }));

        // Tree Grid Row Drag - Advanced Sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridRowDragComponent', 'IgxButtonModule',
                    'IgxInputGroupModule', 'IgxIconModule', 'IgxDragDropModule'],
                ngDeclarations: ['TreeGridRowDragComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxButtonModule', 'IgxInputGroupModule', 'IgxIconModule', 'IgxDragDropModule']
            }),
            component: 'TreeGridRowDragComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // Tree Grid Row Drag - Base Sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridRowDragBaseComponent', 'IgxButtonModule',
                    'IgxInputGroupModule', 'IgxDragDropModule'],
                ngDeclarations: ['TreeGridRowDragBaseComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxButtonModule', 'IgxInputGroupModule', 'IgxDragDropModule']
            }),
            component: 'TreeGridRowDragBaseComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // Tree Grid Multi Row Drag sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridMultiRowDragComponent', 'IgxButtonModule',
                    'IgxInputGroupModule', 'IgxIconModule', 'IgxDragDropModule'],
                ngDeclarations: ['TreeGridMultiRowDragComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxButtonModule', 'IgxInputGroupModule', 'IgxIconModule', 'IgxDragDropModule']
            }),
            component: 'TreeGridMultiRowDragComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // Tree Grid Row Rerdering sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridRowReorderComponent', 'IgxDragDropModule'],
                ngDeclarations: ['TreeGridRowReorderComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxDragDropModule']
            }),
            component: 'TreeGridRowReorderComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // Tree Grid Keyboard Navigation Sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/projects/app-lob/src/app/tree-grid/tree-grid-childdatakey-sample/data.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridKBNavigationComponent'],
                ngDeclarations: ['TreeGridKBNavigationComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule']
            }),
            component: 'TreeGridKBNavigationComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // Tree Grid Remote Paging Sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/tree-grid-remote-paging-sample/remotePagingService.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridRemotePagingSampleComponent', 'IgxSelectModule'],
                ngDeclarations: ['TreeGridRemotePagingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxSelectModule']
            }),
            component: 'TreeGridRemotePagingSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Paging sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/foods.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridPagingStyleSampleComponent', 'IgxButtonModule', 'IgxRippleModule', 'IgxIconModule'],
                ngDeclarations: ['TreeGridPagingStyleSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxButtonModule', 'IgxRippleModule', 'IgxIconModule']
            }),
            component: 'TreeGridPagingStyleSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Multi Column Header Template sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-detailed.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridMultiColumnHeaderTemplateSampleComponent'],
                ngDeclarations: ['TreeGridMultiColumnHeaderTemplateSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule']
            }),
            component: 'TreeGridMultiColumnHeaderTemplateSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Clipboard actions sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/tree-grid-clipboard-operations-sample/data.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridClipboardSampleComponent', 'IgxSwitchModule'],
                ngDeclarations: ['TreeGridClipboardSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxSwitchModule']
            }),
            component: 'TreeGridClipboardSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));
        // Tree Grid cell selection sample
        configs.push(new Config({
            component: 'TreeGridCellSelectionComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/utils.ts', '/src/app/tree-grid/data/employees-flat.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'TreeGridCellSelectionComponent', 'IgxGridModule', 'IgxSwitchModule',
                    'IgxIconModule', 'IgxButtonGroupModule', 'IgxAvatarModule', 'IgxTreeGridModule'],
                ngDeclarations: ['TreeGridCellSelectionComponent' ],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxIconModule', 'IgxSwitchModule',
                'IgxButtonGroupModule', 'IgxAvatarModule', 'IgxTreeGridModule']
            })
        }));

        // TreeGrid Advanced Filtering sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridAdvancedFilteringSampleComponent'],
                ngDeclarations: ['TreeGridAdvancedFilteringSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule']
            }),
            component: 'TreeGridAdvancedFilteringSampleComponent'
        }));

        // TreeGrid Advanced Filtering Style sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridAdvancedFilteringStyleComponent'],
                ngDeclarations: ['TreeGridAdvancedFilteringStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule']
            }),
            component: 'TreeGridAdvancedFilteringStyleComponent'
        }));

        // TreeGrid Conditional Row Selection Template actions sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridConditionalRowSelectorsSampleComponent', 'IgxCheckboxModule'],
                ngDeclarations: ['TreeGridConditionalRowSelectorsSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxCheckboxModule']
            }),
            component: 'TreeGridConditionalRowSelectorsSampleComponent'
        }));

        // TreeGrid Row Selectors Template - Numbers
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/tree-grid/data/employees-flat.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxCheckboxModule', 'IgxTreeGridModule', 'TreeGridSelectionTemplateNumbersSampleComponent'],
                ngDeclarations: ['TreeGridSelectionTemplateNumbersSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxCheckboxModule', 'IgxTreeGridModule']
            }),
            component: 'TreeGridSelectionTemplateNumbersSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-avatars.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridStyleComponent', 'IgxAvatarModule'],
                ngDeclarations: ['TreeGridStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxAvatarModule']
            }),
            component: 'TreeGridStyleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid cellStyles
        configs.push(new Config({
            component: 'TreeGridConditionalCellStyle2Component',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/foods.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridConditionalCellStyle2Component'],
                ngDeclarations: ['TreeGridConditionalCellStyle2Component'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule']
            })
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-detailed.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxTooltipModule', 'TreeGridMultiCollapsibleColumnGroupsComponent'],
                ngDeclarations: ['TreeGridMultiCollapsibleColumnGroupsComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxTooltipModule']
            }),
            component: 'TreeGridMultiCollapsibleColumnGroupsComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/tree-grid/data/employees-flat.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridAllDataSummaryComponent'],
                ngDeclarations: ['TreeGridAllDataSummaryComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule']
            }),
            component: 'TreeGridAllDataSummaryComponent'
        }));

        configs.push(new Config({
            additionalFiles: [
                '/src/app/data/athletesData.ts',
                '/src/app/tree-grid/data/employees-flat-detailed.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['TreeGridRightPinningSampleComponent', 'IgxTreeGridModule'],
                ngDeclarations: ['TreeGridRightPinningSampleComponent'],
                ngImports: ['IgxTreeGridModule'],
                ngProviders: []
            }),
            component: 'TreeGridRightPinningSampleComponent'
        }));

        configs.push(new Config({
            component: 'TreeGridColumnSelectionComponent',
            additionalFiles: [
                '/src/app/tree-grid/data/foods.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['TreeGridColumnSelectionComponent', 'IgxTreeGridModule'],
                ngDeclarations: ['TreeGridColumnSelectionComponent'],
                ngImports: ['IgxTreeGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'TreeGridColumnGroupSelectionComponent',
            additionalFiles: [
                '/src/app/tree-grid/data/employees-flat-detailed.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['TreeGridColumnGroupSelectionComponent', 'IgxTreeGridModule'],
                ngDeclarations: ['TreeGridColumnGroupSelectionComponent'],
                ngImports: ['IgxTreeGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'TreeGridColumnSelectionStylesComponent',
            additionalFiles: [
                '/src/app/tree-grid/data/foods.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['TreeGridColumnSelectionStylesComponent', 'IgxTreeGridModule'],
                ngDeclarations: ['TreeGridColumnSelectionStylesComponent'],
                ngImports: ['IgxTreeGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'TreeGridRowPinningSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['TreeGridRowPinningSampleComponent', 'IgxActionStripModule', 'IgxSwitchModule', 'IgxTreeGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['TreeGridRowPinningSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxActionStripModule', 'IgxSwitchModule', 'IgxTreeGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'TreeGridRowPinningExtraColumnSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts', '/src/app/services/svgIcons.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['TreeGridRowPinningExtraColumnSampleComponent', 'IgxTreeGridModule', 'IgxSwitchModule', 'IgxIconModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['TreeGridRowPinningExtraColumnSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxSwitchModule', 'IgxIconModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'TreeGridRowPinningStylingSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['TreeGridRowPinningStylingSampleComponent', 'IgxActionStripModule', 'IgxTreeGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['TreeGridRowPinningStylingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxActionStripModule', 'IgxTreeGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'TGridKeyboardnavGuide',
            additionalFiles: [
                '/src/app/tree-grid/data/employees-flat-detailed.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['TGridKeyboardnavGuide', 'IgxTreeGridModule', 'IgxListModule', 'IgxOverlayService'],
                ngDeclarations: ['TGridKeyboardnavGuide'],
                ngImports: ['IgxTreeGridModule', 'IgxListModule'],
                ngProviders: ['IgxOverlayService']
            })
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/tree-grid-remote-paging-default-template/remotePagingService.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridRemotePagingDefaultTemplateComponent'],
                ngDeclarations: ['TreeGridRemotePagingDefaultTemplateComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule']
            }),
            component: 'TreeGridRemotePagingDefaultTemplateComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        const treeGridSaveStateSampleConfig = new Config({
            additionalFiles: [
                '/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/tree-grid/tree-grid-save-state/data.ts',
                '/src/app/tree-grid/tree-grid-save-state/about.component.ts',
                '/src/app/tree-grid/tree-grid-save-state/about.component.html'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TGridSaveStateComponent', 'TGridAboutComponent', 'Router', 'RouterModule'],
                ngDeclarations: ['TGridSaveStateComponent', 'TGridAboutComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule',
                    'RouterModule.forRoot([\{component: TGridAboutComponent, path: \'tree-grid-state-about\'},\{component: TGridSaveStateComponent, path: \'tree-grid-state\'},\{ path: \'\', redirectTo: \'/tree-grid-state\', pathMatch: \'full\' }])']

            }),
            component: 'TGridSaveStateComponent',
            shortenComponentPathBy: '/tree-grid/'
        });
        treeGridSaveStateSampleConfig.usesRouting = true;
        configs.push(treeGridSaveStateSampleConfig);

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/foods.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridExternalOutletComponent', 'IgxToggleModule'],
                ngDeclarations: ['TreeGridExternalOutletComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxToggleModule']
            }),
            component: 'TreeGridExternalOutletComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/foods.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridExportVisualizationComponent', 'IgxToggleModule',
                    'IgxExcelExporterService', 'IgxCsvExporterService'],
                ngDeclarations: ['TreeGridExportVisualizationComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxToggleModule'],
                ngProviders: ['IgxExcelExporterService', 'IgxCsvExporterService']
            }),
            component: 'TreeGridExportVisualizationComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'TGridEditingLifecycleComponent', 'IgxTreeGridModule', 'IgxSwitchModule'],
                ngDeclarations: ['TGridEditingLifecycleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxSwitchModule']
            }),
            component: 'TGridEditingLifecycleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts', '/src/app/tree-grid/tree-grid-add-row-sample/employee.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridAddRowSampleComponent', 'IgxButtonModule', 'IgxDialogModule',
                    'IgxInputGroupModule', 'IgxCheckboxModule', 'IgxDatePickerModule', 'IgxActionStripModule'],
                ngDeclarations: ['TreeGridAddRowSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxButtonModule', 'IgxDialogModule',
                'IgxInputGroupModule', 'IgxCheckboxModule', 'IgxDatePickerModule', 'IgxActionStripModule']
            }),
            component: 'TreeGridAddRowSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/foods.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridFormattedFilteringStrategyComponent'],
                ngDeclarations: ['TreeGridFormattedFilteringStrategyComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule']
            }),
            component: 'TreeGridFormattedFilteringStrategyComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            component: 'TreeGridSummaryFormatterComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/foods.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['TreeGridSummaryFormatterComponent', 'IgxTreeGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['TreeGridSummaryFormatterComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule']
            }),
            shortenComponentPathBy: '/tree-grid/'
        }));

        return configs;
    }
}
