import { Component, OnInit } from '@angular/core';
import { DATA } from '../../data/customers';

@Component({
    selector: 'app-grid-composite-data',
    styleUrls: ['./grid-composite-data.component.css'],
    templateUrl: './grid-composite-data.component.html'
})
export class GridCompositeDataComponent implements OnInit {

    public data;
    constructor() {}

    public ngOnInit() {
        this.data = DATA;
    }
}
