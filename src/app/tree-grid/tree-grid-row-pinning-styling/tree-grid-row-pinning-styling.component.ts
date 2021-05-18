import { Component, OnInit, ViewChild } from '@angular/core';
import {
    ColumnPinningPosition,
    IgxTreeGridComponent,
    IPinningConfig,
    RowPinningPosition
} from 'igniteui-angular';
import { generateEmployeeFlatData, IEmployee } from '../data/employees-flat';

@Component({
    selector: 'app-tree-grid-row-pinning-styling',
    styleUrls: ['tree-grid-row-pinning-styling.component.css'],
    templateUrl: 'tree-grid-row-pinning-styling.component.html'
})
export class TreeGridRowPinningStylingSampleComponent implements OnInit {

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
}
