import { Component, OnInit } from '@angular/core';
import { DATA } from '../../data/nwindData';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'grid-clipboard-operations-sample',
    styleUrls: ['grid-clipboard-operations-sample.component.scss'],
    templateUrl: './grid-clipboard-operations-sample.component.html'
})
export class GridClipboardSampleComponent implements OnInit {

    public data: any[];
    public options = {
        enabled: true,
        copyHeaders: true,
        copyFormatters: true,
        separator: '\t'
    };

    constructor() {
        this.data = DATA;
    }

    public ngOnInit() {
    }

    public formatter = (value: any) => `** ${value} **`;

    public initColumn(column) {
        column.formatter = this.formatter;
        column.header = `🎉${column.field}`;
        if (column.index > 6) {
            column.hidden = true;
        }
    }
}
