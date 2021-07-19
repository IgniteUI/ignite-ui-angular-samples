/* eslint-disable max-len */
// tslint:disable:max-line-length
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    IgxActionStripModule, IgxAvatarModule, IgxBadgeModule, IgxBannerModule, IgxButtonGroupModule, IgxButtonModule, IgxCardModule,
    IgxCheckboxModule, IgxChipsModule, IgxComboModule, IgxCsvExporterService,
    IgxDatePickerModule, IgxDialogModule, IgxDividerModule, IgxExcelExporterService, IgxExpansionPanelModule, IgxFocusModule,
    IgxGridModule, IgxIconModule, IgxInputGroupModule, IgxListModule, IgxProgressBarModule, IgxRadioModule, IgxRippleModule, IgxSelectModule, IgxSliderModule,
    IgxSnackbarModule, IgxSwitchModule, IgxTabsModule, IgxToastModule, IgxToggleModule, IgxTooltipModule
} from 'igniteui-angular';
import { IgxPreventDocumentScrollModule } from '../directives/prevent-scroll.directive';
import { GridColumnGroupSelectionComponent } from './column-group-selection-sample/column-group-selection-sample.component';
import { GridColumnSelectionComponent } from './column-selection-sample/column-selection-sample.component';
import { GridColumnSelectionStylesComponent } from './column-selection-styles/column-selection-styles.component';
import { CustomGridPagingStyleSampleComponent } from './custom-grid-paging-style/custom-grid-paging-style.component';
import { GridActionStripSampleComponent } from './grid-action-strip/grid-action-strip-sample';
import { GridAdvancedFilteringSampleComponent } from './grid-advanced-filtering-sample/grid-advanced-filtering-sample.component';
import { GridAdvancedFilteringStyleComponent } from './grid-advanced-filtering-style/grid-advanced-filtering-style.component';
import { GridAllDataSummaryComponent } from './grid-allData-summary/grid-allData-summary.component';
import { GridBatchEditingSampleComponent } from './grid-batch-editing/grid-batch-editing-sample.component';
import { RemotePagingBatchEditingComponent } from './grid-batchEditing-remotePaging/batch-editing-remote-paging.component';
import { GridCellSelectionComponent } from './grid-cellSelection-sample/grid-cellSelection.component';
import { GridClipboardSampleComponent } from './grid-clipboard-operations-sample/grid-clipboard-operations-sample.component';
import { GridCollapsibleColumnGroupsComponent } from './grid-collapsible-columnGroups/grid-collapsible-column-groups.component';
import { GridColumnHidingSampleComponent } from './grid-column-hiding-sample/grid-column-hiding-sample.component';
import { GridColumnHidingToolbarSampleComponent } from './grid-column-hiding-toolbar-sample/grid-column-hiding-toolbar-sample.component';
import { GridColumnHidingToolbarStyleComponent } from './grid-column-hiding-toolbar-style/grid-column-hiding-toolbar-style.component';
import { GridCompositeDataComponent } from './grid-composite-data-binding/grid-composite-data.component';
import { GridConditionalCellStyle2Component } from './grid-conditional-cell-style-2/grid-conditional-cell-style-2.component';
import { GridConditionalCellStyleComponent } from './grid-conditional-cell-style/grid-conditional-cell-style.component';
import { GridConditionalRowSelectorsComponent } from './grid-conditional-row-selectors/grid-conditional-row-selectors-sample.component';
import { ContextmenuComponent } from './grid-contextmenu-sample/contextmenu/contextmenu.component';
import { GridContextmenuSampleComponent } from './grid-contextmenu-sample/grid-contextmenu-sample.component';
import { GridCustomFilteringComponent } from './grid-custom-filtering/grid-custom-filtering.component';
import { GridCustomKBNavigationComponent } from './grid-custom-kb-navigation/grid-custom-kb-navigation-sample.component';
import { CustomRemotePagingGridSampleComponent } from './grid-custom-remote-paging-sample/custom-remote-paging-sample.component';
import { GridCustomSummariesSelectionComponent } from './grid-custom-summaries-selection/grid-custom-summaries-selection.component';
import { GridDisplayDensitySampleComponent } from './grid-displaydensity-sample/grid-displaydensity-sample.component';
import { GridEditingEventsComponent } from './grid-editing-events/grid-editing-events.component';
import { GridEditingLifecycleComponent } from './grid-editing-lifecycle-sample/grid-editing-lifecycle.component';
import { GridEditingSampleComponent } from './grid-editing-sample/grid-editing-sample.component';
import { GridAddRowSampleComponent } from './grid-add-row-sample/grid-add-row-sample.component';
import { GridEditingStyleSampleComponent } from './grid-editing-style-sample/grid-editing-style-sample.component';
import { GridExcelStyleFilteringLoadOnDemandComponent } from './grid-excel-style-filtering-load-on-demand/grid-excel-style-filtering-load-on-demand.component';
import { ExcelStyleFilteringSample1Component } from './grid-excel-style-filtering-sample-1/grid-excel-style-filtering-sample-1.component';
import { ExcelStyleFilteringSample2Component } from './grid-excel-style-filtering-sample-2/grid-excel-style-filtering-sample-2.component';
import { ExcelStyleFilteringSample3Component } from './grid-excel-style-filtering-sample-3/grid-excel-style-filtering-sample-3.component';
import { ExcelStyleFilteringStyleComponent } from './grid-excel-style-filtering-style/grid-excel-style-filtering-style.component';
import { GridExternalAdvancedFilteringComponent } from './grid-external-advanced-filtering/grid-external-advanced-filtering.component';
import { GridExternalExcelStyleFilteringComponent } from './grid-external-excel-style-filtering/grid-external-excel-style-filtering.component';
import { GridExternalOutletComponent } from './grid-external-outlet-sample/grid-external-outlet-sample.component';
import { FilteringSampleComponent } from './grid-filtering-sample/grid-filtering-sample.component';
import { GridFilteringStyleComponent } from './grid-filtering-style/grid-filtering-style.component';
import { FilteringTemplateSampleComponent } from './grid-filtering-template-sample/grid-filtering-template-sample.component';
import { GridGroupByPagingSampleComponent } from './grid-group-by-paging-sample/grid-group-by-paging-sample.component';
import { GridGroupBySampleComponent } from './grid-groupby-sample/grid-groupby-sample.component';
import { GridGroupByCustomSampleComponent } from './grid-groupby-custom-sample/grid-groupby-custom-sample.component';
import { GridGroupByStylingComponent } from './grid-groupby-styling/grid-groupby-styling.component';
import { GridGroupBySummarySampleComponent } from './grid-groupby-summary-sample/grid-groupby-summary-sample.component';
import { GridGroupBySummaryStylingSampleComponent } from './grid-groupby-summary-styling-sample/grid-groupby-summary-styling-sample.component';
import { GridKeyboardnavGuide } from './grid-keyboardnav-guide-sample/grid-keyboardnav-sample.component';
import { GridMovingSampleComponent } from './grid-moving-sample/grid-moving-sample.component';
import { GridMovingStyledSampleComponent } from './grid-moving-styled-sample/grid-moving-styled-sample.component';
import { GridMRLCustomNavigationComponent } from './grid-mrl-custom-navigation/grid-mrl-custom-navigation.component';
import { GridMultiCellSelectionStyleComponent } from './grid-multi-cell-selection-style/grid-multi-cell-selection-style.component';
import { GridMultiCellSelectionComponent } from './grid-multi-cell-selection/grid-multi-cell-selection.component';
import { GridMultiRowLayoutConfigurationComponent } from './grid-multi-row-layout-configuration/grid-multi-row-layout-configuration.component';
import { GridMultiRowLayoutStylingComponent } from './grid-multi-row-layout-styling/grid-multi-row-layout-styling.component';
import { GridMultiRowLayoutComponent } from './grid-multi-row-layout/grid-multi-row-layout.component';
import { GridMultipleRowDragComponent } from './grid-multiple-row-drag/grid-multiple-row-drag.component';
import { GridNestedDataBindComponent } from './grid-nested-data-binding/grid-nested-data-bind';
import { GridNestedDataBindAminoacidComponent } from './grid-nested-data-binding-2/grid-nested-data-bind2';
import { GridPagerSampleComponent } from './grid-pager-sample/grid-pager-sample.component';
import { PagingSampleComponent } from './grid-paging-sample/grid-paging-sample.component';
import { GridPasteSampleComponent } from './grid-paste/grid-paste-sample.component';
import { PasteHandler } from './grid-paste/paste-handler.directive';
import { RemoteFilteringSampleComponent } from './grid-remote-filtering-sample/remote-filtering-sample.component';
import { RemotePagingDefaultTemplateComponent } from './grid-remote-paging-defaultTemplate-sample/remote-paging-default-template.component';
import { RemotePagingGridSampleComponent } from './grid-remote-paging-sample/remote-paging-sample.component';
import { GridResizeLineStylingSampleComponent } from './grid-resize-line-styling-sample/grid-resize-line-styling-sample';
import { ResizingSampleComponent } from './grid-resizing-sample/grid-resizing-sample.component';
import { GridDragBaseSampleComponent } from './grid-row-drag-base/grid-row-drag-base.component';
import { GridDragToGridSampleComponent } from './grid-row-drag-to-grid/grid-row-drag-to-grid.component';
import { GridDragSampleComponent } from './grid-row-drag/grid-row-drag.component';
import { PlanetComponent } from './grid-row-drag/planet/planet.component';
import { GridRowEditSampleComponent } from './grid-row-editing-sample/grid-row-editing-sample.component';
import { GridRowEditStyleComponent } from './grid-row-editing-style/grid-row-editing-style.component';
import { GridPinningDragSampleComponent } from './grid-row-pinning-drag/grid-row-pinning-drag.component';
import { GridRowPinningExtraColumnSampleComponent } from './grid-row-pinning-extra-column/grid-row-pinning-extra-column.component';
import { GridRowPinningStylingSampleComponent } from './grid-row-pinning-styling/grid-row-pinning-styling.component';
import { GridRowPinningSampleComponent } from './grid-row-pinning/grid-row-pinning.component';
import { GridRowReorderComponent } from './grid-row-reorder-sample/grid-row-reorder';
import { FinancialSampleComponent } from './grid-sample-2/grid-sample-2.component';
import { GridSample3Component } from './grid-sample-3/grid-sample-3.component';
import { GridRemoteVirtualizationSampleComponent } from './grid-sample-4/grid-sample-4.component';
import { GridRemoteVirtualizationAddRowSampleComponent } from './grid-sample-5/grid-sample-5.component';
import { PinningStylingComponent } from './grid-sample-pinning-styling/grid-pinning-styling.component';
import { PinningSampleComponent } from './grid-sample-pinning/grid-pinning.component';
import { PinningToolbarSampleComponent } from './grid-sample-pinning/grid-toolbar-pinning.component';
import { RightPinningSampleComponent } from './grid-sample-right-pinning/grid-right-pinning.component';
import { GridSelectionTemplateExcelComponent } from './grid-sample-selection-template-excel/grid-sample-selection-template-excel.component';
import { GridSelectionTemplateNumbersComponent } from './grid-sample-selection-template-numbers/grid-sample-selection-template-numbers.component';
import { GridSelectionSampleComponent } from './grid-sample-selection/grid-selection.component';
import { AboutComponent } from './grid-save-state/about.component';
import { GridSaveStateComponent } from './grid-save-state/grid-state.component';
import { GridSearchSampleComponent } from './grid-search-sample/grid-search-sample.component';
import { SortingSampleComponent } from './grid-sorting-sample/grid-sorting-sample.component';
import { SortingStylingComponent } from './grid-sorting-styling/grid-sorting-styling.component';
import { GridToolbarSample1Component } from './grid-toolbar-sample/grid-toolbar-sample-1.component';
import { GridToolbarSample2Component } from './grid-toolbar-sample/grid-toolbar-sample-2.component';
import { GridToolbarSample3Component } from './grid-toolbar-sample/grid-toolbar-sample-3.component';
import { GridToolbarSample4Component } from './grid-toolbar-sample/grid-toolbar-sample-4.component';
import { GridToolbarStyleComponent } from './grid-toolbar-style/grid-toolbar-style.component';
import { GridsRoutingModule } from './grids-routing.module';
import { GridMultiColumnHeaderTemplateComponent } from './multi-column-header-template/multi-column-header-template';
import { GridMultiColumnHeadersStylingComponent } from './multi-column-headers-styling/multi-column-headers-styling.component';
import { GridMultiColumnHeadersComponent } from './multi-column-headers/multi-column-headers';
import { GridSortingIndicatorsComponent } from './grid-sorting-indicators/grid-sorting-indicators.component';
import { GridExportVisualizationComponent } from './grid-export-visualization/grid-export-visualization.component';
import { GridSelectComponent } from './grid-select/grid-select-sample.component';
import { GridColumnDataTypesSampleComponent } from './grid-column-data-types-sample/grid-column-data-types-sample.component';
import { GridFormattedFilteringStrategyComponent } from './grid-formatted-filtering-strategy/grid-formatted-filtering-strategy.component';
import { GridSummaryFormatterComponent } from './grid-summary-formatter/grid-summary-formatter.component';
import { GridMultiColumnHeadersExportComponent } from './multi-column-headers-export/multi-column-headers-export.component';

