import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';
import { DATA } from '../../data/nwindData';

@Component({
    selector: 'app-grid-esf-style-sample',
    styleUrls: ['./grid-excel-style-filtering-style.component.css'],
    templateUrl: 'grid-excel-style-filtering-style.component.html'
})
export class ExcelStyleFilteringStyleComponent implements OnInit {

    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;

    public data: any[];

    constructor() {
    }

    public ngOnInit(): void {
        this.data = DATA;
    }

    public formatDate(val) {
        if (val !== 'Select All') {
            return new Intl.DateTimeFormat('en-US').format(val);
        } else {
            return val;
        }
    }

}
