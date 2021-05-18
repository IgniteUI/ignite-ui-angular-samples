import { Component } from '@angular/core';
import { SINGERS } from '../data';

@Component({
  selector: 'app-hierarchical-grid-toolbar-style',
  styleUrls: ['./hierarchical-grid-toolbar-style.component.css'],
  templateUrl: './hierarchical-grid-toolbar-style.component.html'
})
export class HierarchicalGridToolbarStyleComponent {
    public data: any[];

    constructor() {
        this.data = SINGERS;
    }
}
