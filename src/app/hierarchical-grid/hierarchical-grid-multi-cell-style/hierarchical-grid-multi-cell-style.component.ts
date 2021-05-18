import { Component, OnInit } from '@angular/core';
import { CUSTOMERS } from '../data';

@Component({
    selector: 'app-hierarchical-grid-multi-cell-style',
    styleUrls: ['./hierarchical-grid-multi-cell-style.component.css'],
    templateUrl: 'hierarchical-grid-multi-cell-style.component.html'
})

export class HGridMultiCellStyleComponent implements OnInit {
    public localdata;
    public ngOnInit(): void {
        this.localdata = CUSTOMERS;
    }
}
