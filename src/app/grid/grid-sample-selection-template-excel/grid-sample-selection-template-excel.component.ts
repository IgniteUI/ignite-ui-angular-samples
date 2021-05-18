import { Component } from '@angular/core';
import { DATA } from '../../data/customers';

@Component({
    selector: 'app-grid-selection-template-excel',
    styleUrls: ['./grid-sample-selection-template-excel.component.css'],
    templateUrl: 'grid-sample-selection-template-excel.component.html'
})

export class GridSelectionTemplateExcelComponent {
    public data: any[];

    constructor() {
        this.data = DATA;
    }
}
