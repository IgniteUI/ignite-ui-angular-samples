import { Component, OnInit, ViewChild } from "@angular/core";
import {
    CsvFileTypes,
    IColumnExportingEventArgs,
    IGridToolbarExportEventArgs,
    IgxCsvExporterOptions,
    IgxExcelExporterOptions,
    IgxExporterOptionsBase,
    IgxGridComponent
} from "igniteui-angular";
import { athletesData } from "../services/data";

@Component({
  selector: "grid-toolbar-sample-3",
  styleUrls: ["./grid-toolbar-sample-3.component.scss"],
  templateUrl: "./grid-toolbar-sample-3.component.html"
})
export class GridToolbarSample3Component implements OnInit {

    @ViewChild("grid1") public grid: IgxGridComponent;
    public data: any[];

    public ngOnInit() {
        this.data = athletesData;
    }

    public toolbarExportingHandler(args: IGridToolbarExportEventArgs) {
        // You can customize the exporting from this event
        const options: IgxExporterOptionsBase = args.options ;
        options.fileName = "Custom Title";

        if (options instanceof IgxExcelExporterOptions) {
            const excelOptions = options as IgxExcelExporterOptions;
            excelOptions.columnWidth = 10;
        } else {
            const csvOptions = options as IgxCsvExporterOptions;
            csvOptions.fileType = CsvFileTypes.TSV;
            csvOptions.valueDelimiter = "\t";
        }

        args.exporter.onColumnExport.subscribe((columnArgs: IColumnExportingEventArgs) => {
            // Don't export image fields
            columnArgs.cancel = columnArgs.header === "Avatar" ||
                                columnArgs.header === "CountryFlag";
        });
    }
}
