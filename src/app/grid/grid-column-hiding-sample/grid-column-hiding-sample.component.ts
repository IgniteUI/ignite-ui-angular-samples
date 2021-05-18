import { Component, OnInit } from '@angular/core';
import { DATA } from '../../data/customers';

@Component({
    selector: 'app-grid-column-hiding-sample',
    styleUrls: ['./grid-column-hiding-sample.component.css'],
    templateUrl: './grid-column-hiding-sample.component.html'
})
export class GridColumnHidingSampleComponent implements OnInit {

    public data: any[];

    constructor() { }

    public ngOnInit() {
        this.data = DATA;
    }
}
