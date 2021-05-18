import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular';
import { CUSTOMERS } from '../data';

@Component({
    selector: 'app-hierarchical-grid-multi-column',
    styleUrls: ['./hierarchical-grid-multi-column.component.css'],
    templateUrl: 'hierarchical-grid-multi-column.component.html'
})

export class HGridMultiHeadersSampleComponent implements OnInit {
    @ViewChild('hierarchicalGrid', { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    public localdata;

    constructor() {

    }
    public ngOnInit(): void {
        this.localdata = CUSTOMERS;
    }

    public pinGroup() {
        const firstColumnGroup = this.hierarchicalGrid.columnList.filter((c) => c.header === 'General Information')[0];
        firstColumnGroup.pinned = !firstColumnGroup.pinned;
    }

    public hideGroup() {
        const firstColumnGroup = this.hierarchicalGrid.columnList.filter((c) => c.header === 'General Information')[0];
        firstColumnGroup.hidden = !firstColumnGroup.hidden;
    }

}
