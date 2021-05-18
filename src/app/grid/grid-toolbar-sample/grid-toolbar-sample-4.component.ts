import { Component } from '@angular/core';
import { athletesData } from '../services/data';

@Component({
  selector: 'app-grid-toolbar-sample-4',
  styleUrls: ['./grid-toolbar-sample-4.component.css'],
  templateUrl: './grid-toolbar-sample-4.component.html'
})
export class GridToolbarSample4Component {
    public data: any[];

    constructor() {
        this.data = athletesData;
    }

}
