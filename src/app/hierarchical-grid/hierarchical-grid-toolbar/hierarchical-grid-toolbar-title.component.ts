import { Component } from '@angular/core';
import { SINGERS } from '../data';

@Component({
    selector: 'app-hierarchical-grid-toolbar-title',
    styleUrls: ['./hierarchical-grid-toolbar-title.component.css'],
    templateUrl: 'hierarchical-grid-toolbar-title.component.html'
})

export class HGridToolbarTitleSampleComponent {

    public data: any[];

    constructor() {
        this.data = SINGERS;
    }
}
