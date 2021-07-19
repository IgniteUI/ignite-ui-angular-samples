/* eslint-disable max-len */
/* tslint:disable:max-line-length */
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxActionStripModule, IgxAvatarModule, IgxBadgeModule, IgxBannerModule, IgxButtonGroupModule, IgxButtonModule, IgxCheckboxModule,
    IgxChipsModule, IgxComboModule, IgxCsvExporterService, IgxDatePickerModule, IgxDialogModule, IgxExcelExporterService,
    IgxFocusModule, IgxGridModule, IgxHierarchicalGridAPIService, IgxHierarchicalGridModule, IgxIconModule, IgxInputGroupModule,
    IgxListModule, IgxProgressBarModule, IgxRadioModule, IgxRippleModule, IgxSelectModule, IgxSliderModule, IgxSnackbarModule, IgxSwitchModule,
    IgxTabsModule, IgxToastModule, IgxToggleModule, IgxTooltipModule } from 'igniteui-angular';
import { IgxPreventDocumentScrollModule } from '../directives/prevent-scroll.directive';
import { HierarchicalGridColumnGroupSelectionComponent } from './column-group-selection/hierarchical-grid-column-group-selection.component';
import { HGridColumnSelectionStylesComponent } from './column-selection-styles/hierarchical-grid-column-selection-styles.component';
import { HierarchicalGridColumnSelectionComponent } from './column-selection/hierarchical-grid-column-selection.component';
import { HGridKeyboardnavGuide } from './hgrid-keybarod-nav-guide-sample/hgrid-keyboard-guide.component';
import { HGridAddRowSampleComponent } from './hierarchical-grid-add-row/hierarchical-grid-add-row.component';
import { HGridAdvancedFilteringStyleComponent } from './hierarchical-grid-advanced-filtering-style/hierarchical-grid-advanced-filtering-style.component';
import { HGridAdvancedFilteringSampleComponent } from './hierarchical-grid-advanced-filtering/hierarchical-grid-advanced-filtering.component';
import { HGridAllDataSummaryComponent } from './hierarchical-grid-allData-summary/hierarchical-grid-allData-summary.component';
import { HGridBatchEditingSampleComponent } from './hierarchical-grid-batch-editing/hierarchical-grid-batch-editing.component';
import { HGridCollapsibleColumnGroupComponent } from './hierarchical-grid-collapsible-column-groups/hierarchical-grid-collapsible-column-groups.component';
import { HierarchicalGridColumnHidingToolbarStyleComponent } from './hierarchical-grid-column-hiding-toolbar-style/hierarchical-grid-column-hiding-toolbar-style.component';
import { HGridCostumHidingSampleComponent } from './hierarchical-grid-column-hiding/hierarchical-grid-custom-hiding.component';
import { HGridColumnHidingSampleComponent } from './hierarchical-grid-column-hiding/hierarchical-grid-hiding.component';
import { HGridColumnMovingSampleStyledComponent } from './hierarchical-grid-column-moving-styled/hierarchical-grid-moving-styled.component';
import { HGridColumnMovingSampleComponent } from './hierarchical-grid-column-moving/hierarchical-grid-moving.component';
import { HGridPinningSampleComponent } from './hierarchical-grid-column-pinning/hierarchical-grid-pinning.component';
import { HGridToolbarPinningComponent } from './hierarchical-grid-column-pinning/hierarchical-grid-toolbar-pinning.component';
import { HGridConditionalRowSelectorsComponent } from './hierarchical-grid-conditional-row-selectors/hierarchical-grid-conditional-row-selectors.component';
import { HGridCustomKBNavigationComponent } from './hierarchical-grid-custom-kb-navigation/hierarchical-grid-custom-kb-navigation-sample.component';
import { HGridDisplayDensitySampleComponent } from './hierarchical-grid-display-density/hierarchical-grid-density.component';
import { HGridEditingEventsComponent } from './hierarchical-grid-editing-events/hierarchical-grid-editing-events.component';
import { HGridEditingStyleComponent } from './hierarchical-grid-editing-style/hierarchical-grid-editing-style.component';
import { HGridEditingSampleComponent } from './hierarchical-grid-editing/hierarchical-grid-editing.component';
import { HierarchicalGridExcelStyleFilteringLoadOnDemandComponent } from './hierarchical-grid-excel-style-filtering-load-on-demand/hierarchical-grid-excel-style-filtering-load-on-demand.component';
import { HGridExcelStyleFilteringSample1Component } from './hierarchical-grid-excel-style-filtering-sample-1/hierarchical-grid-excel-style-filtering-sample-1.component';
import { HGridExcelStyleFilteringSample2Component } from './hierarchical-grid-excel-style-filtering-sample-2/hierarchical-grid-excel-style-filtering-sample-2.component';
import { HGridExcelStyleFilteringSample3Component } from './hierarchical-grid-excel-style-filtering-sample-3/hierarchical-grid-excel-style-filtering-sample-3.component';
import { HGridExcelStyleFilteringStyleComponent } from './hierarchical-grid-excel-style-filtering-style/hierarchical-grid-excel-style-filtering-style.component';
import { HGridExternalAdvancedFilteringComponent } from './hierarchical-grid-external-advanced-filtering/hierarchical-grid-external-advanced-filtering.component';
import { HGridExternalExcelStyleFilteringComponent } from './hierarchical-grid-external-excel-style-filtering/hierarchical-grid-external-excel-style-filtering.component';
import { HierarchicalGridFilteringStyleComponent } from './hierarchical-grid-filtering-style/hierarchical-grid-filtering-style.component';
import { HGridFilteringTemplateSampleComponent } from './hierarchical-grid-filtering-template/hierarchical-grid-filtering-template.component';
import { HGridCustomFilteringSampleComponent } from './hierarchical-grid-filtering/hierarchical-grid-custom-filtering.component';
import { HGridFilteringSampleComponent } from './hierarchical-grid-filtering/hierarchical-grid-filtering.component';
import { HierarchicalGridLoDSampleComponent } from './hierarchical-grid-lod/hierarchical-grid-lod.component';
import { HGridMultiCellStyleComponent } from './hierarchical-grid-multi-cell-style/hierarchical-grid-multi-cell-style.component';
import { HGridMultiHeaderTemplateSampleComponent } from './hierarchical-grid-multi-column-header-template/hierarchical-grid-multi-column-template.component';
import { HGridMultiHeadersStylingComponent } from './hierarchical-grid-multi-column-headers-styling/hierarchical-grid-multi-column-styling.component';
import { HGridMultiHeadersSampleComponent } from './hierarchical-grid-multi-column-headers/hierarchical-grid-multi-column.component';
import { HGridMultiRowDragComponent } from './hierarchical-grid-multi-row-drag/hierarchical-grid-multi-row-drag.component';
import { HGridMultiColumnHeadersExportComponent } from './hierarchical-grid-multi-column-headers-export/hierarchical-grid-multi-column-export.component';
import { HGridPagingStyleSampleComponent } from './hierarchical-grid-paging-style/hierarchical-grid-paging-style.component';
import { HGridPagingSampleComponent } from './hierarchical-grid-paging/hierarchical-grid-paging.component';
import { HGridRemotePagingSampleComponent } from './hierarchical-grid-paging/hierarchical-grid-remote-paging.component';
import { HGridRemotePagingDefaultTemplateComponent } from './hierarchical-grid-remote-paging-default-template/hierarchical-grid-remote-paging-default-template.component';
import { HGridResizeLineStylingComponent } from './hierarchical-grid-resize-line-styling/hierarchical-grid-resize-line-styling.component';
import { HierarchicalGridRoutingModule } from './hierarchical-grid-routing.module';
import { HGridRowDragBaseComponent } from './hierarchical-grid-row-drag-base/hierarchical-row-drag-base.component';
import { HGridDragSampleComponent } from './hierarchical-grid-row-drag/hierarchical-grid-row-drag.component';
import { HGridRowEditStyleComponent } from './hierarchical-grid-row-edit-style/hierarchical-grid-row-edit-style.component';
import { HGridRowEditingSampleComponent } from './hierarchical-grid-row-editing/hierarchical-grid-row-editing.component';
import { HGridRowPinningExtraColumnSampleComponent } from './hierarchical-grid-row-pinning-extra-column/hierarchical-grid-row-pinning-extra-column.component';
import { HGridRowPinningStylingSampleComponent } from './hierarchical-grid-row-pinning-styling/hierarchical-grid-row-pinning-styling.component';
import { HGridRowPinningSampleComponent } from './hierarchical-grid-row-pinning/hierarchical-grid-row-pinning.component';
import { HGridRowReorderComponent } from './hierarchical-grid-row-reorder/hierarchical-grid-row-reorder.component';
import { HierarchicalGridRightPinningSampleComponent } from './hierarchical-grid-sample-right-pinning/hierarchical-grid-right-pinning.component';
import { HGridSaveStateComponent } from './hierarchical-grid-save-state/hGrid-state.component';
import { HGridSelectionTemplateNumbersSampleComponent } from './hierarchical-grid-selection-template-numbers/hierarchical-grid-selection-template-numbers.component';
import { HGridSelectionSampleComponent } from './hierarchical-grid-selection/hierarchical-grid-selection.component';
import { HGridSortingStylingComponent } from './hierarchical-grid-sorting-styling/hierarchical-grid-sorting-styling.component';
import { HGridContextmenuComponent } from './hierarchical-grid-sorting/hgrid-contextmenu/hgrid-contextmenu.component';
import { HGridSortingSampleComponent } from './hierarchical-grid-sorting/hierarchical-grid-sorting.component';
import { HGridStylingComponent } from './hierarchical-grid-styling/hierarchical-grid-styling.component';
import { HGridSummaryStylingComponent } from './hierarchical-grid-summary-styling/hierarchical-grid-summary-styling.component';
import { HGridSummarySampleComponent } from './hierarchical-grid-summary/hierarchical-grid-summary.component';
import { HierarchicalGridToolbarStyleComponent } from './hierarchical-grid-toolbar-style/hierarchical-grid-toolbar-style.component';
import { HGridToolbarCustomSampleComponent } from './hierarchical-grid-toolbar/hierarchical-grid-toolbar-custom.component';
import { HGridToolbarOptionsSampleComponent } from './hierarchical-grid-toolbar/hierarchical-grid-toolbar-options.component';
import { HGridToolbarTitleSampleComponent } from './hierarchical-grid-toolbar/hierarchical-grid-toolbar-title.component';
import { HGridAboutComponent } from './hierarchical-grid-save-state/about.component';
import { HierarchicalGridExternalOutletComponent } from './hierarchical-grid-external-outlet/hierarchical-grid-external-outlet-sample.component';
import { HGridEditingLifecycleComponent } from './hgrid-editing-lifecycle-sample/hgrid-editing-lifecycle.component';
import { HierarchicalGridCellSelectionComponent } from './hierarchical-grid-cellSelection-sample/hierarchical-grid-cellSelection.component';
import { HGridFormattedFilteringStrategyComponent } from './hierarchical-grid-formatted-filtering-strategy/hierarchical-grid-formatted-filtering-strategy.component';
import { HGridSummaryFormatterComponent } from './hierarchical-grid-summary-formatter/hierarchical-grid-summary-formatter.component';
import { HGridExcelExportSampleComponent } from './hierarchical-grid-excel-exporter/hierarchical-grid-excel-export.sample';
import { HierarchicalGridPagerSampleComponent } from './hierarchical-grid-pager-sample/hierarchical-grid-pager-sample.component';

