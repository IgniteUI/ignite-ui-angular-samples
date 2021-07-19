/* eslint-disable max-len */
// tslint:disable:max-line-length
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    IgxActionStripModule,
    IgxAvatarModule,
    IgxBannerModule,
    IgxButtonGroupModule,
    IgxButtonModule,
    IgxCsvExporterService,
    IgxDialogModule,
    IgxExcelExporterService,
    IgxGridModule,
    IgxIconModule,
    IgxListModule,
    IgxRadioModule,
    IgxRippleModule,
    IgxSelectModule,
    IgxSliderModule,
    IgxSnackbarModule,
    IgxSwitchModule,
    IgxToastModule,
    IgxToggleModule,
    IgxTooltipModule,
    IgxTreeGridModule
} from 'igniteui-angular';
import { IgxPreventDocumentScrollModule } from '../directives/prevent-scroll.directive';
import { TreeGridColumnGroupSelectionComponent } from './column-group-selection/column-group-selection.component';
import { TreeGridColumnSelectionStylesComponent } from './column-selection-styles/tree-grid-column-selection-style.component';
import { TreeGridColumnSelectionComponent } from './column-selection/tree-grid-column-selection.component';
// tslint:disable:max-line-length
import { RemoteFilteringService } from './services/remoteFilteringService';
import { TGridKeyboardnavGuide } from './tgrid-keyboard-guide/tgrid-keyboardnav-guide.component';
import { TreeGridAddRowSampleComponent } from './tree-grid-add-row-sample/tree-grid-add-row-sample.component';
import { TreeGridAdvancedFilteringSampleComponent } from './tree-grid-advanced-filtering-sample/tree-grid-advanced-filtering-sample.component';
import { TreeGridAdvancedFilteringStyleComponent } from './tree-grid-advanced-filtering-style/tree-grid-advanced-filtering-style.component';
import { TreeGridBatchEditingSampleComponent } from './tree-grid-batch-editing/tree-grid-batch-editing-sample.component';
import { TreeGridCellSelectionComponent } from './tree-grid-cellSelection-sample/tree-grid-cellSelection.component';
import { TreeGridClipboardSampleComponent } from './tree-grid-clipboard-operations-sample/tree-grid-clipboard-operations-sample.component';
import { TreeGridMultiCollapsibleColumnGroupsComponent } from './tree-grid-collapsible-groups/tree-grid-collapsible-column-groups.component';
import { TreeGridColumnHidingSampleComponent } from './tree-grid-column-hiding-sample/tree-grid-column-hiding-sample.component';
import { TreeGridColumnHidingToolbarSampleComponent } from './tree-grid-column-hiding-toolbar-sample/tree-grid-column-hiding-toolbar-sample.component';
import { TreeGridColumnHidingToolbarStyleComponent } from './tree-grid-column-hiding-toolbar-style/tree-grid-column-hiding-toolbar-style.component';
import { TreeGridColumnMovingSampleComponent } from './tree-grid-column-moving-sample/tree-grid-column-moving-sample.component';
import { TreeGridColumnMovingStyledSampleComponent } from './tree-grid-column-moving-styled-sample/tree-grid-column-moving-styled-sample.component';
import { TreeGridColumnPinningSampleComponent } from './tree-grid-column-pinning-sample/tree-grid-column-pinning-sample.component';
import { TreeGridPinningToolbarSampleComponent } from './tree-grid-column-pinning-sample/tree-grid-toolbar-pinning.component';
import { TreeGridColumnResizingSampleComponent } from './tree-grid-column-resizing-sample/tree-grid-column-resizing-sample.component';
import { TreeGridConditionalCellStyle2Component } from './tree-grid-conditional-cell-style-2/tree-grid-conditional-cell-style-2.component';
import { TreeGridConditionalCellStyleComponent } from './tree-grid-conditional-cell-style-sample/tree-grid-conditional-cell-style-sample.component';
import { TreeGridConditionalRowSelectorsSampleComponent } from './tree-grid-conditional-row-selectors/tree-grid-conditional-row-selectors.component';
import { TreeGridDisplaydensitySampleComponent } from './tree-grid-displaydensity-sample/tree-grid-displaydensity-sample.component';
import { TreeGridEditingEventsComponent } from './tree-grid-editing-events/tree-grid-editing-events.component';
import { TreeGridEditingSampleComponent } from './tree-grid-editing-sample/tree-grid-editing-sample.component';
import { TreeGridEditingStyleComponent } from './tree-grid-editing-style/tree-grid-editing-sample.component';
import { TreeGridEmployeesSampleComponent } from './tree-grid-employees-sample/tree-grid-employees-sample.component';
import { TreeGridExcelStyleFilteringLoadOnDemandComponent } from './tree-grid-excel-style-filtering-load-on-demand/tree-grid-excel-style-filtering-load-on-demand.component';
import { TreeGridExcelStyleFilteringSample1Component } from './tree-grid-excel-style-filtering-sample-1/tree-grid-excel-style-filtering-sample-1.component';
import { TreeGridExcelStyleFilteringSample2Component } from './tree-grid-excel-style-filtering-sample-2/tree-grid-excel-style-filtering-sample-2.component';
import { TreeGridExcelStyleFilteringSample3Component } from './tree-grid-excel-style-filtering-sample-3/tree-grid-excel-style-filtering-sample-3.component';
import { TreeGridExcelStyleFilteringStyleComponent } from './tree-grid-excel-style-filtering-style/tree-grid-excel-style-filtering-style.component';
import { TreeGridExternalAdvancedFilteringComponent } from './tree-grid-external-advanced-filtering/tree-grid-external-advanced-filtering.component';
import { TreeGridExternalExcelStyleFilteringComponent } from './tree-grid-external-excel-style-filtering/tree-grid-external-excel-style-filtering.component';
import { TreeGridFilteringCustomSampleComponent } from './tree-grid-filtering-custom-sample/tree-grid-filtering-custom-sample.component';
import { TreeGridFilteringSampleComponent } from './tree-grid-filtering-sample/tree-grid-filtering-sample.component';
import { TreeGridFilteringStyleComponent } from './tree-grid-filtering-style/tree-grid-filtering-style.component';
import { TreeGridFilteringTemplateSampleComponent } from './tree-grid-filtering-template-sample/tree-grid-filtering-template-sample.component';
import { TreeGridKBNavigationComponent } from './tree-grid-keyboard-navigation/tree-grid-keyboard-navigation-sample.component';
import { TreeGridLoadOnDemandSampleComponent } from './tree-grid-load-on-demand-sample/tree-grid-load-on-demand-sample.component';
import { TreeGridMultiCellSelectionStyleComponent } from './tree-grid-multi-cell-selection-style/tree-grid-multi-cell-selection-style.component';
import { TreeGridMultiCellSelectionComponent } from './tree-grid-multi-cell-selection/tree-grid-multi-cell-selection.component';
import { TreeGridMultiColumnHeaderTemplateSampleComponent } from './tree-grid-multi-column-header-template-sample/tree-grid-multi-column-header-template-sample.component';
import { TreeGridMultiColumnHeadersSampleComponent } from './tree-grid-multi-column-headers-sample/tree-grid-multi-column-headers-sample.component';
import { TreeGridMultiColumnHeadersStylingComponent } from './tree-grid-multi-column-headers-styling/tree-grid-multi-column-headers-styling.component';
import { TreeGridMultiRowDragComponent } from './tree-grid-multi-row-drag/tree-grid-multi-row-drag.component';
import { TreeGridPagingSampleComponent } from './tree-grid-paging-sample/tree-grid-paging-sample.component';
import { TreeGridPagingStyleSampleComponent } from './tree-grid-paging-style/tree-grid-paging-style-sample.component';
import { TreeGridRemoteFilteringSampleComponent } from './tree-grid-remote-filtering-sample/tree-grid-remote-filtering-sample.component';
import { TreeGridRemotePagingDefaultTemplateComponent } from './tree-grid-remote-paging-default-template/tree-grid-remote-paging-default-template.component';
import { TreeGridRemotePagingSampleComponent } from './tree-grid-remote-paging-sample/tree-grid-remote-paging-sample.component';
import { TreeGridResizeLineStylingSampleComponent } from './tree-grid-resize-line-styling-sample/tree-grid-resize-line-styling-sample.component';
import { TreeGridRoutingModule } from './tree-grid-routing.module';
import { TreeGridRowDragBaseComponent } from './tree-grid-row-drag-base/tree-grid-row-drag-base.component';
import { TreeGridRowDragComponent } from './tree-grid-row-drag/tree-grid-row-drag.component';
import { TreeGridRowEditStyleComponent } from './tree-grid-row-edit-style/tree-grid-row-edit-style.component';
import { TreeGridRowEditSampleComponent } from './tree-grid-row-edit/tree-grid-row-editing-sample.component';
import { TreeGridRowPinningExtraColumnSampleComponent } from './tree-grid-row-pinning-extra-column/tree-grid-row-pinning-extra-column.component';
import { TreeGridRowPinningStylingSampleComponent} from './tree-grid-row-pinning-styling/tree-grid-row-pinning-styling.component';
import { TreeGridRowPinningSampleComponent} from './tree-grid-row-pinning/tree-grid-row-pinning.component';
import { TreeGridRowReorderComponent } from './tree-grid-row-reorder/tree-grid-row-reorder.component';
import { TreeGridRightPinningSampleComponent } from './tree-grid-sample-right-pinning/tree-grid-right-pinning.component';
import { TGridSaveStateComponent } from './tree-grid-save-state/tGrid-state.component';
import { TreeGridSearchSampleComponent } from './tree-grid-search-sample/tree-grid-search-sample.component';
import { TreeGridSelectionSampleComponent } from './tree-grid-selection-sample/tree-grid-selection-sample.component';
import { TreeGridSelectionTemplateNumbersSampleComponent } from './tree-grid-selection-template-numbers/tree-grid-selection-template-numbers.component';
import { TreeGridContextmenuComponent } from './tree-grid-sorting-sample/tree-grid-contextmenu/tree-grid-contextmenu.component';
import { TreeGridSortingSampleComponent } from './tree-grid-sorting-sample/tree-grid-sorting-sample.component';
import { TreeGridSortingStylingComponent } from './tree-grid-sorting-styling/tree-grid-sorting-styling.component';
import { TreeGridStyleComponent } from './tree-grid-style/tree-grid-style.component';
import { TreeGridSummarySampleComponent } from './tree-grid-summary-sample/tree-grid-summary-sample.component';
import { TreeGridSummaryStylingComponent } from './tree-grid-summary-styling/tree-grid-summary-styling.component';
import { TreeGridSummary2SampleComponent } from './tree-grid-summary2-sample/tree-grid-summary2-sample.component';
import { TreeGridToolbarSample1Component } from './tree-grid-toolbar-sample-1/tree-grid-toolbar-sample-1.component';
import { TreeGridToolbarSample2Component } from './tree-grid-toolbar-sample-2/tree-grid-toolbar-sample-2.component';
import { TreeGridToolbarSample3Component } from './tree-grid-toolbar-sample-3/tree-grid-toolbar-sample-3.component';
import { TreeGridToolbarSample4Component } from './tree-grid-toolbar-sample-4/tree-grid-toolbar-sample-4.component';
import { TreeGridToolbarStyleComponent } from './tree-grid-toolbar-style/tree-grid-toolbar-style.component';
import { TreeGridVirtualizationSampleComponent } from './tree-grid-virtualization-sample/tree-grid-virtualization-sample.component';
import { TreeGridAllDataSummaryComponent } from './treegrid-allData-summary/treegrid-allData-summary.component';
import { TGridAboutComponent } from './tree-grid-save-state/about.component';
import { TreeGridExternalOutletComponent } from './tree-grid-external-outlet/tree-grid-external-outlet-sample.component';
import { TreeGridExportVisualizationComponent } from './tree-grid-export-visualization/tree-grid-export-visualization.component';
import { TGridEditingLifecycleComponent } from './tgrid-editing-lifecycle-sample/tgrid-editing-lifecycle.component';
import { TreeGridFormattedFilteringStrategyComponent } from './tree-grid-formatted-filtering-strategy/tree-grid-formatted-filtering-strategy.component';
import { TreeGridSummaryFormatterComponent } from './tree-grid-summary-formatter/tree-grid-summary-formatter.component';
import { TreeGridPagerSampleComponent } from './tree-grid-pager-sample/tree-grid-pager-sample.component';
import { TreeGridGroupByLoadOnDemandComponent } from './tree-grid-group-by-load-on-demand-sample/tree-grid-group-by-load-on-demand-sample.component';
import { TreeGridMultiColumnHeadersExportComponent } from './tree-grid-multi-column-headers-export/tree-grid-multi-column-headers-export.component';

