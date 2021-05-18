import { Component } from '@angular/core';

@Component({
    selector: 'app-datepicker-dropdown',
    styleUrls: ['./datepicker-dropdown.component.css'],
    templateUrl: './datepicker-dropdown.component.html'

})
export class DatepickerDropdownComponent {
    public date = new Date(2019, 4, 15);
}
