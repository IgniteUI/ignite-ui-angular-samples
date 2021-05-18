import { Component, OnInit } from '@angular/core';
import { DATA } from '../../data/nwindData';

@Component({
    selector: 'app-grid-clipboard-operations-sample',
    styleUrls: ['grid-clipboard-operations-sample.component.css'],
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
