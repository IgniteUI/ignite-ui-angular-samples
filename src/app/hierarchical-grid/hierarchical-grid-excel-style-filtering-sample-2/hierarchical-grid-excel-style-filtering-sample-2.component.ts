import { Component, OnInit } from '@angular/core';
import { SINGERS } from '../data';

@Component({
    selector: 'app-hierarchical-grid-excel-style-filtering-sample-2',
    styleUrls: ['./hierarchical-grid-excel-style-filtering-sample-2.component.css'],
    templateUrl: 'hierarchical-grid-excel-style-filtering-sample-2.component.html'
})

export class HGridExcelStyleFilteringSample2Component implements OnInit {
    public localdata;

    constructor() {
        this.localdata = SINGERS;
    }
    public ngOnInit(): void {

    }

    public formatter = (a) => a;
}
