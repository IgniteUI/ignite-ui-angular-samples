import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
    IgxAvatarModule,
    IgxButtonGroupModule,
    IgxButtonModule,
    IgxCsvExporterService,
    IgxDialogModule,
    IgxExcelExporterService,
    IgxGridModule,
    IgxIconModule,
    IgxRadioModule,
    IgxRippleModule,
    IgxSelectModule,
    IgxSliderModule,
    IgxSwitchModule,
    IgxToastModule,
    IgxToggleModule,
    IgxTreeGridModule
} from "igniteui-angular";
import { RemoteFilteringService } from "./services/remoteFilteringService";
import {
    TreeGridBatchEditingSampleComponent
} from "./tree-grid-batch-editing/tree-grid-batch-editing-sample.component";
import {
    TreeGridChilddatakeySampleComponent
} from "./tree-grid-childdatakey-sample/tree-grid-childdatakey-sample.component";
// tslint:disable-next-line: max-line-length
import { TreeGridClipboardSampleComponent } from "./tree-grid-clipboard-operations-sample/tree-grid-clipboard-operations-sample.component";
import {
    TreeGridColumnHidingSampleComponent
} from "./tree-grid-column-hiding-sample/tree-grid-column-hiding-sample.component";
import {
    TreeGridColumnHidingToolbarSampleComponent
} from "./tree-grid-column-hiding-toolbar-sample/tree-grid-column-hiding-toolbar-sample.component";
import {
    TreeGridColumnHidingToolbarStyleComponent
} from "./tree-grid-column-hiding-toolbar-style/tree-grid-column-hiding-toolbar-style.component";
import {
    TreeGridColumnMovingSampleComponent
} from "./tree-grid-column-moving-sample/tree-grid-column-moving-sample.component";
import {
    TreeGridColumnMovingStyledSampleComponent
} from "./tree-grid-column-moving-styled-sample/tree-grid-column-moving-styled-sample.component";
import {
    TreeGridColumnPinningSampleComponent
} from "./tree-grid-column-pinning-sample/tree-grid-column-pinning-sample.component";
import {
    TreeGridColumnResizingSampleComponent
} from "./tree-grid-column-resizing-sample/tree-grid-column-resizing-sample.component";
import {
    TreeGridConditionalCellStyleComponent
} from "./tree-grid-conditional-cell-style-sample/tree-grid-conditional-cell-style-sample.component";
import {
    TreeGridDisplaydensitySampleComponent
} from "./tree-grid-displaydensity-sample/tree-grid-displaydensity-sample.component";
import { TreeGridEditingSampleComponent } from "./tree-grid-editing-sample/tree-grid-editing-sample.component";
import { TreeGridEditingStyleComponent } from "./tree-grid-editing-style/tree-grid-editing-sample.component";
import { TreeGridEmployeesSampleComponent } from "./tree-grid-employees-sample/tree-grid-employees-sample.component";
import {
    TreeGridExcelStyleFilteringSample1Component
} from "./tree-grid-excel-style-filtering-sample-1/tree-grid-excel-style-filtering-sample-1.component";
import {
    TreeGridExcelStyleFilteringSample2Component
} from "./tree-grid-excel-style-filtering-sample-2/tree-grid-excel-style-filtering-sample-2.component";
import {
    TreeGridExcelStyleFilteringSample3Component
} from "./tree-grid-excel-style-filtering-sample-3/tree-grid-excel-style-filtering-sample-3.component";
import {
    TreeGridFilteringCustomSampleComponent
} from "./tree-grid-filtering-custom-sample/tree-grid-filtering-custom-sample.component";
import { TreeGridFilteringSampleComponent } from "./tree-grid-filtering-sample/tree-grid-filtering-sample.component";
import { TreeGridFilteringStyleComponent } from "./tree-grid-filtering-style/tree-grid-filtering-style.component";
import {
    TreeGridFilteringTemplateSampleComponent
} from "./tree-grid-filtering-template-sample/tree-grid-filtering-template-sample.component";
// tslint:disable-next-line: max-line-length
import { TreeGridKBNavigationComponent } from "./tree-grid-keyboard-navigation/tree-grid-keyboard-navigation-sample.component";
import {
    TreeGridLoadOnDemandSampleComponent
} from "./tree-grid-load-on-demand-sample/tree-grid-load-on-demand-sample.component";
// tslint:disable-next-line: max-line-length
import { TreeGridMultiCellSelectionStyleComponent } from "./tree-grid-multi-cell-selection-style/tree-grid-multi-cell-selection-style.component";
// tslint:disable-next-line: max-line-length
import { TreeGridMultiCellSelectionComponent } from "./tree-grid-multi-cell-selection/tree-grid-multi-cell-selection.component";
import {
    TreeGridMultiColumnHeaderTemplateSampleComponent
} from "./tree-grid-multi-column-header-template-sample/tree-grid-multi-column-header-template-sample.component";
import {
    TreeGridMultiColumnHeadersSampleComponent
} from "./tree-grid-multi-column-headers-sample/tree-grid-multi-column-headers-sample.component";
import {
    TreeGridMultiColumnHeadersStylingComponent
} from "./tree-grid-multi-column-headers-styling/tree-grid-multi-column-headers-styling.component";
import { TreeGridPagingSampleComponent } from "./tree-grid-paging-sample/tree-grid-paging-sample.component";
import { TreeGridPagingStyleSampleComponent } from "./tree-grid-paging-style/tree-grid-paging-style-sample.component";
import {
    TreeGridPrimaryforeignkeySampleComponent
} from "./tree-grid-primaryforeignkey-sample/tree-grid-primaryforeignkey-sample.component";
import {
    TreeGridRemoteFilteringSampleComponent
} from "./tree-grid-remote-filtering-sample/tree-grid-remote-filtering-sample.component";
import {
    TreeGridRemotePagingSampleComponent
} from "./tree-grid-remote-paging-sample/tree-grid-remote-paging-sample.component";
import {
    TreeGridResizeLineStylingSampleComponent
} from "./tree-grid-resize-line-styling-sample/tree-grid-resize-line-styling-sample.component";
import { TreeGridRoutingModule } from "./tree-grid-routing.module";
import { TreeGridRowDragBase } from "./tree-grid-row-drag-base/tree-grid-row-drag-base.component";
import { TreeGridRowDrag } from "./tree-grid-row-drag/tree-grid-row-drag.component";
import { TreeGridRowEditStyleComponent } from "./tree-grid-row-edit-style/tree-grid-row-edit-style.component";
import { TreeGridRowEditSampleComponent } from "./tree-grid-row-edit/tree-grid-row-editing-sample.component";
import { TreeGridRowReorderComponent } from "./tree-grid-row-reorder/tree-grid-row-reorder.component";
import { TreeGridSearchSampleComponent } from "./tree-grid-search-sample/tree-grid-search-sample.component";
import { TreeGridSelectionSampleComponent } from "./tree-grid-selection-sample/tree-grid-selection-sample.component";
import {
    TreeGridContextmenuComponent
} from "./tree-grid-sorting-sample/tree-grid-contextmenu/tree-grid-contextmenu.component";
import { TreeGridSortingSampleComponent } from "./tree-grid-sorting-sample/tree-grid-sorting-sample.component";
import { TreeGridSortingStylingComponent } from "./tree-grid-sorting-styling/tree-grid-sorting-styling.component";
import { TreeGridSummarySampleComponent } from "./tree-grid-summary-sample/tree-grid-summary-sample.component";
import { TreeGridSummaryStylingComponent } from "./tree-grid-summary-styling/tree-grid-summary-styling.component";
import { TreeGridSummary2SampleComponent } from "./tree-grid-summary2-sample/tree-grid-summary2-sample.component";
import {
    TreeGridToolbarSample1Component
} from "./tree-grid-toolbar-sample-1/tree-grid-toolbar-sample-1.component";
import {
    TreeGridToolbarSample2Component
} from "./tree-grid-toolbar-sample-2/tree-grid-toolbar-sample-2.component";
import {
    TreeGridToolbarSample3Component
} from "./tree-grid-toolbar-sample-3/tree-grid-toolbar-sample-3.component";
import {
    TreeGridToolbarSample4Component
} from "./tree-grid-toolbar-sample-4/tree-grid-toolbar-sample-4.component";
import { TreeGridToolbarStyleComponent } from "./tree-grid-toolbar-style/tree-grid-toolbar-style.component";
import {
    TreeGridVirtualizationSampleComponent
} from "./tree-grid-virtualization-sample/tree-grid-virtualization-sample.component";

