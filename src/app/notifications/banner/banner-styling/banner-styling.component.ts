import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IgxBannerComponent, IgxToastComponent, slideInLeft, slideOutRight } from 'igniteui-angular';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-banner-styling',
    styleUrls: ['banner-styling.component.scss', '../banner-samples.css'],
    templateUrl: 'banner-styling.component.html'
})

export class BannerStylingComponent implements OnInit, OnDestroy {
    @ViewChild(IgxBannerComponent, { static: true }) public banner: IgxBannerComponent;
    @ViewChild(IgxToastComponent, { static: true }) public eventToast: IgxToastComponent;
    public contentWidth = '384px';
    public imageUrls = ['assets/images/card/media/the_red_ice_forest.jpg',
        'assets/images/card/media/yosemite.jpg'];
    public toastPosition: 'middle';
    public animationSettings = {
        closeAnimation: slideOutRight,
        openAnimation: slideInLeft
    };
    public onNetworkStateChange = new Subject();
    private _wifiState = false;

    public get wifiState(): boolean {
        return this._wifiState;
    }
    public set wifiState(v: boolean) {
        this._wifiState = v;
        this.onNetworkStateChange.next();
    }

    public showToast() {
        this.eventToast.close();
        this.toastPosition = 'middle';
        this.eventToast.open(`Wifi is now ${this.wifiState ? 'on' : 'off'}`);
    }

    public ngOnInit() {
        this.banner.open();
        this.onNetworkStateChange.subscribe(() => this.refreshBanner());
    }

    public ngOnDestroy(): void {
        this.onNetworkStateChange.complete();
    }

    public refreshBanner() {
        if (!this.wifiState) {
            this.banner.open();
        } else {
            this.banner.close();
        }
        this.showToast();
    }
}
