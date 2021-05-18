import { Component, ViewChild } from '@angular/core';
import { IgxCalendarComponent, IgxDialogComponent } from 'igniteui-angular';

@Component({
  selector: 'app-calendar',
  styleUrls: ['./multiview.component.css'],
  templateUrl: './multiview.component.html'
})
export class CalendarMultiViewComponent {
    @ViewChild('calendar', { static: true }) public calendar: IgxCalendarComponent;
    @ViewChild('alert', { static: true }) public dialog: IgxDialogComponent;
    public range = [];

    public selectDates(dates: Date[]) {
        this.range = dates;
    }

    public submitDates(eventArgs) {
        if (this.range.length < 2) {
            this.dialog.message = 'Select dates from the Calendar first.';
        } else {
            this.dialog.message = 'Request for your stay has been submitted !';
        }
        this.dialog.open();
    }

    public formatDate(date: Date): string {
        return this.getDatePart(date, this.calendar, 'weekday') + ' ' +
            this.getDatePart(date, this.calendar, 'day') + ' ' +
            this.getDatePart(date, this.calendar, 'month');
    }

    public getDatePart(val: any, component: any, datePart: string) {
        const date = val as Date;
        const locale = component.locale;
        const formatOptions: Intl.DateTimeFormatOptions = {};
        formatOptions[datePart] = component.formatOptions[datePart];

        return date.toLocaleString(locale, formatOptions);
    }

    get action() {
        return this.range.length < 1 ? 'CHECK-IN' : 'CHECK-OUT';
    }

    get checkin() {
        const checkin = this.range[0];
        return this.formatDate(checkin);
    }

    get checkout() {
        const checkin = this.range[this.range.length - 1];
        return this.formatDate(checkin);
    }
}
