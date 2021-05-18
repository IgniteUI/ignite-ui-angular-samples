import { Component, ElementRef } from '@angular/core';
import { IgxOverlayService } from 'igniteui-angular';

@Component({
  selector: 'app-datepicker-sample-1',
  styleUrls: ['./datepicker-styling-sample.component.css'],
  templateUrl: './datepicker-styling-sample.component.html'
})
export class DatepickerStylingSampleComponent {
    constructor(public element: ElementRef, private overlayService: IgxOverlayService) { }
 }
