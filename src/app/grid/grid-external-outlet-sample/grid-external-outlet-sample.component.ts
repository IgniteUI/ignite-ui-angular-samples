import { Component, OnInit } from '@angular/core';
import { DATA } from '../../data/nwindData';

@Component({
    selector: 'app-grid-external-outlet',
    styleUrls: ['./grid-external-outlet-sample.component.css'],
    templateUrl: 'grid-external-outlet-sample.component.html'
})

export class GridExternalOutletComponent implements OnInit {
    public data: any[];

    constructor() {
    }
    public ngOnInit(): void {
        this.data = DATA;
    }
}
