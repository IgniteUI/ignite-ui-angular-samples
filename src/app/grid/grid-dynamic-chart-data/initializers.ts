import { Type } from "@angular/core";
import { IgxCategoryXAxisComponent } from "igniteui-angular-charts/ES5/igx-category-x-axis-component";
import { IgxCategoryYAxisComponent } from "igniteui-angular-charts/ES5/igx-category-y-axis-component";
import { IgxDataChartComponent } from "igniteui-angular-charts/ES5/igx-data-chart-component";
import { IgxNumericXAxisComponent } from "igniteui-angular-charts/ES5/igx-numeric-x-axis-component";
import { IgxNumericYAxisComponent } from "igniteui-angular-charts/ES5/igx-numeric-y-axis-component";
import { IgxStackedFragmentSeriesComponent } from 'igniteui-angular-charts/ES5/igx-stacked-fragment-series-component';

// tslint:disable: max-line-length
function getSeriesData(valueMemberPaths: string[], data: any[], yAxisValueMemberPath?: string, radiusMemberPath?: string) {
    let dataValues;
    const chartData = [];
    valueMemberPaths.filter(v => !(v === yAxisValueMemberPath || v === radiusMemberPath)).forEach(valueMemberPath => {
        dataValues = [];
        data.forEach(record => {
            // tslint:disable-next-line: max-line-length
            dataValues.push({
                [this.labelMemberPath]: record.rowID[this.labelMemberPath],
                [valueMemberPath]: record.rowID[valueMemberPath],
                [yAxisValueMemberPath]: record.rowID[yAxisValueMemberPath],
                [radiusMemberPath]: record.rowID[radiusMemberPath]
            });
        });
        chartData.push({ data: dataValues, valueMemberPath, yAxisValueMemberPath, radiusMemberPath });
    });
    return chartData;
}
function applyXAxisOptions(xAxis: any, options: IXAxesOptions) {
    if (options) {
        Object.keys(options).forEach(key => {
            xAxis[key] = options[key];
        });
    }
}

function applyYAxisOptions(yAxis: any, options: IYAxesOptions) {
    if (options) {
        Object.keys(options).forEach(key => {
            yAxis[key] = options[key];
        });
    }
}

function applyChartOptions(chart: any, options: IChartOptions) {
    if (options) {
        Object.keys(options).forEach(key => {
            chart[key] = options[key];
        });
    }
}

function applySeriesOptions(series: any, options: IChartSeriesOptions | IStackedFragmentOptions) {
    if (options) {
        Object.keys(options).forEach(key => {
            series[key] = options[key];
        });
    }
}

class SeriesFactory {
    public create<T>(type: (new () => T)): T {
        return new type();
    }
}

export interface IChartOptions {
    [key: string]: any;
}

export interface IChartSeriesOptions {
    [key: string]: any;
}

export interface IXAxesOptions {
    [key: string]: any;
}

export interface IYAxesOptions {
    [key: string]: any;
}

export interface IStackedFragmentOptions {
    [key: string]: any;
}

export interface IChartComponentOptions {
    chartOptions?: IChartOptions;
    seriesOptions?: IChartSeriesOptions[];
    xAxisOptions?: IXAxesOptions;
    yAxisOptions?: IYAxesOptions;
    stackedFragmentOptions?: IStackedFragmentOptions;
}

export abstract class ChartInitializer {
    protected yAxis;
    protected xAxis;
    protected seriesFactory = new SeriesFactory();
    constructor() { }
    public abstract initChart(chart: any, options?: IChartComponentOptions): any;
}

export class IgxDataChartInitializer extends ChartInitializer {
    public seriesType: Type<any>;

    constructor(seriesType: Type<any>, xAxis?: IgxNumericXAxisComponent | IgxCategoryXAxisComponent, yAxis?: IgxCategoryYAxisComponent | IgxNumericYAxisComponent) {
        super();

        this.xAxis = xAxis ? xAxis : new IgxCategoryXAxisComponent();
        this.yAxis = yAxis ? yAxis : new IgxNumericYAxisComponent();
        this.seriesType = seriesType;
    }

    public initChart(chart: IgxDataChartComponent, options?: IChartComponentOptions): IgxDataChartComponent {
        options.seriesOptions.forEach((option) => {
            const series = this.seriesFactory.create(this.seriesType);
            series.xAxis = this.xAxis;
            series.yAxis = this.yAxis;
            applySeriesOptions(series, option);
            chart.series.add(series);
        });
        applyChartOptions(chart, options.chartOptions);
        applyXAxisOptions(this.xAxis, options.xAxisOptions);
        applyYAxisOptions(this.yAxis, options.yAxisOptions);
        chart.axes.add(this.xAxis);
        chart.axes.add(this.yAxis);
        return chart;
    }
}

export class IgxBarDataChartInitializer extends IgxDataChartInitializer {
    constructor(seriesType: Type<any>, xAxis = new IgxNumericXAxisComponent(), yAxis = new IgxCategoryYAxisComponent()) {
        super(seriesType, xAxis, yAxis);
    }
}

export class IgxScatterChartInitializer extends IgxDataChartInitializer {
    constructor(seriesType: Type<any>, xAxis = new IgxNumericXAxisComponent(), yAxis = new IgxNumericYAxisComponent()) {
        super(seriesType, xAxis, yAxis);
    }
}

export class IgxStackedDataChartInitializer extends IgxDataChartInitializer {

    public initChart(chart: IgxDataChartComponent, options?: IChartComponentOptions): IgxDataChartComponent {
        const series = this.seriesFactory.create(this.seriesType);
        series.xAxis = this.xAxis;
        series.yAxis = this.yAxis;
        options.stackedFragmentOptions.forEach(fragOpt => {
            const frag = new IgxStackedFragmentSeriesComponent();
            applySeriesOptions(frag, fragOpt);
            series.series.add(frag);
        });
        applySeriesOptions(series, options.seriesOptions);
        applyChartOptions(chart, options.chartOptions);
        applyXAxisOptions(this.xAxis, options.xAxisOptions);
        applyYAxisOptions(this.yAxis, options.yAxisOptions);
        chart.series.add(series);
        chart.axes.add(this.xAxis);
        chart.axes.add(this.yAxis);
        return chart;
    }
}

export class IgxStackedBarDataChartInitializer extends IgxStackedDataChartInitializer {
    constructor(seriesType: Type<any>, xAxis = new IgxNumericXAxisComponent(), yAxis = new IgxCategoryYAxisComponent()) {
        super(seriesType, xAxis, yAxis);
    }
}
