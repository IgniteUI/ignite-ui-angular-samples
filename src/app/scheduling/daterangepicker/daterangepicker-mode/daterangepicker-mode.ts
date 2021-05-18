import { Component } from '@angular/core';
import { DateRange } from 'igniteui-angular';

@Component({
    selector: 'app-mode-rangedatepicker',
    styleUrls: ['./daterangepicker-mode.css'],
    templateUrl: './daterangepicker-mode.html'
})
export class DateRangePickerModeComponent {
    public range: DateRange = { start: new Date(), end: new Date(new Date().setDate(new Date().getDate() + 5)) };
}
