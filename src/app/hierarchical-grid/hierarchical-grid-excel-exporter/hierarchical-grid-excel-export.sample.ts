import { Component, ViewChild } from '@angular/core';
import { IgxColumnComponent, IgxExcelExporterOptions, IgxExcelExporterService, IgxHierarchicalGridComponent } from 'igniteui-angular';
import { Singer, SINGERS } from '../../data/artistData';

@Component({
    selector: 'app-hierarchical-grid-excel-export-sample',
    styleUrls: ['hierarchical-grid-excel-export.sample.css'],
    templateUrl: 'hierarchical-grid-excel-export.sample.html'
})
export class HGridExcelExportSampleComponent {
    @ViewChild('hierarchicalGrid', { static: true }) public igxGrid1: IgxHierarchicalGridComponent;

    public data: Singer[];
    public col: IgxColumnComponent;
    public pWidth: string;
    public nWidth: string;

    constructor(private excelExportService: IgxExcelExporterService) {
        this.data = SINGERS;
    }

    public onResize(event) {
        this.col = event.column;
        this.pWidth = event.prevWidth;
        this.nWidth = event.newWidth;
    }

    public formatter = (a) => a;

    public exportButtonHandler() {
        this.excelExportService.export(this.igxGrid1, new IgxExcelExporterOptions('ExportFileFromHGrid'));
    }
}