@NgModule({
    declarations: [
        TreeGridRowEditSampleComponent,
        TreeGridRowEditStyleComponent,
        TreeGridBatchEditingSampleComponent,
        TreeGridEditingEventsComponent,
        TreeGridEmployeesSampleComponent,
        TreeGridPagingStyleSampleComponent,
        TreeGridSearchSampleComponent,
        TreeGridColumnHidingSampleComponent,
        TreeGridColumnHidingToolbarSampleComponent,
        TreeGridSelectionSampleComponent,
        TreeGridSelectionTemplateNumbersSampleComponent,
        TreeGridSortingSampleComponent,
        TreeGridSortingStylingComponent,
        TreeGridContextmenuComponent,
        TreeGridColumnMovingSampleComponent,
        TreeGridColumnMovingStyledSampleComponent,
        TreeGridColumnPinningSampleComponent,
        TreeGridPinningToolbarSampleComponent,
        TreeGridColumnResizingSampleComponent,
        TreeGridFilteringSampleComponent,
        TGridAboutComponent,
        TreeGridFilteringTemplateSampleComponent,
        TreeGridFilteringCustomSampleComponent,
        TreeGridMultiColumnHeadersSampleComponent,
        TreeGridMultiColumnHeadersStylingComponent,
        TreeGridVirtualizationSampleComponent,
        TreeGridDisplaydensitySampleComponent,
        TreeGridToolbarSample1Component,
        TreeGridToolbarSample2Component,
        TreeGridToolbarSample3Component,
        TreeGridToolbarSample4Component,
        TreeGridSummarySampleComponent,
        TreeGridSummaryStylingComponent,
        TreeGridSummary2SampleComponent,
        TreeGridConditionalCellStyleComponent,
        TGridSaveStateComponent,
        TreeGridPagingSampleComponent,
        TreeGridPagerSampleComponent,
        TreeGridEditingSampleComponent,
        TreeGridEditingStyleComponent,
        TreeGridExcelStyleFilteringSample1Component,
        TreeGridExcelStyleFilteringSample2Component,
        TreeGridExcelStyleFilteringSample3Component,
        TreeGridExcelStyleFilteringStyleComponent,
        TreeGridRemoteFilteringSampleComponent,
        TreeGridMultiCellSelectionComponent,
        TreeGridMultiCellSelectionStyleComponent,
        TreeGridLoadOnDemandSampleComponent,
        TreeGridGroupByLoadOnDemandComponent,
        TreeGridRowDragComponent,
        TreeGridRowDragBaseComponent,
        TreeGridMultiRowDragComponent,
        TreeGridKBNavigationComponent,
        TreeGridRowReorderComponent,
        TreeGridRemotePagingSampleComponent,
        TreeGridResizeLineStylingSampleComponent,
        TreeGridColumnHidingToolbarStyleComponent,
        TreeGridMultiColumnHeaderTemplateSampleComponent,
        TreeGridMultiColumnHeadersExportComponent,
        TreeGridClipboardSampleComponent,
        TreeGridToolbarStyleComponent,
        TreeGridFilteringStyleComponent,
        TreeGridCellSelectionComponent,
        TreeGridAddRowSampleComponent,
        TreeGridAdvancedFilteringSampleComponent,
        TreeGridAdvancedFilteringStyleComponent,
        TreeGridExcelStyleFilteringLoadOnDemandComponent,
        TreeGridConditionalRowSelectorsSampleComponent,
        TreeGridStyleComponent,
        TreeGridExternalExcelStyleFilteringComponent,
        TreeGridExternalAdvancedFilteringComponent,
        TreeGridConditionalCellStyle2Component,
        TreeGridMultiCollapsibleColumnGroupsComponent,
        TreeGridAllDataSummaryComponent,
        TreeGridRowPinningSampleComponent,
        TreeGridRowPinningStylingSampleComponent,
        TreeGridRowPinningExtraColumnSampleComponent,
        TreeGridRightPinningSampleComponent,
        TreeGridColumnSelectionComponent,
        TreeGridColumnGroupSelectionComponent,
        TreeGridColumnSelectionStylesComponent,
        TGridKeyboardnavGuide,
        TreeGridRemotePagingDefaultTemplateComponent,
        TreeGridExternalOutletComponent,
        TreeGridExportVisualizationComponent,
        TGridEditingLifecycleComponent,
        TreeGridFormattedFilteringStrategyComponent,
        TreeGridSummaryFormatterComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IgxPreventDocumentScrollModule,
        TreeGridRoutingModule,
        IgxTreeGridModule,
        IgxGridModule,
        IgxActionStripModule,
        IgxButtonGroupModule,
        IgxIconModule,
        IgxSliderModule,
        IgxToggleModule,
        IgxButtonModule,
        IgxSwitchModule,
        IgxRippleModule,
        IgxDialogModule,
        IgxRadioModule,
        IgxAvatarModule,
        IgxToastModule,
        IgxSelectModule,
        IgxBannerModule,
        IgxSnackbarModule,
        IgxTooltipModule,
        IgxListModule
    ],
    providers: [IgxExcelExporterService, IgxCsvExporterService, RemoteFilteringService]
})
export class TreeGridModule { }
