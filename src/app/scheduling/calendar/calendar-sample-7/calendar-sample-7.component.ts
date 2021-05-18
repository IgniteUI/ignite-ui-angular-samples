import { Component, ViewChild } from '@angular/core';
import { DateRangeType, IgxCalendarComponent, IgxDialogComponent } from 'igniteui-angular';

@Component({
    selector: 'app-calendar',
    styleUrls: ['./calendar-sample-7.component.css'],
    templateUrl: './calendar-sample-7.component.html'
})
export class CalendarSample7Component {
    @ViewChild('calendar', { static: true }) public calendar: IgxCalendarComponent;
    @ViewChild('alert', { static: true }) public dialog: IgxDialogComponent;
    public range = [];

    public selectPTOdays(dates: Date[]) {
        this.range = dates;
    }

    public submitPTOdays(eventArgs) {
        this.calendar.specialDates =
            [{ type: DateRangeType.Specific, dateRange: this.range }];

        this.range.forEach((item) => {
            this.calendar.selectDate(item);
        });

        if (this.range.length === 0) {
            this.dialog.message = 'Select dates from the Calendar first.';
        } else {
            this.dialog.message = 'PTO days submitted.';
        }
        this.dialog.open();
    }
}
