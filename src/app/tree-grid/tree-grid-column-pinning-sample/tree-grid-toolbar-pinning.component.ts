import { Component, ViewChild } from '@angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';

@Component({
    providers: [],
    selector: 'app-grid-sample',
    styleUrls: ['tree-grid-toolbar-pinning.component.css'],
    templateUrl: 'tree-grid-toolbar-pinning.component.html'

})

export class TreeGridPinningToolbarSampleComponent {
    @ViewChild('treeGrid', { static: true }) public treeGrid: IgxTreeGridComponent;
    public data: any[];

    constructor() {
        this.data = generateEmployeeDetailedFlatData();
    }
}
