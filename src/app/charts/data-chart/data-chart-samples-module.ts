// tslint:disable:max-line-length
import { ModuleWithProviders, NgModule } from "@angular/core";

// Chart Modules
import { IgxDataChartAnnotationModule } from "igniteui-angular-charts/ES5/igx-data-chart-annotation-module";
import { IgxDataChartCategoryCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-category-core-module";
import { IgxDataChartCategoryModule } from "igniteui-angular-charts/ES5/igx-data-chart-category-module";
import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core-module";
import { IgxDataChartInteractivityModule } from "igniteui-angular-charts/ES5/igx-data-chart-interactivity-module";
import { IgxDataChartScatterCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-scatter-core-module";
import { IgxDataChartScatterModule } from "igniteui-angular-charts/ES5/igx-data-chart-scatter-module";
import { IgxDataChartStackedModule } from "igniteui-angular-charts/ES5/igx-data-chart-stacked-module";

// Axes
import { IgxCategoryAngleAxisModule } from "igniteui-angular-charts/ES5/igx-category-angle-axis-module";
import { IgxCategoryXAxisModule } from "igniteui-angular-charts/ES5/igx-category-x-axis-module";
import { IgxCategoryYAxisModule } from "igniteui-angular-charts/ES5/igx-category-y-axis-module";
import { IgxNumericAngleAxisModule } from "igniteui-angular-charts/ES5/igx-numeric-angle-axis-module";
import { IgxNumericRadiusAxisModule } from "igniteui-angular-charts/ES5/igx-numeric-radius-axis-module";
import { IgxNumericXAxisModule } from "igniteui-angular-charts/ES5/igx-numeric-x-axis-module";
import { IgxNumericYAxisModule } from "igniteui-angular-charts/ES5/igx-numeric-y-axis-module";
import { IgxTimeXAxisModule } from "igniteui-angular-charts/ES5/igx-time-x-axis-module";

// Series
import { IgxBarSeriesModule } from "igniteui-angular-charts/ES5/igx-bar-series-module";
import { IgxBubbleSeriesModule } from "igniteui-angular-charts/ES5/igx-bubble-series-module";
import { IgxColumnSeriesModule } from "igniteui-angular-charts/ES5/igx-column-series-module";
import { IgxFinancialPriceSeriesModule } from "igniteui-angular-charts/ES5/igx-financial-price-series-module";
import { IgxLegendModule } from "igniteui-angular-charts/ES5/igx-legend-module";
import { IgxPolarAreaSeriesModule } from "igniteui-angular-charts/ES5/igx-polar-area-series-module";
import { IgxPolarLineSeriesModule } from "igniteui-angular-charts/ES5/igx-polar-line-series-module";
import { IgxPolarScatterSeriesModule } from "igniteui-angular-charts/ES5/igx-polar-scatter-series-module";
import { IgxPolarSplineAreaSeriesModule } from "igniteui-angular-charts/ES5/igx-polar-spline-area-series-module";
import { IgxPolarSplineSeriesModule } from "igniteui-angular-charts/ES5/igx-polar-spline-series-module";
import { IgxRadialAreaSeriesModule } from "igniteui-angular-charts/ES5/igx-radial-area-series-module";
import { IgxRadialColumnSeriesModule } from "igniteui-angular-charts/ES5/igx-radial-column-series-module";
import { IgxRadialLineSeriesModule } from "igniteui-angular-charts/ES5/igx-radial-line-series-module";
import { IgxRadialPieSeriesModule } from "igniteui-angular-charts/ES5/igx-radial-pie-series-module";
import { IgxScatterAreaSeriesModule } from "igniteui-angular-charts/ES5/igx-scatter-area-series-module";
import { IgxScatterContourSeriesModule } from "igniteui-angular-charts/ES5/igx-scatter-contour-series-module";
import { IgxScatterLineSeriesModule } from "igniteui-angular-charts/ES5/igx-scatter-line-series-module";
import { IgxScatterPolygonSeriesModule } from "igniteui-angular-charts/ES5/igx-scatter-polygon-series-module";
import { IgxScatterPolylineSeriesModule } from "igniteui-angular-charts/ES5/igx-scatter-polyline-series-module";
import { IgxScatterSeriesModule } from "igniteui-angular-charts/ES5/igx-scatter-series-module";
import { IgxScatterSplineSeriesModule } from "igniteui-angular-charts/ES5/igx-scatter-spline-series-module";
import { IgxStacked100AreaSeriesModule } from "igniteui-angular-charts/ES5/igx-stacked-100-area-series-module";
import { IgxStacked100BarSeriesModule } from "igniteui-angular-charts/ES5/igx-stacked-100-bar-series-module";
import { IgxStacked100ColumnSeriesModule } from "igniteui-angular-charts/ES5/igx-stacked-100-column-series-module";
import { IgxStacked100LineSeriesModule } from "igniteui-angular-charts/ES5/igx-stacked-100-line-series-module";
import { IgxStacked100SplineSeriesModule } from "igniteui-angular-charts/ES5/igx-stacked-100-spline-series-module";
import { IgxStackedAreaSeriesModule } from "igniteui-angular-charts/ES5/igx-stacked-area-series-module";
import { IgxStackedBarSeriesModule } from "igniteui-angular-charts/ES5/igx-stacked-bar-series-module";
import { IgxStackedColumnSeriesModule } from "igniteui-angular-charts/ES5/igx-stacked-column-series-module";
import { IgxStackedLineSeriesModule } from "igniteui-angular-charts/ES5/igx-stacked-line-series-module";
import { IgxStackedSplineSeriesModule } from "igniteui-angular-charts/ES5/igx-stacked-spline-series-module";
import { IgxValueOverlayModule } from "igniteui-angular-charts/ES5/igx-value-overlay-module";

import {
    IgxLinearContourValueResolverModule
} from "igniteui-angular-charts/ES5/igx-linear-contour-value-resolver-module";
import { IgxSizeScaleModule } from "igniteui-angular-charts/ES5/igx-size-scale-module";
import { IgxValueBrushScaleModule } from "igniteui-angular-charts/ES5/igx-value-brush-scale-module";

// Highlight and Annotation Layers
import { IgxCalloutLayerModule } from "igniteui-angular-charts/ES5/igx-callout-layer-module";
import { IgxCategoryHighlightLayerModule } from "igniteui-angular-charts/ES5/igx-category-highlight-layer-module";
import {
    IgxCategoryItemHighlightLayerModule
} from "igniteui-angular-charts/ES5/igx-category-item-highlight-layer-module";
import {
    IgxCrosshairLayerModule
} from "igniteui-angular-charts/ES5/igx-crosshair-layer-module";
import {
    IgxDataChartCategoryTrendLineModule
} from "igniteui-angular-charts/ES5/igx-data-chart-category-trend-line-module";
import { IgxFinalValueLayerModule } from "igniteui-angular-charts/ES5/igx-final-value-layer-module";

// Tooltip Layers
import { IgxCategoryToolTipLayerModule } from "igniteui-angular-charts/ES5/igx-category-tool-tip-layer-module";
import { IgxItemToolTipLayerModule } from "igniteui-angular-charts/ES5/igx-item-tool-tip-layer-module";

import { DataChartAxisAnnotationsComponent
} from "./data-chart-axis-annotations/data-chart-axis-annotations.component";
import { DataChartAxisLocationsComponent } from "./data-chart-axis-locations/data-chart-axis-locations.component";
import { DataChartAxisSettingsComponent } from "./data-chart-axis-settings/data-chart-axis-settings.component";
import { DataChartAxisSharingComponent } from "./data-chart-axis-sharing/data-chart-axis-sharing.component";
import { DataChartAxisTypesComponent } from "./data-chart-axis-types/data-chart-axis-types.component";
import { DataChartLegendsComponent } from "./data-chart-legends/data-chart-legends.component";
import { DataChartNavigationComponent } from "./data-chart-navigation/data-chart-navigation.component";
import {
    DataChartOverviewComponent
} from "./data-chart-overview/data-chart-overview.component";
import { DataChartPerformanceComponent } from "./data-chart-performance/data-chart-performance.component";
import {
    DataChartSeriesAnimationsComponent
} from "./data-chart-series-animations/data-chart-series-animations.component";
import {
    DataChartSeriesAnnotationsComponent
} from "./data-chart-series-annotations/data-chart-series-annotations.component";
import {
    DataChartSeriesHighlightingComponent
} from "./data-chart-series-highlighting/data-chart-series-highlighting.component";
import { DataChartSeriesMarkersComponent } from "./data-chart-series-markers/data-chart-series-markers.component";
import { DataChartSeriesTooltipsComponent } from "./data-chart-series-tooltips/data-chart-series-tooltips.component";
import {
    DataChartSeriesTrendlinesComponent
} from "./data-chart-series-trendlines/data-chart-series-trendlines.component";
import { DataChartSynchronizationComponent } from "./data-chart-synchronization/data-chart-synchronization.component";
import { DataChartTitlesComponent } from "./data-chart-titles/data-chart-titles.component";
import {
    DataChartTypeCategorySeriesComponent
} from "./data-chart-type-category-series/data-chart-type-category-series.component";
import {
    DataChartTypeFinancialSeriesComponent
} from "./data-chart-type-financial-series/data-chart-type-financial-series.component";
import {
    DataChartTypePolarSeriesComponent
} from "./data-chart-type-polar-series/data-chart-type-polar-series.component";
import {
    DataChartTypeRadialSeriesComponent
} from "./data-chart-type-radial-series/data-chart-type-radial-series.component";
import {
    DataChartTypeRangeSeriesComponent
} from "./data-chart-type-range-series/data-chart-type-range-series.component";
import {
    DataChartTypeScatterAreaSeriesComponent
} from "./data-chart-type-scatter-area-series/data-chart-type-scatter-area-series.component";
import {
    DataChartTypeScatterContourSeriesComponent
} from "./data-chart-type-scatter-contour-series/data-chart-type-scatter-contour-series.component";
import {
    DataChartTypeScatterDensitySeriesComponent
} from "./data-chart-type-scatter-density-series/data-chart-type-scatter-density-series.component";
import {
    DataChartTypeScatterSeriesComponent
} from "./data-chart-type-scatter-series/data-chart-type-scatter-series.component";
import {
    DataChartTypeScatterShapeSeriesComponent
} from "./data-chart-type-scatter-shape-series/data-chart-type-scatter-shape-series.component";
import {
    DataChartTypeStackedSeriesComponent
} from "./data-chart-type-stacked-series/data-chart-type-stacked-series.component";
import {
    DataChartTypeValueOverlayComponent
} from "./data-chart-type-value-overlay/data-chart-type-value-overlay.component";

import { DataChartTypeCategoryAreaSeriesComponent } from "./data-chart-type-category-area-series/data-chart-type-category-area-series.component";
import { DataChartTypeCategoryBarSeriesComponent } from "./data-chart-type-category-bar-series/data-chart-type-category-bar-series.component";
import { DataChartTypeCategoryColumnSeriesComponent } from "./data-chart-type-category-column-series/data-chart-type-category-column-series.component";
import { DataChartTypeCategoryLineSeriesComponent } from "./data-chart-type-category-line-series/data-chart-type-category-line-series.component";
import { DataChartTypeCategoryPointSeriesComponent } from "./data-chart-type-category-point-series/data-chart-type-category-point-series.component";
import { DataChartTypeCategorySplineAreaSeriesComponent } from "./data-chart-type-category-spline-area-series/data-chart-type-category-spline-area-series.component";
import { DataChartTypeCategorySplineSeriesComponent } from "./data-chart-type-category-spline-series/data-chart-type-category-spline-series.component";
import { DataChartTypeCategoryStepAreaSeriesComponent } from "./data-chart-type-category-step-area-series/data-chart-type-category-step-area-series.component";
import { DataChartTypeCategoryStepLineSeriesComponent } from "./data-chart-type-category-step-line-series/data-chart-type-category-step-line-series.component";
import { DataChartTypeCategoryWaterfallSeriesComponent } from "./data-chart-type-category-waterfall-series/data-chart-type-category-waterfall-series.component";
import { DataChartTypeFinancialCandlestickSeriesComponent } from "./data-chart-type-financial-candlestick-series/data-chart-type-financial-candlestick-series.component";
import { DataChartTypeFinancialOhlcSeriesComponent } from "./data-chart-type-financial-ohlc-series/data-chart-type-financial-ohlc-series.component";
import { DataChartTypePolarAreaSeriesComponent } from "./data-chart-type-polar-area-series/data-chart-type-polar-area-series.component";
import { DataChartTypePolarLineSeriesComponent } from "./data-chart-type-polar-line-series/data-chart-type-polar-line-series.component";
import { DataChartTypePolarScatterSeriesComponent } from "./data-chart-type-polar-scatter-series/data-chart-type-polar-scatter-series.component";
import { DataChartTypePolarSplineAreaSeriesComponent } from "./data-chart-type-polar-spline-area-series/data-chart-type-polar-spline-area-series.component";
import { DataChartTypePolarSplineSeriesComponent } from "./data-chart-type-polar-spline-series/data-chart-type-polar-spline-series.component";
import { DataChartTypeRadialAreaSeriesComponent } from "./data-chart-type-radial-area-series/data-chart-type-radial-area-series.component";
import { DataChartTypeRadialColumnSeriesComponent } from "./data-chart-type-radial-column-series/data-chart-type-radial-column-series.component";
import { DataChartTypeRadialLineSeriesComponent } from "./data-chart-type-radial-line-series/data-chart-type-radial-line-series.component";
import { DataChartTypeRadialPieSeriesComponent } from "./data-chart-type-radial-pie-series/data-chart-type-radial-pie-series.component";
import { DataChartTypeRangeAreaSeriesComponent } from "./data-chart-type-range-area-series/data-chart-type-range-area-series.component";
import { DataChartTypeRangeColumnSeriesComponent } from "./data-chart-type-range-column-series/data-chart-type-range-column-series.component";
import { DataChartTypeStackedAreaSeriesComponent } from "./data-chart-type-stacked-area-series/data-chart-type-stacked-area-series.component";
import { DataChartTypeStackedBarSeriesComponent } from "./data-chart-type-stacked-bar-series/data-chart-type-stacked-bar-series.component";
import { DataChartTypeStackedColumnSeriesComponent } from "./data-chart-type-stacked-column-series/data-chart-type-stacked-column-series.component";
import { DataChartTypeStackedLineSeriesComponent } from "./data-chart-type-stacked-line-series/data-chart-type-stacked-line-series.component";
import { DataChartTypeStackedSplineSeriesComponent } from "./data-chart-type-stacked-spline-series/data-chart-type-stacked-spline-series.component";
import { DataChartTypeStacked100AreaSeriesComponent } from "./data-chart-type-stacked100-area-series/data-chart-type-stacked100-area-series.component";
import { DataChartTypeStacked100BarSeriesComponent } from "./data-chart-type-stacked100-bar-series/data-chart-type-stacked100-bar-series.component";
import { DataChartTypeStacked100ColumnSeriesComponent } from "./data-chart-type-stacked100-column-series/data-chart-type-stacked100-column-series.component";
import { DataChartTypeStacked100LineSeriesComponent } from "./data-chart-type-stacked100-line-series/data-chart-type-stacked100-line-series.component";
import { DataChartTypeStacked100SplineSeriesComponent } from "./data-chart-type-stacked100-spline-series/data-chart-type-stacked100-spline-series.component";

import { SampleCategoryData } from "./SampleCategoryData";
import { SampleDensityData } from "./SampleDensityData";
import { SampleFinancialData } from "./SampleFinancialData";
import { SamplePolarData } from "./SamplePolarData";
import { SampleRadialData } from "./SampleRadialData";
import { SampleRangeData } from "./SampleRangeData";
import { SampleScatterData } from "./SampleScatterData";
import { SampleScatterStats } from "./SampleScatterStats";
import { SampleShapeData } from "./SampleShapeData";
import { SharedData } from "./SharedData";

// Indicators and Overlays
import { IgxBollingerBandsOverlayModule } from "igniteui-angular-charts/ES5/igx-bollinger-bands-overlay-module";
import { IgxMedianPriceIndicatorModule } from "igniteui-angular-charts/ES5/igx-median-price-indicator-module";
import { IgxMoneyFlowIndexIndicatorModule } from "igniteui-angular-charts/ES5/igx-money-flow-index-indicator-module";

import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        DataChartAxisAnnotationsComponent,
        DataChartAxisLocationsComponent,
        DataChartAxisSettingsComponent,
        DataChartAxisSharingComponent,
        DataChartAxisTypesComponent,
        DataChartLegendsComponent,
        DataChartNavigationComponent,
        DataChartOverviewComponent,
        DataChartPerformanceComponent,
        DataChartSeriesAnimationsComponent,
        DataChartSeriesAnnotationsComponent,
        DataChartSeriesHighlightingComponent,
        DataChartSeriesMarkersComponent,
        DataChartSeriesTooltipsComponent,
        DataChartSeriesTrendlinesComponent,
        DataChartSynchronizationComponent,
        DataChartTitlesComponent,
        DataChartTypeCategorySeriesComponent,
        DataChartTypeFinancialSeriesComponent,
        DataChartTypePolarSeriesComponent,
        DataChartTypeRadialSeriesComponent,
        DataChartTypeRangeSeriesComponent,
        DataChartTypeScatterAreaSeriesComponent,
        DataChartTypeScatterContourSeriesComponent,
        DataChartTypeScatterDensitySeriesComponent,
        DataChartTypeScatterSeriesComponent,
        DataChartTypeScatterShapeSeriesComponent,
        DataChartTypeStackedSeriesComponent,
        DataChartTypeValueOverlayComponent,
        DataChartTypeCategoryAreaSeriesComponent,
        DataChartTypeCategoryBarSeriesComponent,
        DataChartTypeCategoryColumnSeriesComponent,
        DataChartTypeCategoryLineSeriesComponent,
        DataChartTypeCategoryPointSeriesComponent,
        DataChartTypeCategorySplineAreaSeriesComponent,
        DataChartTypeCategorySplineSeriesComponent,
        DataChartTypeCategoryStepAreaSeriesComponent,
        DataChartTypeCategoryStepLineSeriesComponent,
        DataChartTypeCategoryWaterfallSeriesComponent,
        DataChartTypeFinancialCandlestickSeriesComponent,
        DataChartTypeFinancialOhlcSeriesComponent,
        DataChartTypePolarAreaSeriesComponent,
        DataChartTypePolarLineSeriesComponent,
        DataChartTypePolarScatterSeriesComponent,
        DataChartTypePolarSplineAreaSeriesComponent,
        DataChartTypePolarSplineSeriesComponent,
        DataChartTypeRadialAreaSeriesComponent,
        DataChartTypeRadialColumnSeriesComponent,
        DataChartTypeRadialLineSeriesComponent,
        DataChartTypeRadialPieSeriesComponent,
        DataChartTypeRangeAreaSeriesComponent,
        DataChartTypeRangeColumnSeriesComponent,
        DataChartTypeStacked100AreaSeriesComponent,
        DataChartTypeStacked100BarSeriesComponent,
        DataChartTypeStacked100ColumnSeriesComponent,
        DataChartTypeStacked100LineSeriesComponent,
        DataChartTypeStacked100SplineSeriesComponent,
        DataChartTypeStackedSplineSeriesComponent,
        DataChartTypeStackedLineSeriesComponent,
        DataChartTypeStackedColumnSeriesComponent,
        DataChartTypeStackedBarSeriesComponent,
        DataChartTypeStackedAreaSeriesComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        IgxDataChartCoreModule,
        IgxDataChartCategoryModule,
        IgxDataChartCategoryCoreModule,
        IgxCategoryAngleAxisModule,
        IgxCategoryXAxisModule,
        IgxNumericAngleAxisModule,
        IgxNumericRadiusAxisModule,
        IgxNumericYAxisModule,
        IgxColumnSeriesModule,
        IgxDataChartInteractivityModule,
        IgxCategoryHighlightLayerModule,
        IgxCategoryItemHighlightLayerModule,
        IgxCategoryToolTipLayerModule,
        IgxItemToolTipLayerModule,
        IgxFinancialPriceSeriesModule,
        IgxDataChartCategoryTrendLineModule,
        IgxDataChartScatterCoreModule,
        IgxDataChartScatterModule,
        IgxPolarAreaSeriesModule,
        IgxPolarLineSeriesModule,
        IgxPolarScatterSeriesModule,
        IgxPolarSplineAreaSeriesModule,
        IgxPolarSplineSeriesModule,
        IgxRadialAreaSeriesModule,
        IgxRadialColumnSeriesModule,
        IgxRadialLineSeriesModule,
        IgxRadialPieSeriesModule,
        IgxScatterAreaSeriesModule,
        IgxScatterSeriesModule,
        IgxScatterLineSeriesModule,
        IgxScatterPolygonSeriesModule,
        IgxScatterPolylineSeriesModule,
        IgxScatterSplineSeriesModule,
        IgxBubbleSeriesModule,
        IgxNumericXAxisModule,
        IgxDataChartAnnotationModule,
        IgxCalloutLayerModule,
        IgxFinalValueLayerModule,
        IgxCrosshairLayerModule,
        IgxLegendModule,
        IgxBollingerBandsOverlayModule,
        IgxMedianPriceIndicatorModule,
        IgxMoneyFlowIndexIndicatorModule,
        IgxBarSeriesModule,
        IgxCategoryYAxisModule,
        IgxTimeXAxisModule,
        IgxScatterContourSeriesModule,
        IgxLinearContourValueResolverModule,
        IgxSizeScaleModule,
        IgxValueBrushScaleModule,
        IgxDataChartScatterModule,
        IgxScatterSeriesModule,
        IgxDataChartStackedModule,
        IgxStackedColumnSeriesModule,
        IgxStacked100AreaSeriesModule,
        IgxStacked100BarSeriesModule,
        IgxStacked100ColumnSeriesModule,
        IgxStacked100LineSeriesModule,
        IgxStacked100SplineSeriesModule,
        IgxStackedAreaSeriesModule,
        IgxStackedLineSeriesModule,
        IgxStackedSplineSeriesModule,
        IgxStackedBarSeriesModule,
        IgxValueOverlayModule
    ]
})
export class DataChartSamplesModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: DataChartSamplesModule,
            providers: [SampleCategoryData,
                SampleDensityData,
                SampleFinancialData,
                SamplePolarData,
                SampleRadialData,
                SampleRangeData,
                SampleScatterData,
                SampleScatterStats,
                SampleShapeData,
                SharedData]
        };
    }
}
