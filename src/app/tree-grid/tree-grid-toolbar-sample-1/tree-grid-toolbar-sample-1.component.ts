import { Component } from '@angular/core';
import { EMPLOYEE_FLAT_AVATARS_DATA } from '../data/employees-flat-avatars';

@Component({
  selector: 'app-tree-grid-toolbar-sample-1',
  styleUrls: ['./tree-grid-toolbar-sample-1.component.css'],
  templateUrl: './tree-grid-toolbar-sample-1.component.html'
})
export class TreeGridToolbarSample1Component {

    data: any[];
    toolbarTitle = 'Tree grid toolbar';
    enableHiding = true;
    enablePinning = true;
    enableExport = true;

    constructor() {
        this.data = EMPLOYEE_FLAT_AVATARS_DATA();
    }
}
