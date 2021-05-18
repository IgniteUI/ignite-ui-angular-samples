import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxColumnComponent, IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular';
import { CUSTOMERS } from '../data';

@Component({
    selector: 'app-hierarchical-grid-moving',
    styleUrls: ['./hierarchical-grid-moving.component.css'],
    templateUrl: 'hierarchical-grid-moving.component.html'
})

export class HGridColumnMovingSampleComponent implements OnInit {
    @ViewChild('hierarchicalGrid', { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    public localdata;

    constructor() {
        this.localdata = CUSTOMERS;
    }
    public ngOnInit(): void {

    }

    public toggleColumn(col: IgxColumnComponent) {
        col.pinned ? col.unpin() : col.pin();
    }

}