@NgModule({
    declarations: [
        TreeGridChilddatakeySampleComponent,
        TreeGridPrimaryforeignkeySampleComponent,
        TreeGridRowEditSampleComponent,
        TreeGridRowEditStyleComponent,
        TreeGridBatchEditingSampleComponent,
        TreeGridEmployeesSampleComponent,
        TreeGridPagingStyleSampleComponent,
        TreeGridSearchSampleComponent,
        TreeGridColumnHidingSampleComponent,
        TreeGridColumnHidingToolbarSampleComponent,
        TreeGridSelectionSampleComponent,
        TreeGridSortingSampleComponent,
        TreeGridSortingStylingComponent,
        TreeGridContextmenuComponent,
        TreeGridColumnMovingSampleComponent,
        TreeGridColumnMovingStyledSampleComponent,
        TreeGridColumnPinningSampleComponent,
        TreeGridColumnResizingSampleComponent,
        TreeGridFilteringSampleComponent,
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
        TreeGridPagingSampleComponent,
        TreeGridEditingSampleComponent,
        TreeGridEditingStyleComponent,
        TreeGridExcelStyleFilteringSample1Component,
        TreeGridExcelStyleFilteringSample2Component,
        TreeGridExcelStyleFilteringSample3Component,
        TreeGridRemoteFilteringSampleComponent,
        TreeGridMultiCellSelectionComponent,
        TreeGridMultiCellSelectionStyleComponent,
        TreeGridLoadOnDemandSampleComponent,
        TreeGridRowDrag,
        TreeGridRowDragBase,
        TreeGridKBNavigationComponent,
        TreeGridRowReorderComponent,
        TreeGridRemotePagingSampleComponent,
        TreeGridResizeLineStylingSampleComponent,
        TreeGridColumnHidingToolbarStyleComponent,
        TreeGridMultiColumnHeaderTemplateSampleComponent,
        TreeGridClipboardSampleComponent,
        TreeGridToolbarStyleComponent,
        TreeGridFilteringStyleComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        TreeGridRoutingModule,
        IgxTreeGridModule,
        IgxGridModule,
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
        IgxSelectModule
    ],
    providers: [IgxExcelExporterService, IgxCsvExporterService, RemoteFilteringService]
})
export class TreeGridModule { }
