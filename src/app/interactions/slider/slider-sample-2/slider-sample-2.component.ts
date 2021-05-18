import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-sample-2',
  styleUrls: ['./slider-sample-2.component.css'],
  templateUrl: './slider-sample-2.component.html'
})
export class SliderSample2Component implements OnInit {
  public volume = 20;
  public alert = '';
  constructor() { }

  public ngOnInit() {
      if (this.volume <= 10) {
          this.alert = 'min value';
      } else if (this.volume >= 90) {
          this.alert = 'max value';
      }
  }
}
