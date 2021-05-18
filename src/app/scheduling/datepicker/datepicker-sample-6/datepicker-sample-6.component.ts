import { Component } from '@angular/core';

@Component({
    selector: 'app-datepicker-sample-6',
    styleUrls: ['./datepicker-sample-6.component.css'],
    templateUrl: './datepicker-sample-6.component.html'
})
export class DatepickerSample6Component {
    public date: Date = new Date(Date.now());
}
