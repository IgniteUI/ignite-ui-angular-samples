import { Component, ViewChild } from '@angular/core';
import {
    IgxExcelExporterOptions,
    IgxExcelExporterService,
    IgxGridComponent,
    IgxGridTransaction,
    IgxTransactionService
} from 'igniteui-angular';

import { EXCEL_DATA, LOCAL_DATA } from './data';

import { first } from 'rxjs/operators';

@Component({
    providers: [
        { provide: IgxGridTransaction, useClass: IgxTransactionService }
    ],
    selector: 'app-grid-paste-sample',
    styleUrls: ['./grid-paste-sample.component.css'],
    templateUrl: './grid-paste-sample.component.html'
})
export class GridPasteSampleComponent {
    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;
    public data;
    public comboData = [
        'Paste data as new records',
        'Paste starting from active cell'
    ];
    public pasteMode = this.comboData[0];

    constructor(private excelExportService: IgxExcelExporterService) {
        this.data = LOCAL_DATA;
    }

    public selectionChange(event: any) {
        this.pasteMode = event.newSelection.value;
    }

    public dataPasted(processedData) {
        if (this.pasteMode === 'Paste data as new records') {
            this.addRecords(processedData);
        } else {
            this.updateRecords(processedData);
        }
    }

    public addRecords(processedData: any[]) {
        const columns = this.grid1.visibleColumns;
        const pk = this.grid1.primaryKey;
        for (const curentDataRow of processedData) {
            const rowData = {};
            for (const col of columns) {
                rowData[col.field] = curentDataRow[col.visibleIndex];
            }
            // generate PK
            rowData[pk] =
                this.grid1.data.length +
                this.grid1.transactions.getAggregatedChanges(false).length +
                1;
            this.grid1.addRow(rowData);
        }
        // scroll to last added row
        this.grid1.verticalScrollContainer.dataChanged
            .pipe(first())
            .subscribe(() => {
                this.grid1.verticalScrollContainer.scrollTo(
                    this.grid1.dataView.length - 1
                );
            });
    }

    public updateRecords(processedData: any[]) {
        const cell = this.grid1.selectedCells[0];
        const pk = this.grid1.primaryKey;
        if (!cell) {
            return;
        }
        const rowIndex = cell.row.index;
        // const rowPkValue = cell.row.rowData[pk];
        const cellIndex = cell.column.visibleIndex;
        const columns = this.grid1.visibleColumns;
        let index = 0;
        const updatedRecsPK = [];
        for (const curentDataRow of processedData) {
            const rowData = {};
            const dataRec = this.grid1.data[rowIndex + index];
            const rowPkValue = dataRec
                ? dataRec[pk]
                : this.grid1.data.length + 1;
            rowData[pk] = rowPkValue;
            for (let j = 0; j < columns.length; j++) {
                let currentCell;
                if (j >= cellIndex) {
                    currentCell = curentDataRow.shift();
                }
                const colKey = columns[j].field;
                rowData[colKey] =
                    currentCell || (!!dataRec ? dataRec[colKey] : null);
            }
            if (!dataRec) {
                // no rec to update, add instead
                rowData[pk] = rowPkValue;
                this.grid1.addRow(rowData);
                continue;
            }
            this.grid1.updateRow(rowData, rowPkValue);
            this.grid1.cdr.detectChanges();
            updatedRecsPK.push(rowPkValue);
            index++;
        }
    }

    public downloadExcel(eventArgs) {
        this.excelExportService.exportData(
            EXCEL_DATA,
            new IgxExcelExporterOptions('sample-data')
        );
    }

    public undo() {
        this.grid1.transactions.undo();
    }

    public redo() {
        this.grid1.transactions.redo();
        if (this.pasteMode === 'Paste starting from active cell') {
            return;
        }
        this.grid1.verticalScrollContainer.dataChanged
            .pipe(first())
            .subscribe(() => {
                this.grid1.verticalScrollContainer.scrollTo(
                    this.grid1.dataView.length - 1
                );
            });
    }

    public commit() {
        this.grid1.transactions.commit(this.data);
    }
    public get undoEnabled(): boolean {
        return this.grid1.transactions.canUndo;
    }

    public get redoEnabled(): boolean {
        return this.grid1.transactions.canRedo;
    }

    public get hasTransactions(): boolean {
        return this.grid1.transactions.getAggregatedChanges(false).length > 0;
    }
}
