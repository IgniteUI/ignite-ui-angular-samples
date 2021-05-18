import { Component, OnInit, ViewChild } from '@angular/core';

import { IgxExcelExporterOptions,
         IgxExcelExporterService,
         IgxTreeGridComponent } from 'igniteui-angular';

import { FOODS_DATA } from '../../../tree-grid/data/foods';

@Component({
  selector: 'app-excel-export-tree-grid-sample',
  styleUrls: ['./excel-export-tree-grid-sample.component.css'],
  templateUrl: './excel-export-tree-grid-sample.component.html'
})
export class TreeGridExcelExportSample1Component implements OnInit {

  @ViewChild('igxTreeGrid1', { static: true })
  public igxTreeGrid1: IgxTreeGridComponent;

  public data: any[];

  constructor(private excelExportService: IgxExcelExporterService) {
  }

  public ngOnInit(): void {
    this.data = FOODS_DATA();
  }

  public exportButtonHandler() {
    /*
    The following code demonstrates how to attach event handlers to exporter specific events
    and also how to customize the column export process.
    this.excelExportService.columnExporting.subscribe((args: IColumnExportingEventArgs) => {
      if (args.header == 'Age' && args.columnIndex == 1) {
        args.cancel = true;
      }
    });
    this.excelExportService.rowExporting.subscribe((args: IRowExportingEventArgs) => {
    });
    this.excelExportService.exportEnded.subscribe((args: IExcelExportEndedEventArgs) => {
    });
    */
    this.excelExportService.export(this.igxTreeGrid1,
        new IgxExcelExporterOptions('ExportFileFromTreeGrid'));
  }

}
