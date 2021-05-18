import { Component } from '@angular/core';
import { ButtonGroupAlignment } from 'igniteui-angular';

@Component({
    selector: 'app-button-group-sample-2',
    styleUrls: ['./button-group-sample-2.component.css'],
    templateUrl: './button-group-sample-2.component.html'
})
export class ButtonGroupSample2Component {
    public alignment = ButtonGroupAlignment.vertical;
    public rippleColor = 'grey';
}
