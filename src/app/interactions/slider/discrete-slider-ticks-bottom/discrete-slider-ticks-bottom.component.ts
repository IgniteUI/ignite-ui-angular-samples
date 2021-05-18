import { Component } from '@angular/core';
import { IgxSliderType } from 'igniteui-angular';

@Component({
    selector: 'app-discrete-slider-bottom-ticks',
    styleUrls: ['./discrete-slider-ticks-bottom.component.css'],
    templateUrl: './discrete-slider-ticks-bottom.component.html'
})
export class SliderDiscreteTicksBottomComponent {
    public type: IgxSliderType = IgxSliderType.RANGE;
}
