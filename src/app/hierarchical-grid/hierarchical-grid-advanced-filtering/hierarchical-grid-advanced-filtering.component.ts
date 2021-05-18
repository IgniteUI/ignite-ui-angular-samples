import { Component } from '@angular/core';
import { SINGERS } from '../data';

@Component({
    selector: 'app-hierarchical-grid-advanced-filtering',
    styleUrls: ['./hierarchical-grid-advanced-filtering.component.css'],
    templateUrl: 'hierarchical-grid-advanced-filtering.component.html'
})

export class HGridAdvancedFilteringSampleComponent {
    public localdata;

    constructor() {
        this.localdata = SINGERS;
    }

    public formatter = (a) => a;
}
