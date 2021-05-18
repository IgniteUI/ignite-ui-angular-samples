import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxStringFilteringOperand, IgxTreeGridComponent } from 'igniteui-angular';
import { FOODS_DATA } from '../data/foods';

@Component({
    selector: 'app-tree-grid-filtering-sample',
    styleUrls: ['./tree-grid-filtering-sample.component.css'],
    templateUrl: 'tree-grid-filtering-sample.component.html'
})

export class TreeGridFilteringSampleComponent implements OnInit {
    @ViewChild('treegrid1', { read: IgxTreeGridComponent, static: true })
    public treegrid1: IgxTreeGridComponent;

    public data: any[];

    constructor() {
    }
    public ngOnInit(): void {
        this.data = FOODS_DATA();
    }

    public filter(term) {
        this.treegrid1.filter('Name', term, IgxStringFilteringOperand.instance().condition('contains'));
    }

    public formatDate(val: Date) {
        return new Intl.DateTimeFormat('en-US').format(val);
    }

    public formatCurrency(val: string) {
        return parseInt(val, 10).toFixed(2);
    }
}
