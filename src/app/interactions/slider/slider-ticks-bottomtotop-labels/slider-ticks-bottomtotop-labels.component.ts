import { Component } from '@angular/core';
import { IgxSliderType, TickLabelsOrientation } from 'igniteui-angular';

@Component({
    selector: 'app-slider-ticks-bottomtotop-labels',
    styleUrls: ['./slider-ticks-bottomtotop-labels.component.css'],
    templateUrl: './slider-ticks-bottomtotop-labels.component.html'
})
export class SliderTicksBottomtotopLabelsComponent {
    public type: IgxSliderType = IgxSliderType.RANGE;
    public labelsOrientation = TickLabelsOrientation.BottomToTop;
}

export class PriceRange {}
