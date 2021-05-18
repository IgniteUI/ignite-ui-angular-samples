import { Component } from '@angular/core';
import { SINGERS } from '../data';

@Component({
    selector: 'app-hierarchical-grid-resize-line-styling',
    styleUrls: ['./hierarchical-grid-resize-line-styling.component.css'],
    templateUrl: './hierarchical-grid-resize-line-styling.component.html'
})
export class HGridResizeLineStylingComponent {
    public localData;
    constructor() {
        this.localData = SINGERS;
    }

    public formatter = (a) => a;
}
