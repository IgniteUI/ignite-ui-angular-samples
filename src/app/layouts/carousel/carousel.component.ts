import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  styleUrls: ['./carousel.component.css'],
  templateUrl: './carousel.component.html'
})

export class CarouselComponent {

  public slides = [
      {
        src: 'assets/images/carousel/ignite-ui-angular-indigo-design.png'
      },
      {
        src: 'assets/images/carousel/slider-image-chart.png'
      },
      {
        src: 'assets/images/carousel/ignite-ui-angular-charts.png'
      }
  ];
}
