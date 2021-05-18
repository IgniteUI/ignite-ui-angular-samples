import { Component } from '@angular/core';
import { RadioGroupAlignment } from 'igniteui-angular';

@Component({
    selector: 'app-radio-group-vertical',
    styleUrls: ['./radio-group-vertical.component.css'],
    templateUrl: './radio-group-vertical.component.html'
})
export class RadioGroupVerticalComponent {
    public alignment = RadioGroupAlignment.vertical;
    public selected: string;
}

