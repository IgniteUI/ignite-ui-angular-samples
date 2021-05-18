import { Component, OnInit } from '@angular/core';
import { IgxSliderType } from 'igniteui-angular';

@Component({
  selector: 'app-slider-sample-4',
  styleUrls: ['./slider-sample-4.component.css'],
  templateUrl: './slider-sample-4.component.html'
})
export class SliderSample4Component implements OnInit {
  public sliderType = IgxSliderType;
  public priceRange: PriceRange = new PriceRange(200, 800);

  constructor() { }

  public ngOnInit() {
  }

}

class PriceRange {
  constructor(
    public lower: number,
    public upper: number
  ) {
  }
}
