import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxColumnComponent, IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular';
import { CUSTOMERS } from '../data';

@Component({
    selector: 'app-hierarchical-grid-moving-styled',
    styleUrls: ['./hierarchical-grid-moving-styled.component.css'],
    templateUrl: 'hierarchical-grid-moving-styled.component.html'
})

export class HGridColumnMovingSampleStyledComponent implements OnInit {
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
