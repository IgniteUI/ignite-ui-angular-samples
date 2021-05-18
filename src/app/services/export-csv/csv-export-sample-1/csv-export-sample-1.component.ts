/* eslint-disable @typescript-eslint/naming-convention */
import { Component, ViewChild } from '@angular/core';

import { CsvFileTypes,
         IgxCsvExporterOptions,
         IgxCsvExporterService,
         IgxGridComponent } from 'igniteui-angular';

@Component({
  selector: 'app-csv-export-sample-1',
  styleUrls: ['./csv-export-sample-1.component.css'],
  templateUrl: './csv-export-sample-1.component.html'
})
export class CsvExportSample1Component {

  @ViewChild('igxGrid1', { static: true }) public igxGrid1: IgxGridComponent;
  public localData = [
    { Name: 'Eric Ridley', Age: '26' },
    { Name: 'Alanis Brook', Age: '22' },
    { Name: 'Jonathan Morris', Age: '23' }
  ];

  constructor(private csvExportService: IgxCsvExporterService) {
  }

  public exportButtonHandler() {
    /*
    The following code demonstrates how to attach event handlers to exporter specific events
    and also how to customize the column export process.
    this.csvExportService.columnExporting.subscribe((args: IColumnExportingEventArgs) => {
      if (args.header == 'Age' && args.columnIndex == 1) {
        args.cancel = true;
      }
    });
    this.csvExportService.rowExporting.subscribe((args: IRowExportingEventArgs) => {
    });
    this.csvExportService.exportEnded.subscribe((args: ICsvExportEndedEventArgs) => {
    });
    */
    this.csvExportService.export(this.igxGrid1, new IgxCsvExporterOptions('ExportFileFromGrid', CsvFileTypes.CSV));
  }

}
