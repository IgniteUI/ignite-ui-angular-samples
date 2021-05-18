import { Component } from '@angular/core';
import { SINGERS } from '../data';

@Component({
    selector: 'app-hierarchical-grid-advanced-filtering-style',
    styleUrls: ['./hierarchical-grid-advanced-filtering-style.component.css'],
    templateUrl: 'hierarchical-grid-advanced-filtering-style.component.html'
})

export class HGridAdvancedFilteringStyleComponent {
    public localdata;

    constructor() {
        this.localdata = SINGERS;
    }

    public formatter = (a) => a;
}
