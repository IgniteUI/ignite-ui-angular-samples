import { Component } from '@angular/core';
import { DateRange } from 'igniteui-angular';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'basic-rangedatepicker',
    styleUrls: ['./daterangepicker-basic.scss'],
    templateUrl: './daterangepicker-basic.html'
})
export class BasicDateRangePickerComponent {
    public range: DateRange = { start: new Date(), end: new Date(new Date().setDate(new Date().getDate() + 5)) };
}
