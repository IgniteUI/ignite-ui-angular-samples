import { Component } from '@angular/core';
import { SINGERS } from '../data';

@Component({
    selector: 'app-hierarchical-grid-toolbar-options',
    styleUrls: ['./hierarchical-grid-toolbar-options.component.css'],
    templateUrl: 'hierarchical-grid-toolbar-options.component.html'
})

export class HGridToolbarOptionsSampleComponent {
    public data: any[];
    toolbarTitle = 'Singers';
    enableHiding = true;
    enablePinning = true;
    enableExport = true;

    constructor() {
        this.data = SINGERS;
    }
}
