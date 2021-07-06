import { Component, ViewChild } from '@angular/core';
import { IgxDatePickerComponent, IgxSnackbarComponent } from 'igniteui-angular';

@Component({
    selector: 'app-datepicker-sample-7',
    styleUrls: ['./datepicker-sample-7.component.scss'],
    templateUrl: './datepicker-sample-7.component.html'
})

export class DatepickerSample7Component {

    @ViewChild(IgxSnackbarComponent, { static: true })
    private snackbar;

    @ViewChild(IgxDatePickerComponent, { static: true })
    private datePicker;

    public currentDate;
    public changeDate(event) {
        const input = event.target.value;
        if (input !== '') {
            const parsedDate = new Date(input);
            if (this.isDateValid(parsedDate)) {
                this.currentDate = parsedDate;
            } else {
                this.notify('Invalid Date');
            }
        } else {
            this.datePicker.deselectDate();
            this.currentDate = input;
        }
    }

    private isDateValid(date: Date): boolean {
        return (new Date(date).toLocaleString() !== 'Invalid Date');
    }

    private notify(message: string): void {
        this.snackbar.open(message);
    }
}
