import { Component, EventEmitter, Input, Output} from '@angular/core';
import { IgxIconModule } from 'igniteui-angular';

interface ICopyData {
    data: any;
}
@Component({
    selector: 'app-contextmenu',
    styleUrls: ['./contextmenu.component.css'],
    templateUrl: './contextmenu.component.html'
})
export class ContextmenuComponent {

    @Input()
    public x = 0;

    @Input()
    public y = 0;

    @Input()
    public cell;

    @Input()
    public selectedCells;

    @Output()
    public cellValueCopy = new EventEmitter<ICopyData>();

    public selectedData: ICopyData;

    constructor() { }

    public copySelectedCellData(event) {
        const selectedData = { [this.cell.column.field]: this.cell.value };
        this.copyData(JSON.stringify({ [this.cell.column.field]: this.cell.value }));
        this.cellValueCopy.emit({ data: selectedData });
    }

    public copyRowData(event) {
        const selectedData = this.cell.row.rowData ;
        this.copyData(JSON.stringify(this.cell.row.rowData));
        this.cellValueCopy.emit({ data: selectedData });
    }

    public copySelectedCells(event) {
        const selectedData = this.selectedCells.data;
        this.copyData(JSON.stringify(selectedData));
        this.cellValueCopy.emit({ data: selectedData });
    }

    public hasMultiCellSelection() {
        return this.selectedCells && Object.entries(this.selectedCells).length !== 0;
    }

    private copyData(data) {
        const tempElement = document.createElement('input');
        document.body.appendChild(tempElement);
        tempElement.setAttribute('id', 'temp_id');
        (document.getElementById('temp_id') as HTMLInputElement).value = data;
        tempElement.select();
        document.execCommand('copy');
        document.body.removeChild(tempElement);
    }
}
