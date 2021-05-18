import { Component } from '@angular/core';
import { SINGERS } from '../data';

@Component({
    selector: 'app-hierarchical-grid-selection-template-numbers',
    styleUrls: ['./hierarchical-grid-selection-template-numbers.component.css'],
    templateUrl: 'hierarchical-grid-selection-template-numbers.component.html'
})

export class HGridSelectionTemplateNumbersSampleComponent {
    public localData;

    constructor() {
        this.localData = SINGERS;
    }
}
