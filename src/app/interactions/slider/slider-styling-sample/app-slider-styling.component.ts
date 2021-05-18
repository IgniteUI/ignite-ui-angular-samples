import { Component, ViewChild } from '@angular/core';
import { IgxSliderComponent, TicksOrientation} from 'igniteui-angular';

@Component({
    selector: 'app-slider-styling',
    styleUrls: ['./app-slider-styling.component.css'],
    templateUrl: './app-slider-styling.component.html'
})
export class AppSliderStylingComponent {
    @ViewChild(IgxSliderComponent, { static: true })
    public slider: IgxSliderComponent;
    public ticksOrientation = TicksOrientation.Mirror;
}
