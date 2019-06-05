import { AfterViewInit, Component, ViewChild, TemplateRef } from "@angular/core";
import { IgxGeographicProportionalSymbolSeriesComponent
} from "igniteui-angular-maps/ES5/igx-geographic-proportional-symbol-series-component";
import { IgxGeographicMapComponent } from "igniteui-angular-maps/ES5/igx-geographic-map-component";
import { ShapeDataSource } from "igniteui-angular-core/ES5/igx-shape-data-source";
import { IgxValueBrushScaleComponent } from 'igniteui-angular-charts/ES5/igx-value-brush-scale-component';
import { DataContext } from 'igniteui-angular-core/ES5/igx-data-context';
import { IgxSizeScaleComponent } from 'igniteui-angular-charts/ES5/igx-size-scale-component';
import { MarkerType } from "igniteui-angular-charts/ES5/MarkerType";
import { WorldLocations } from "../../utilities/WorldLocations";


@Component({
  selector: 'app-map-type-scatter-bubble-series',
  templateUrl: './map-type-scatter-bubble-series.component.html',
  styleUrls: ['./map-type-scatter-bubble-series.component.scss']
})
export class MapTypeScatterBubbleSeriesComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;
    @ViewChild ("template")
    public tooltipTemplate: TemplateRef<object>;
    constructor() {
    }

  public ngAfterViewInit(): void {
    const sds = new ShapeDataSource();
    sds.shapefileSource = "assets/Shapes/WorldTemperatures.shp";
    sds.databaseSource  = "assets/Shapes/WorldTemperatures.dbf";
    sds.dataBind();
    sds.importCompleted.subscribe(() => this.onDataLoaded(sds, ""));
}

public onDataLoaded(sds: ShapeDataSource, e: any) {
    const shapeRecords = sds.getPointData();
    console.log("loaded contour shapes: " + shapeRecords.length + " from /Shapes/WorldTemperatures.shp");

    const contourPoints: any[] = [];
    for (const record of shapeRecords) {
        const temp = record.fieldValues.Contour;
        // using only major contours (every 10th degrees Celsius)
        if (temp % 10 === 0 && temp >= 0) {
            for (const shapes of record.points) {
                 for (let i = 0; i < shapes.length; i++) {
                    if (i % 5 === 0) {
                        const p = shapes[i];
                        const item = { lon: p.x, lat: p.y, value: temp};
                        contourPoints.push(item);
                    }
                 }
            }
        }
    }

    console.log("loaded contour points: " + contourPoints.length);
    this.addSeriesWith(WorldLocations.getAll());
}

public addSeriesWith(locations: any[])
    { 
        const sizeScale = new IgxSizeScaleComponent();
        sizeScale.minimumValue = 4;
        sizeScale.maximumValue = 60;

        const brushes = [
            "rgba(14, 194, 14, 0.4)",  // semi-transparent green
            "rgba(252, 170, 32, 0.4)", // semi-transparent orange
            "rgba(252, 32, 32, 0.4)",  // semi-transparent red
        ];

        const brushScale = new IgxValueBrushScaleComponent();
        brushScale.brushes = brushes;
        brushScale.minimumValue = 0;
        brushScale.maximumValue = 30;

        const symbolSeries = new IgxGeographicProportionalSymbolSeriesComponent();
        symbolSeries.dataSource = locations;
        symbolSeries.markerType = MarkerType.Circle;
        symbolSeries.radiusScale = sizeScale;
        symbolSeries.fillScale = brushScale;
        symbolSeries.fillMemberPath = "pop";
        symbolSeries.radiusMemberPath = "pop";
        symbolSeries.latitudeMemberPath = "lat";
        symbolSeries.longitudeMemberPath = "lon";
        symbolSeries.markerOutline = "rgba(0,0,0,0.3)";
        symbolSeries.tooltipTemplate = this.createContourTooltip(locations);

        this.map.series.add(symbolSeries);
    }

    public createContourTooltip(context: any) {
    const dataContext = context.dataContext as DataContext;
    if (!dataContext) return null;

    const dataItem = dataContext.item as any;
    if (!dataItem) return null;

    // dataContext.item is always a number for contour series
    const tmp = dataItem.toFixed(1) + "°C";
    this.tooltipTemplate.createEmbeddedView(() => tmp);
    return this.tooltipTemplate;
}

}
