import { Component, OnInit } from '@angular/core';
import { generateEmployeeFlatData } from '../data/employees-flat';

@Component({
    selector: 'app-tree-grid-selection-template-numbers',
    styleUrls: ['./tree-grid-selection-template-numbers.component.css'],
    templateUrl: './tree-grid-selection-template-numbers.component.html'
})
export class TreeGridSelectionTemplateNumbersSampleComponent implements OnInit {
    public data: any[];

    constructor() { }

    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();
    }
}
