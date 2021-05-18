import { Component } from '@angular/core';
import { SINGERS } from '../data';

@Component({
    selector: 'app-hierarchical-grid-paging',
    styleUrls: ['./hierarchical-grid-paging.component.css'],
    templateUrl: 'hierarchical-grid-paging.component.html'
})

export class HGridPagingSampleComponent {
    public localdata;

    constructor() {
        this.localdata = SINGERS;
    }

    public formatter = (a) => a;
}
