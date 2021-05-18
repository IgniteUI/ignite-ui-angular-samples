import { Component } from '@angular/core';
import { DateRange } from 'igniteui-angular';

@Component({
    selector: 'app-rangedatepicker-start-end',
    styleUrls: ['./daterangepicker-start-end.css'],
    templateUrl: './daterangepicker-start-end.html'
})
export class DateRangePickerStartEndComponent {
    public range: DateRange = { start: new Date(), end: new Date(new Date().setDate(new Date().getDate() + 5)) };
}
