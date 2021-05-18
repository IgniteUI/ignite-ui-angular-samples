import { Component } from '@angular/core';
import { DateRange } from 'igniteui-angular';

@Component({
    selector: 'app-basic-rangedatepicker',
    styleUrls: ['./daterangepicker-basic.css'],
    templateUrl: './daterangepicker-basic.html'
})
export class BasicDateRangePickerComponent {
    public range: DateRange = { start: new Date(), end: new Date(new Date().setDate(new Date().getDate() + 5)) };
}
