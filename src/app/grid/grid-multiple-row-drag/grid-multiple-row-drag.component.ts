
import { Component, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';
import { DATA } from '../../data/customers';
@Component({
    selector: 'app-grid-multiple-row-drag',
    styleUrls: ['./grid-multiple-row-drag.component.css'],
    templateUrl: './grid-multiple-row-drag.component.html'
})
export class GridMultipleRowDragComponent  {
    @ViewChild('sourceGrid', { read: IgxGridComponent, static: true })
    public sourceGrid: IgxGridComponent;
    @ViewChild('targetGrid', { read: IgxGridComponent, static: true })
    public targetGrid: IgxGridComponent;

    public data1: any[];
    public data2: any[];
    public countIcon = 'drag_indicator';
    public dragIcon = 'arrow_right_alt';
    public selectionMode = 'multiple';
    constructor() {
        this.data1 = DATA;
        this.data2 = [];
   }

    public onRowDragEnd(args) {
        args.animation = true;
    }

    public onDropAllowed(args) {
        let selected = false;
        const ids = this.sourceGrid.selectedRows;
        const selectedRowData = this.sourceGrid.data.filter((record) => ids.includes(record.ID));
        selectedRowData.forEach((rowData) => {
            selected = true;
            this.targetGrid.addRow(rowData);
            this.sourceGrid.deleteRow(rowData.ID);
        });
        if (selected === false) {
            this.targetGrid.addRow(args.dragData.rowData);
            this.sourceGrid.deleteRow(args.dragData.rowID);
        }
    }

    public onEnter(args) {
        this.dragIcon = 'add';
    }
    public onRowDragStart(args) {
        const count = this.sourceGrid.selectedRows.length || 1;
        this.countIcon = `filter_${count > 9 ? '9_plus' : `${count}`}`;
    }
    public onLeave(args) {
        this.onRowDragStart(args);
        this.dragIcon = 'arrow_right_alt';
    }
}
