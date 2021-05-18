import { Component, OnInit } from '@angular/core';
import { IgxSliderType } from 'igniteui-angular';

@Component({
  selector: 'app-slider-sample-5',
  styleUrls: ['./slider-sample-5.component.css'],
  templateUrl: './slider-sample-5.component.html'
})
export class SliderSample5Component implements OnInit {
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
