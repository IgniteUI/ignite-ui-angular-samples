import { Component } from '@angular/core';
import { TicksOrientation } from 'igniteui-angular';

@Component({
    selector: 'app-slider-primary-ticks-top',
    styleUrls: ['./slider-primary-ticks-top.component.css'],
    templateUrl: './slider-primary-ticks-top.component.html'
})
export class SliderPrimaryTicksTopComponent {
    public ticksOreintation = TicksOrientation.Top;
}
