import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxBannerComponent, slideInLeft, slideOutRight } from 'igniteui-angular';

@Component({
    selector: 'app-banner-sample-3',
    styleUrls: ['../banner-samples.css'],
    templateUrl: 'banner-sample-3.component.html'
})

export class BannerSample3Component implements OnInit {
    @ViewChild(IgxBannerComponent, { static: true }) public banner: IgxBannerComponent;
    public contentWidth = '384px';
    public imageUrls = ['assets/images/card/media/the_red_ice_forest.jpg',
        'assets/images/card/media/yosemite.jpg'];
    public animationSettings = {
        closeAnimation: slideOutRight,
        openAnimation: slideInLeft
    };

    public ngOnInit() {
        this.banner.open();
    }
}
