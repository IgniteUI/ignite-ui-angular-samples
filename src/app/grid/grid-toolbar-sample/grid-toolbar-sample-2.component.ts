import { Component } from '@angular/core';
import { athletesData } from '../services/data';

@Component({
  selector: 'app-grid-toolbar-sample-2',
  styleUrls: ['./grid-toolbar-sample-2.component.css'],
  templateUrl: './grid-toolbar-sample-2.component.html'
})
export class GridToolbarSample2Component {

    data: any[];
    toolbarTitle = 'Grid toolbar';
    enableHiding = true;
    enablePinning = true;
    enableExport = true;

    constructor() {
        this.data = athletesData;
    }
}
