import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxCarouselComponent, IgxListComponent, IListItemClickEventArgs, ISlideEventArgs } from 'igniteui-angular';

@Component({
  selector: 'app-carousel',
  styleUrls: ['./carousel-no-navigation-sample.component.css'],
  templateUrl: './carousel-no-navigation-sample.component.html'
})
export class CarouselNoNavigationSampleComponent implements OnInit {
  @ViewChild(IgxCarouselComponent, { static: true })
  public carousel: IgxCarouselComponent;

  @ViewChild(IgxListComponent, {static: true})
  public list: IgxListComponent;

  public slides: any[] = [];
  public currentIndex = 0;
  constructor() { }

  public ngOnInit() {
    this.addSlides();

    this.list.itemClicked.subscribe((args: IListItemClickEventArgs) => {
        this.currentIndex = args.item.index;
        this.carousel.select(this.carousel.get(this.currentIndex));
    });

    this.carousel.onSlideChanged.subscribe((args: ISlideEventArgs) => {
        this.currentIndex = args.slide.index;
    });
  }

  public slideStyle(image: string) {
    return  {
        background: `url(${image})`,
        backgroundSize: 'cover'
    };
  }

  public addSlides() {
    this.slides.push(
      {
        title: 'Wonderful Coast',
        subTitle: 'May to October',
        image: 'assets/images/carousel/WonderfulCoast.png',
        thumb: 'assets/images/carousel/WonderfulCoastThumb.png',
        price: 1299,
        description: 'Delicious seafood and wines along the coasts of beautiful Italy'
      },
      {
        title: 'Cultural Dip',
        subTitle: 'July and August',
        image: 'assets/images/carousel/CulturalDip.png',
        thumb: 'assets/images/carousel/CulturalDipThumb.png',
        price: 1949,
        description: 'Immerse yourself in the history and culture of the far East'
      },
      {
        title: 'Golden Beaches',
        subTitle: 'October to March',
        image: 'assets/images/carousel/GoldenBeaches.png',
        thumb: 'assets/images/carousel/GoldenBeachesThumb.png',
        price: 2799,
        description: 'Endless beachfronts, crystal blue water and the finest grains of sand'
      },
      { title: 'Island Of History',
        subTitle: 'May to October',
        image: 'assets/images/carousel/IslandOfHistory.png',
        thumb: 'assets/images/carousel/IslandOfHistoryThumb.png',
        price: 1419,
        description: 'Discover this hidden gem of the Mediterranean rich of antiquity'
      },
      {
        title: 'Amazing Bridge',
        subTitle: 'Spring and Autumn',
        image: 'assets/images/carousel/AmazingBridge.png',
        thumb: 'assets/images/carousel/AmazingBridgeThumb.png',
        price: 1049,
        description: 'Walk along one of the engineering wonders of the twentieth century'
      }
    );
  }
}
