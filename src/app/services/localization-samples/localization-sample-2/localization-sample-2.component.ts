import { Component, OnInit } from '@angular/core';
import { changei18n, getCurrentResourceStrings } from 'igniteui-angular';
import { DATA } from '../../data/nwindData';

@Component({
    selector: 'app-localization-sample-2',
    styleUrls: ['./localization-sample-2.component.css'],
    templateUrl: 'localization-sample-2.component.html'
})

export class LocalizationSample2Component implements OnInit {

    public data: any[];

    constructor() {}

    public ngOnInit(): void {
        this.data = DATA;

        const currentRS = getCurrentResourceStrings();

        for (const key of Object.keys(currentRS)) {
            if (currentRS[key].indexOf('[Localized]') === -1) {
                currentRS[key] = '[Localized]' + currentRS[key];
            }
        }

        changei18n(currentRS);
    }

    public formatDate(val: Date) {
        return new Intl.DateTimeFormat('en-US').format(val);
    }

    public formatCurrency(val: string) {
        return parseInt(val, 10).toFixed(2);
    }
}
