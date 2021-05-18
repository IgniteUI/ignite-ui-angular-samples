import { Component } from '@angular/core';
import { DATA } from '../../data/customers';

@Component({
    selector: 'app-grid-selection-template-numbers',
    styleUrls: ['./grid-sample-selection-template-numbers.component.css'],
    templateUrl: 'grid-sample-selection-template-numbers.component.html'
})

export class GridSelectionTemplateNumbersComponent {
    public data: any[];

    constructor() {
        this.data = [...DATA];
    }
}
