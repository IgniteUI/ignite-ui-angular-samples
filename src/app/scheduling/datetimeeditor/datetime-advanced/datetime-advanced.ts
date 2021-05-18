import { Component } from '@angular/core';
import { DatePart } from 'igniteui-angular';

@Component({
    selector: 'app-datetime-advanced',
    styleUrls: ['./datetime-advanced.css'],
    templateUrl: './datetime-advanced.html'
})

export class DateTimeAdvancedComponent {
    public date = new Date((new Date()).setHours(9, 0, 0, 0));
    public datePart: typeof DatePart = DatePart;
}
