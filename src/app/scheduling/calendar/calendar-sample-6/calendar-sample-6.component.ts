import { Component, OnInit, ViewChild } from '@angular/core';
import { DateRangeType, IgxCalendarComponent } from 'igniteui-angular';

@Component({
  selector: 'app-calendar',
  styleUrls: ['./calendar-sample-6.component.css'],
  templateUrl: './calendar-sample-6.component.html'
})
export class CalendarSample6Component implements OnInit{
    @ViewChild('calendar', { static: true }) public calendar: IgxCalendarComponent;
    public today = new Date(Date.now());
    public range = [
        new Date(this.today.getFullYear(), this.today.getMonth(), 3),
        new Date(this.today.getFullYear(), this.today.getMonth(), 8)
    ];

    public ngOnInit() {
        this.calendar.disabledDates = [{ type: DateRangeType.Between, dateRange: this.range }];
    }
}
