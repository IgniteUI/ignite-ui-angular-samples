import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxCalendarComponent } from 'igniteui-angular';

@Component({
    selector: 'app-calendar',
    styleUrls: ['./calendar-sample-2.component.css'],
    templateUrl: './calendar-sample-2.component.html'
})
export class CalendarSample2Component implements OnInit{
    @ViewChild('calendar', { read: IgxCalendarComponent }) public calendar: IgxCalendarComponent;

    public formatOptions: any;
    public formatViews: any;
    public locales = ['EN', 'DE', 'FR', 'AR', 'ZH'];
    public locale = 'EN';

    public ngOnInit() {
        this.formatOptions = { day: '2-digit', month: 'long', weekday: 'long', year: 'numeric' };
        this.formatViews = { day: true, month: true, year: true };
    }
}
