/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';
import { DATA } from '../../data/nwindData';

@Component({
    selector: 'app-localization-sample-1',
    styleUrls: ['./localization-sample-1.component.css'],
    templateUrl: 'localization-sample-1.component.html'
})

export class LocalizationSample1Component implements OnInit {
    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid: IgxGridComponent;

    public data: any[];

    constructor() {
    }
    public ngOnInit(): void {
        this.data = DATA;

        const newGridRes = {
            igx_grid_filter: '[Localized]Filter',
            igx_grid_filter_row_close: '[Localized]Close'
        };

        this.grid.resourceStrings = newGridRes;
    }

    public formatDate(val: Date) {
        return new Intl.DateTimeFormat('en-US').format(val);
    }

    public formatCurrency(val: string) {
        return parseInt(val, 10).toFixed(2);
    }
}
