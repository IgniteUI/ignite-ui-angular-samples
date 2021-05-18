import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent, IgxStringFilteringOperand } from 'igniteui-angular';
import { DATA } from '../../data/nwindData';

@Component({
    selector: 'app-grid-sample',
    styleUrls: ['./grid-filtering-sample.component.css'],
    templateUrl: 'grid-filtering-sample.component.html'
})

export class FilteringSampleComponent implements OnInit {
    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;

    public data: any[];

    constructor() {
    }
    public ngOnInit(): void {
        this.data = DATA;
    }

    public filter(term) {
        this.grid1.filter('ProductName', term, IgxStringFilteringOperand.instance().condition('contains'));
    }

    public formatDate(val: Date) {
        return new Intl.DateTimeFormat('en-US').format(val);
    }

    public formatCurrency(val: string) {
        return parseInt(val, 10).toFixed(2);
    }
}
