import { Component, OnInit } from '@angular/core';
import { EMPLOYEE_DATA } from './data';

@Component({
    selector: 'app-tree-grid-clipboard-operations-sample',
    styleUrls: ['tree-grid-clipboard-operations-sample.component.css'],
    templateUrl: './tree-grid-clipboard-operations-sample.component.html'
})
export class TreeGridClipboardSampleComponent implements OnInit {

    public data: any[];
    public options = {
        enabled: true,
        copyHeaders: true,
        copyFormatters: true,
        separator: '\t'
    };
    private frmt: Intl.DateTimeFormat;

    constructor() {
        this.data = EMPLOYEE_DATA;
    }

    public ngOnInit() {
    }

    public formatter = (value: any) => `** ${value} **`;
    public formatDate = (val: Date) => {
        if (!this.frmt) {
            this.frmt = new Intl.DateTimeFormat('en-US');
        }
        return this.frmt.format(val);
    };
    public initColumn(column) {
        if (column.dataType === 'date') {
            column.formatter = this.formatDate;
        } else {
            column.formatter = this.formatter;
        }
        column.header = `🎉${column.field}`;
    }
}
