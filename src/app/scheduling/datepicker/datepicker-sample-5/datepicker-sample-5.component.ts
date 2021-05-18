import { Component, OnInit } from '@angular/core';
import { DateParser } from '../../../date-parser';

@Component({
  providers: [DateParser],
  selector: 'app-datepicker-sample-5',
  styleUrls: ['./datepicker-sample-5.component.css'],
  templateUrl: './datepicker-sample-5.component.html'
})
export class DatepickerSample5Component implements OnInit {
  public intlDateTimeFormat = new Intl.DateTimeFormat() as any;
  public formatParts: boolean = this.intlDateTimeFormat.formatToParts;
  public date: Date = new Date(Date.now());

  public allViews;

  constructor(public parser: DateParser) { }

  public ngOnInit() {
    this.allViews = { day: false, month: true, year: true };
  }
}
