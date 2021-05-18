import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxHierarchicalGridComponent } from 'igniteui-angular';
import { SINGERS } from '../data';

@Component({
    selector: 'app-hierarchical-grid-excel-style-filtering-sample-1',
    styleUrls: ['./hierarchical-grid-excel-style-filtering-sample-1.component.css'],
    templateUrl: 'hierarchical-grid-excel-style-filtering-sample-1.component.html'
})

export class HGridExcelStyleFilteringSample1Component implements OnInit {

    @ViewChild('hierarchicalGrid', { static: true })
    public hierarchicalGrid: IgxHierarchicalGridComponent;

    public localdata;

    public density = 'comfortable';
    public displayDensities;

    constructor() {
        this.localdata = SINGERS;
    }
    public ngOnInit(): void {
        this.displayDensities = [
            {
                label: 'compact',
                selected: this.density === 'compact',
                togglable: true
            },
            {
                label: 'cosy',
                selected: this.density === 'cosy',
                togglable: true
            },
            {
                label: 'comfortable',
                selected: this.density === 'comfortable',
                togglable: true
            }
        ];
    }

    public formatter = (a) => a;

    public selectDensity(event) {
        this.density = this.displayDensities[event.index].label;
        this.hierarchicalGrid.displayDensity = this.displayDensities[event.index].label;
        this.hierarchicalGrid.reflow();
    }
}
