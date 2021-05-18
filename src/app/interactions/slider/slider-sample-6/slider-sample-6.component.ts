import { Component } from '@angular/core';
import { IgxSliderType } from 'igniteui-angular';

@Component({
    selector: 'app-slider-sample-6',
    styleUrls: ['./slider-sample-6.component.css'],
    templateUrl: './slider-sample-6.component.html'
})
export class SliderSample6Component {
    public type: IgxSliderType = IgxSliderType.RANGE;

    public labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
}
