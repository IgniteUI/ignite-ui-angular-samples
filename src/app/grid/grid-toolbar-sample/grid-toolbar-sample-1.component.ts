import { Component} from '@angular/core';
import { athletesData } from '../services/data';

@Component({
  selector: 'app-grid-toolbar-sample-1',
  styleUrls: ['./grid-toolbar-sample-1.component.css'],
  templateUrl: './grid-toolbar-sample-1.component.html'
})
export class GridToolbarSample1Component {

    public data: any[];

    constructor() {
        this.data = athletesData;
    }
}