@NgModule({
    declarations: [
        HGridFilteringSampleComponent,
        HGridCustomFilteringSampleComponent,
        HGridSortingStylingComponent,
        HGridSortingSampleComponent,
        HGridContextmenuComponent,
        HGridSelectionSampleComponent,
        HGridSelectionTemplateNumbersSampleComponent,
        HGridSummarySampleComponent,
        HGridSummaryStylingComponent,
        HGridSaveStateComponent,
        HGridAboutComponent,
        HGridPagingSampleComponent,
        HGridPagingStyleSampleComponent,
        HGridRemotePagingSampleComponent,
        HGridPinningSampleComponent,
        HGridToolbarPinningComponent,
        HGridColumnHidingSampleComponent,
        HGridCostumHidingSampleComponent,
        HGridDisplayDensitySampleComponent,
        HGridColumnMovingSampleStyledComponent,
        HGridColumnMovingSampleComponent,
        HGridMultiCellStyleComponent,
        HGridMultiHeadersSampleComponent,
        HGridMultiHeadersStylingComponent,
        HGridToolbarTitleSampleComponent,
        HGridToolbarOptionsSampleComponent,
        HGridToolbarCustomSampleComponent,
        HGridRowEditingSampleComponent,
        HGridRowEditStyleComponent,
        HGridRowPinningExtraColumnSampleComponent,
        HGridRowPinningSampleComponent,
        HGridRowPinningStylingSampleComponent,
        HGridEditingSampleComponent,
        HGridEditingStyleComponent,
        HGridEditingEventsComponent,
        HGridBatchEditingSampleComponent,
        HierarchicalGridLoDSampleComponent,
        HGridExcelStyleFilteringSample1Component,
        HGridExcelStyleFilteringSample2Component,
        HGridExcelStyleFilteringSample3Component,
        HGridExcelStyleFilteringStyleComponent,
        HGridExcelExportSampleComponent,
        HGridFilteringTemplateSampleComponent,
        HGridDragSampleComponent,
        HGridRowDragBaseComponent,
        HGridMultiRowDragComponent,
        HGridCustomKBNavigationComponent,
        HGridRowReorderComponent,
        HGridResizeLineStylingComponent,
        HierarchicalGridColumnHidingToolbarStyleComponent,
        HGridMultiHeaderTemplateSampleComponent,
        HGridMultiColumnHeadersExportComponent,
        HierarchicalGridToolbarStyleComponent,
        HierarchicalGridFilteringStyleComponent,
        HierarchicalGridExcelStyleFilteringLoadOnDemandComponent,
        HGridAddRowSampleComponent,
        HGridAdvancedFilteringSampleComponent,
        HGridAdvancedFilteringStyleComponent,
        HGridStylingComponent,
        HGridConditionalRowSelectorsComponent,
        HGridExternalAdvancedFilteringComponent,
        HierarchicalGridExternalOutletComponent,
        HGridAboutComponent,
        HGridExternalExcelStyleFilteringComponent,
        HGridCollapsibleColumnGroupComponent,
        HGridAllDataSummaryComponent,
        HierarchicalGridRightPinningSampleComponent,
        HierarchicalGridColumnSelectionComponent,
        HierarchicalGridColumnGroupSelectionComponent,
        HGridColumnSelectionStylesComponent,
        HGridKeyboardnavGuide,
        HGridRemotePagingDefaultTemplateComponent,
        HGridEditingLifecycleComponent,
        HierarchicalGridCellSelectionComponent,
        HGridFormattedFilteringStrategyComponent,
        HGridSummaryFormatterComponent,
        HierarchicalGridPagerSampleComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        HierarchicalGridRoutingModule,
        IgxPreventDocumentScrollModule,
        IgxActionStripModule,
        IgxAvatarModule,
        IgxBadgeModule,
        IgxButtonGroupModule,
        IgxButtonModule,
        IgxCheckboxModule,
        IgxChipsModule,
        IgxComboModule,
        IgxDatePickerModule,
        IgxDialogModule,
        IgxFocusModule,
        IgxGridModule,
        IgxHierarchicalGridModule,
        IgxIconModule,
        IgxInputGroupModule,
        IgxProgressBarModule,
        IgxRadioModule,
        IgxRippleModule,
        IgxSliderModule,
        IgxSwitchModule,
        IgxToastModule,
        IgxToggleModule,
        IgxSelectModule,
        IgxBannerModule,
        IgxSnackbarModule,
        IgxTooltipModule,
        IgxTabsModule,
        IgxListModule
    ],
    providers: [
        IgxCsvExporterService,
        IgxExcelExporterService
    ]
})
export class HierarchicalGridModule { }
