import { Component } from '@angular/core';
import { EMPLOYEE_FLAT_AVATARS_DATA } from '../data/employees-flat-avatars';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'tree-grid-toolbar-sample-3',
    styleUrls: ['./tree-grid-toolbar-sample-3.component.scss'],
    templateUrl: './tree-grid-toolbar-sample-3.component.html'
})
export class TreeGridToolbarSample3Component {

    public data: any[];

    constructor() {
        this.data = EMPLOYEE_FLAT_AVATARS_DATA();
    }
}
