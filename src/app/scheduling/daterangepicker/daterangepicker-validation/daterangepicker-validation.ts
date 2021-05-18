import { Component } from '@angular/core';
import { DateRange } from 'igniteui-angular';

@Component({
    selector: 'app-daterangepicker-validation',
    styleUrls: ['./daterangepicker-validation.css'],
    templateUrl: './daterangepicker-validation.html'
})
export class DateRangePickerValidationComponent {
    public rangeSingle: DateRange;
    public rangeSeparate: DateRange;
    public startDate: Date;
    public endDate: Date;
}
