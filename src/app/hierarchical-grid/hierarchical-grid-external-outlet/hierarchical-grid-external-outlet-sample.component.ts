import { Component, OnInit } from '@angular/core';
import { SINGERS } from '../data';

@Component({
    selector: 'app-hierarchical-grid-external-outlet',
    styleUrls: ['./hierarchical-grid-external-outlet-sample.component.css'],
    templateUrl: 'hierarchical-grid-external-outlet-sample.component.html'
})

export class HierarchicalGridExternalOutletComponent implements OnInit {
    public data: any[];

    constructor() {
    }
    public ngOnInit(): void {
        this.data = SINGERS;

    }
}
