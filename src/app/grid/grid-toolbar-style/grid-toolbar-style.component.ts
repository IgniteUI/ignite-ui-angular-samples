import { Component } from '@angular/core';
import { athletesData } from '../services/data';

@Component({
  selector: 'app-grid-toolbar-style',
  styleUrls: ['./grid-toolbar-style.component.css'],
  templateUrl: './grid-toolbar-style.component.html'
})
export class GridToolbarStyleComponent {

    public data: any[];

    constructor() {
        this.data = athletesData;
    }
}
