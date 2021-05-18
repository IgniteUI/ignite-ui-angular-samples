import { Component } from '@angular/core';

@Component({
  selector: 'app-datepicker-sample-4',
  styleUrls: ['./datepicker-sample-4.component.css'],
  templateUrl: './datepicker-sample-4.component.html'
})
export class DatepickerSample4Component {

  public date: Date = new Date(Date.now());

  private dayFormatter = new Intl.DateTimeFormat('en', { weekday: 'long' });
  private monthFormatter = new Intl.DateTimeFormat('en', { month: 'long' });

  // eslint-disable-next-line arrow-body-style
  public formatter = (date: Date) => {
    return `You selected ${this.dayFormatter.format(date)}, ${date.getDate()} ${this.monthFormatter.format(date)}, ${date.getFullYear()}`;
  };
}
