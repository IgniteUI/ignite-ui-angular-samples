import { Component } from '@angular/core';
import { EMPLOYEE_FLAT_AVATARS_DATA } from '../data/employees-flat-avatars';

@Component({
  selector: 'app-tree-grid-toolbar-style',
  styleUrls: ['./tree-grid-toolbar-style.component.css'],
  templateUrl: './tree-grid-toolbar-style.component.html'
})
export class TreeGridToolbarStyleComponent {

    public data: any[];

    constructor() {
        this.data = EMPLOYEE_FLAT_AVATARS_DATA();
    }
}
