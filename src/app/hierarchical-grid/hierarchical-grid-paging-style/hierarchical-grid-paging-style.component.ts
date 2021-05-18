import { Component } from '@angular/core';
import { SINGERS } from '../data';

@Component({
    selector: 'app-hierarchical-grid-paging',
    styleUrls: ['./hierarchical-grid-paging-style.component.css'],
    templateUrl: 'hierarchical-grid-paging-style.component.html'
})

export class HGridPagingStyleSampleComponent {
    public localdata;

    constructor() {
        this.localdata = SINGERS;
    }

    public formatter = (a) => a;
}
