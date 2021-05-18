import { Component } from '@angular/core';

@Component({
    selector: 'app-monthpicker-sample-3',
    styleUrls: ['./monthpicker-sample-3.component.css'],
    templateUrl: './monthpicker-sample-3.component.html'
})
export class MonthpickerSample3Component {
    public formatOptions = {
        month: 'long'
    };

    public date = new Date();
    public locales = ['en', 'de', 'fr', 'ar', 'zh'];
    public locale = 'en';
}
