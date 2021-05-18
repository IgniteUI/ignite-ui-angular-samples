import { Component } from '@angular/core';
import { DateParser } from '../../../date-parser';

@Component({
  providers: [DateParser],
  selector: 'app-calendar',
  styleUrls: ['./calendar-sample-4.component.css'],
  templateUrl: './calendar-sample-4.component.html'
})

export class CalendarSample4Component {
  public intlDateTimeFormat = new Intl.DateTimeFormat() as any;
  public formatParts: boolean = this.intlDateTimeFormat.formatToParts;

  constructor(public parser: DateParser) { }
}
