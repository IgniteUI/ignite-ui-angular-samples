import { Component, OnInit, Pipe, PipeTransform, ViewChild } from '@angular/core';
import { DateRangeType, IgxCalendarComponent, IgxDropDownComponent } from 'igniteui-angular';

@Component({
    selector: 'app-datepicker-sample-9',
    styleUrls: ['./datepicker-sample-9.component.css'],
    templateUrl: './datepicker-sample-9.component.html'
})
export class DatepickerSample9Component implements OnInit {
    @ViewChild('calendar', { static: true }) public calendar: IgxCalendarComponent;
    @ViewChild('dropDown1', { static: true }) public dropDown1: IgxDropDownComponent;
    @ViewChild('dropDown2', { static: true }) public dropDown2: IgxDropDownComponent;

    public startDate: Date = new Date(Date.now());
    public endDate: Date = new Date();
    public inputStartDate: string = this.startDate.getDate() + '/'
        + (this.startDate.getMonth() + 1) + '/' + this.startDate.getFullYear();
    public inputEndDate = 'One Way';
    public slash = ' - ';
    public isClickedTwice: boolean;
    public oneWayTicket = true;
    public townFrom: string;
    public townTo: string;
    public towns: string[];
    constructor() {
        this.towns = ['New York', 'Washington, D.C.', 'London', 'Berlin', 'Sofia', 'Rome', 'Kiev',
            'Copenhagen', 'Paris', 'Barcelona', 'Vienna', 'Athens', 'Dublin', 'Yerevan',
            'Oslo', 'Helsinki', 'Stockholm', 'Prague', 'Istanbul'];
    }

    public ngOnInit() {
        this.calendar.disabledDates = [{ type: DateRangeType.Before, dateRange: [new Date(Date.now())] }];
        this.calendar.selectDate([this.startDate, this.startDate]);
    }

    public saveTownFrom() {
        if (this.dropDown1.selectedItem !== null) {
            this.townFrom = this.dropDown1.selectedItem.value;
        } else {
            this.townFrom = '';
        }
    }

    public saveTownTo() {
        if (this.dropDown2.selectedItem !== null) {
            this.townTo = this.dropDown2.selectedItem.value;
        } else {
            this.townTo = '';
        }
    }

    public verifyRange(dates: Date[]) {
        this.startDate = dates[0];
        this.isClickedTwice = false;
        if (this.startDate !== dates[dates.length - 1]) {
            this.endDate = dates[dates.length - 1];
            this.isClickedTwice = true;
        }

        this.inputStartDate = this.startDate.getDate() + '/'
            + (this.startDate.getMonth() + 1) + '/' + this.startDate.getFullYear();
        this.slash = ' - ';
        this.inputEndDate = '';
        if (this.isClickedTwice) {
            this.inputEndDate = this.endDate.getDate() + '/'
                + (this.endDate.getMonth() + 1) + '/' + this.endDate.getFullYear();
        }
        this.oneWayTicket = false;
    }

    public oneWay(dropDownCalendar) {
        this.inputEndDate = 'One Way';
        this.oneWayTicket = true;
        if (!this.isClickedTwice) {
            this.calendar.selectDate(this.startDate);
        } else {
            this.calendar.deselectDate([this.endDate]);
            this.calendar.selectDate([this.startDate]);
        }
        dropDownCalendar.close();
    }

    public onDoneSelected(dropDownCalendar) {
        dropDownCalendar.close();
    }

    public onClosing() {
        if (!this.isClickedTwice && !this.oneWayTicket) {
            this.inputEndDate = this.inputStartDate;
            this.calendar.selectDate(this.startDate);
        }
    }
}
@Pipe({ name: 'startsWith' })
export class AutocompletePipeStartsWith implements PipeTransform {
    public transform(collection: any[], term = '') {
        return collection.filter((item) => item.toString().toLowerCase().startsWith(term.toString().toLowerCase()));
    }
}

@Pipe({ name: 'withoutTownFrom' })
export class PipeWithoutTownFrom implements PipeTransform {
    public transform(collection: any[], townFrom: string) {
        return collection.filter((item) => item !== townFrom);
    }
}
