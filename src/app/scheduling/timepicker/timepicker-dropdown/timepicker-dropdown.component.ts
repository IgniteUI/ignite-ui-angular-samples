import { Component } from '@angular/core';
import { PickerInteractionMode } from 'igniteui-angular';

@Component({
    selector: 'app-timepicker-dropdown',
    styleUrls: ['./timepicker-dropdown.component.css'],
    templateUrl: './timepicker-dropdown.component.html'
})
export class TimepickerDropdownComponent {
    public mode: PickerInteractionMode = PickerInteractionMode.DropDown;
    public format = 'hh:mm tt';
    public date: Date = new Date();
}
