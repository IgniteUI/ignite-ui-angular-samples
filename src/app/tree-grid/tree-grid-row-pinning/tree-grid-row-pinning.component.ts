import { Component, OnInit, ViewChild } from '@angular/core';
import {
    ColumnPinningPosition,
    IgxTreeGridComponent,
    IPinningConfig,
    RowPinningPosition
} from 'igniteui-angular';
import { generateEmployeeFlatData, IEmployee } from '../data/employees-flat';

@Component({
    selector: 'app-tree-grid-row-pinning',
    styleUrls: ['tree-grid-row-pinning.component.css'],
    templateUrl: 'tree-grid-row-pinning.component.html'
})
export class TreeGridRowPinningSampleComponent implements OnInit {

    @ViewChild('treeGrid1', { static: true })
    public treeGrid: IgxTreeGridComponent;
    public data: IEmployee[];
    public columns: any[];

    public pinningConfig: IPinningConfig = { rows: RowPinningPosition.Top, columns: ColumnPinningPosition.End };

    constructor() { }

    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();

        this.columns = [
            { field: 'Name', label: 'Full Name', dataType: 'string' },
            { field: 'Age', label: 'Age', dataType: 'number' },
            { field: 'Title', label: 'Title', dataType: 'string' },
            { field: 'HireDate', label: 'Hire Date', dataType: 'date' }
        ];

        this.treeGrid.pinRow(this.data[0].ID);
        this.treeGrid.pinRow(this.data[3].ID);
    }

    public changePinningPosition() {
        if (this.pinningConfig.rows === RowPinningPosition.Bottom) {
            this.pinningConfig = { columns: this.pinningConfig.columns, rows: RowPinningPosition.Top };
        } else {
            this.pinningConfig = { columns: this.pinningConfig.columns, rows: RowPinningPosition.Bottom };
        }
    }
}
