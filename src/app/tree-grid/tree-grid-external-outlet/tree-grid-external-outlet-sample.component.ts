import { Component, OnInit } from '@angular/core';
import { FOODS_DATA } from '../data/foods';

@Component({
    selector: 'app-tree-grid-external-outlet',
    styleUrls: ['./tree-grid-external-outlet-sample.component.css'],
    templateUrl: 'tree-grid-external-outlet-sample.component.html'
})

export class TreeGridExternalOutletComponent implements OnInit {
    public data: any[];

    constructor() {
    }
    public ngOnInit(): void {
        this.data = FOODS_DATA();
    }
}
