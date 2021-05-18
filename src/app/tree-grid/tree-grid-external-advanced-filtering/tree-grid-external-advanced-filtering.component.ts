import { Component, OnInit } from '@angular/core';
import { FOODS_DATA } from '../data/foods';

@Component({
    selector: 'app-tree-grid-external-advanced-filtering',
    templateUrl: './tree-grid-external-advanced-filtering.component.html',
    styleUrls: ['./tree-grid-external-advanced-filtering.component.css']
})
export class TreeGridExternalAdvancedFilteringComponent {

    public data: any[];
    constructor() {
        this.data = FOODS_DATA();
    }
}
