import { Component, ViewChild } from '@angular/core';
import { IgxSliderComponent, TicksOrientation} from 'igniteui-angular';

@Component({
    selector: 'app-slider-bottom-ticks',
    styleUrls: ['./slider-secondary-ticks-mirror.component.css'],
    templateUrl: './slider-secondary-ticks-mirror.component.html'
})
export class SliderSecondaryTicksMirrorComponent {
    @ViewChild(IgxSliderComponent, { static: true })
    public slider: IgxSliderComponent;
    public ticksOrientation = TicksOrientation.Mirror;
}
