import { Component, ViewChild } from '@angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';

@Component({
    providers: [],
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'grid-sample',
    styleUrls: ['tree-grid-toolbar-pinning.component.scss'],
    templateUrl: 'tree-grid-toolbar-pinning.component.html'

})

export class TreeGridPinningToolbarSampleComponent {
    @ViewChild('treeGrid', { static: true }) public treeGrid: IgxTreeGridComponent;
    public data: any[];

    constructor() {
        this.data = generateEmployeeDetailedFlatData();
    }
}
