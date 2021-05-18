import { Component, OnInit } from '@angular/core';
import { SINGERS } from '../data';

@Component({
    selector: 'app-hierarchical-grid-hiding',
    styleUrls: ['./hierarchical-grid-hiding.component.css'],
    templateUrl: 'hierarchical-grid-hiding.component.html'
})

export class HGridColumnHidingSampleComponent implements OnInit {
    public localdata;

    constructor() {}

    public ngOnInit(): void {
        this.localdata = SINGERS;
    }

    public formatter = (a) => a;

}
