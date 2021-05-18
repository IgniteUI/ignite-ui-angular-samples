import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular';
import { FOODS_DATA } from '../data/foods';

@Component({
    selector: 'app-tree-grid-excel-style-filtering-sample-1',
    styleUrls: ['./tree-grid-excel-style-filtering-sample-1.component.css'],
    templateUrl: 'tree-grid-excel-style-filtering-sample-1.component.html'
})

export class TreeGridExcelStyleFilteringSample1Component implements OnInit {
    @ViewChild('treegrid1', { read: IgxTreeGridComponent, static: true })
    public treegrid1: IgxTreeGridComponent;

    public data: any[];

    public density = 'comfortable';
    public displayDensities;

    constructor() {
    }
    public ngOnInit(): void {
        this.data = FOODS_DATA();
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

    public selectDensity(event) {
        this.density = this.displayDensities[event.index].label;
        this.treegrid1.displayDensity = this.displayDensities[event.index].label;
        this.treegrid1.reflow();
    }

    public formatDate(val) {
        if (val !== 'Select All') {
            return new Intl.DateTimeFormat('en-US').format(val);
        } else {
            return val;
        }
    }

    public formatCurrency(val: string) {
        return parseInt(val, 10).toFixed(2);
    }
}
