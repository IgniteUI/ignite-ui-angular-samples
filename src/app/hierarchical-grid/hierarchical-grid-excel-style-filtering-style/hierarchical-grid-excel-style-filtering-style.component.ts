import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxHierarchicalGridComponent } from 'igniteui-angular';
import { SINGERS } from '../data';

@Component({
    selector: 'app-hierarchical-grid-excel-style-filtering-style',
    styleUrls: ['./hierarchical-grid-excel-style-filtering-style.component.css'],
    templateUrl: 'hierarchical-grid-excel-style-filtering-style.component.html'
})
export class HGridExcelStyleFilteringStyleComponent implements OnInit {

    @ViewChild('hierarchicalGrid', { static: true })
    public hierarchicalGrid: IgxHierarchicalGridComponent;

    public localdata;

    constructor() {
        this.localdata = SINGERS;
    }

    public ngOnInit(): void {
    }

}