@NgModule({
    declarations: [
        GridBatchEditingSampleComponent,
        GridActionStripSampleComponent,
        GridColumnHidingSampleComponent,
        GridColumnHidingToolbarSampleComponent,
        GridConditionalCellStyle2Component,
        GridConditionalCellStyleComponent,
        GridCustomFilteringComponent,
        GridDisplayDensitySampleComponent,
        GridEditingSampleComponent,
        ExcelStyleFilteringSample1Component,
        ExcelStyleFilteringSample2Component,
        ExcelStyleFilteringSample3Component,
        ExcelStyleFilteringStyleComponent,
        FilteringSampleComponent,
        FilteringTemplateSampleComponent,
        GridGroupBySampleComponent,
        GridGroupByCustomSampleComponent,
        GridGroupBySummarySampleComponent,
        GridGroupBySummaryStylingSampleComponent,
        GridMovingSampleComponent,
        GridMovingStyledSampleComponent,
        PagingSampleComponent,
        GridPasteSampleComponent,
        RemoteFilteringSampleComponent,
        RemotePagingGridSampleComponent,
        CustomRemotePagingGridSampleComponent,
        ResizingSampleComponent,
        GridResizeLineStylingSampleComponent,
        GridRowEditSampleComponent,
        GridRowEditStyleComponent,
        GridAddRowSampleComponent,
        GridEditingStyleSampleComponent,
        GridEditingEventsComponent,
        FinancialSampleComponent,
        GridSample3Component,
        GridRemoteVirtualizationSampleComponent,
        GridRemoteVirtualizationAddRowSampleComponent,
        PinningSampleComponent,
        PinningToolbarSampleComponent,
        GridRowPinningSampleComponent,
        GridRowPinningExtraColumnSampleComponent,
        GridPinningDragSampleComponent,
        GridRowPinningStylingSampleComponent,
        GridSelectionSampleComponent,
        GridSelectionTemplateExcelComponent,
        GridSelectionTemplateNumbersComponent,
        GridSearchSampleComponent,
        SortingSampleComponent,
        SortingStylingComponent,
        GridToolbarSample1Component,
        GridToolbarSample2Component,
        GridToolbarSample3Component,
        GridToolbarSample4Component,
        GridMultiColumnHeadersComponent,
        GridMultiColumnHeadersStylingComponent,
        GridMultiColumnHeadersExportComponent,
        PasteHandler,
        GridCustomKBNavigationComponent,
        GridSaveStateComponent,
        AboutComponent,
        GridMultiCellSelectionComponent,
        GridMultiCellSelectionStyleComponent,
        GridCompositeDataComponent,
        GridNestedDataBindComponent,
        GridNestedDataBindAminoacidComponent,
        GridMultiRowLayoutComponent,
        GridMultiRowLayoutConfigurationComponent,
        GridDragSampleComponent,
        PlanetComponent,
        GridDragBaseSampleComponent,
        GridDragToGridSampleComponent,
        GridContextmenuSampleComponent,
        GridMRLCustomNavigationComponent,
        ContextmenuComponent,
        CustomGridPagingStyleSampleComponent,
        GridRowReorderComponent,
        GridColumnHidingToolbarStyleComponent,
        GridMultiColumnHeaderTemplateComponent,
        GridClipboardSampleComponent,
        GridToolbarStyleComponent,
        GridGroupByPagingSampleComponent,
        GridPagerSampleComponent,
        GridFilteringStyleComponent,
        GridExcelStyleFilteringLoadOnDemandComponent,
        GridExternalExcelStyleFilteringComponent,
        GridExternalOutletComponent,
        GridCustomSummariesSelectionComponent,
        GridMultiRowLayoutStylingComponent,
        PinningStylingComponent,
        GridGroupByStylingComponent,
        GridAdvancedFilteringSampleComponent,
        GridColumnDataTypesSampleComponent,
        GridAdvancedFilteringStyleComponent,
        GridCellSelectionComponent,
        GridConditionalRowSelectorsComponent,
        GridMultipleRowDragComponent,
        GridExternalAdvancedFilteringComponent,
        GridCollapsibleColumnGroupsComponent,
        GridAllDataSummaryComponent,
        RightPinningSampleComponent,
        GridColumnSelectionComponent,
        GridColumnGroupSelectionComponent,
        GridColumnSelectionStylesComponent,
        GridKeyboardnavGuide,
        RemotePagingDefaultTemplateComponent,
        RemotePagingBatchEditingComponent,
        GridSortingIndicatorsComponent,
        GridExportVisualizationComponent,
        GridEditingLifecycleComponent,
        GridSelectComponent,
        GridFormattedFilteringStrategyComponent,
        GridSummaryFormatterComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IgxPreventDocumentScrollModule,
        HttpClientModule,
        GridsRoutingModule,
        IgxActionStripModule,
        IgxAvatarModule,
        IgxBadgeModule,
        IgxBannerModule,
        IgxButtonGroupModule,
        IgxButtonModule,
        IgxCheckboxModule,
        IgxChipsModule,
        IgxComboModule,
        IgxDatePickerModule,
        IgxDialogModule,
        IgxFocusModule,
        IgxGridModule,
        IgxIconModule,
        IgxInputGroupModule,
        IgxProgressBarModule,
        IgxRadioModule,
        IgxRippleModule,
        IgxSliderModule,
        IgxSwitchModule,
        IgxToastModule,
        IgxToggleModule,
        IgxTooltipModule,
        IgxExpansionPanelModule,
        IgxSelectModule,
        IgxSnackbarModule,
        IgxTabsModule,
        IgxCardModule,
        IgxDividerModule,
        IgxActionStripModule,
        IgxListModule
    ],
    providers: [
        IgxCsvExporterService,
        IgxExcelExporterService
    ]
})
export class GridsModule { }
