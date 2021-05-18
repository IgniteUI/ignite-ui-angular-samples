import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular';
import { FOODS_DATA } from '../data/foods';

@Component({
    selector: 'app-tree-grid-excel-style-filtering-style',
    styleUrls: ['./tree-grid-excel-style-filtering-style.component.css'],
    templateUrl: 'tree-grid-excel-style-filtering-style.component.html'
})
export class TreeGridExcelStyleFilteringStyleComponent implements OnInit {

    @ViewChild('treegrid1', { read: IgxTreeGridComponent, static: true })
    public treegrid1: IgxTreeGridComponent;

    public data: any[];

    constructor() {
    }

    public ngOnInit(): void {
        this.data = FOODS_DATA();
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
