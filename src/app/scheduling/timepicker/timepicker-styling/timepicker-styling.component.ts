
import { Component, ElementRef } from '@angular/core';

@Component({
    selector: 'app-timepicker',
    styleUrls: ['./timepicker-styling.component.css'],
    templateUrl: './timepicker-styling.component.html'
})
export class TimePickerStylingComponent {
    constructor(public element: ElementRef) { }
 }
