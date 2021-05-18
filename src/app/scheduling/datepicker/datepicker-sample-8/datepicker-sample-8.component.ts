import { Component } from '@angular/core';
import { CalendarView, IgxCalendarComponent, IgxDatePickerComponent } from 'igniteui-angular';

@Component({
    selector: 'app-datepicker-sample-8',
    styleUrls: ['./datepicker-sample-8.component.css'],
    templateUrl: './datepicker-sample-8.component.html'
})

export class DatepickerSample8Component {
    public date = new Date();
    public monthsView(calendar: IgxCalendarComponent) {
        calendar.activeView = CalendarView.YEAR;
    }

    public yearsView(calendar: IgxCalendarComponent) {
        calendar.activeView = CalendarView.DECADE;
    }
}
