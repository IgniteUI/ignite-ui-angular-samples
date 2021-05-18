import { Component, OnInit } from '@angular/core';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';

@Component({
    selector: 'app-tree-grid-column-hiding-sample',
    styleUrls: ['./tree-grid-column-hiding-sample.component.css'],
    templateUrl: './tree-grid-column-hiding-sample.component.html'
})
export class TreeGridColumnHidingSampleComponent implements OnInit {

    public data: any[];

    constructor() { }

    public ngOnInit() {
        this.data = generateEmployeeDetailedFlatData();
    }
}
