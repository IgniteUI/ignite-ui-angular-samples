import { Component, ViewChild } from '@angular/core';
import { IgxCalendarComponent } from 'igniteui-angular';

@Component({
    selector: 'app-calendar',
    styleUrls: ['./calendar-rtl-sample.component.css'],
    templateUrl: './calendar-rtl-sample.component.html'
})
export class CalendarRtlSampleComponent {
    @ViewChild('calendar', { read: IgxCalendarComponent }) public calendar: IgxCalendarComponent;

    public directionality = 'rtl';

    changeDirectionality(){
        this.directionality === 'rtl' ? this.directionality = 'ltr' : this.directionality = 'rtl';
    }
}
