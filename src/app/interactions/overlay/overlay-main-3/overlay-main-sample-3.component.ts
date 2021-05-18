import { Component, ElementRef, Inject, OnDestroy, ViewChild } from '@angular/core';
import { ConnectedPositioningStrategy, IgxOverlayService } from 'igniteui-angular';
// tslint:disable:object-literal-sort-keys
@Component({
    selector: 'app-overlay-sample',
    templateUrl: `overlay-main-sample-3.component.html`,
    styleUrls: ['overlay-main-sample-3.component.css']
})
export class OverlaySampleMain3Component implements OnDestroy {
    @ViewChild('card', { static: true, read: ElementRef })
    private cardSample: ElementRef;

    @ViewChild('buttonElement', { static: true })
    private buttonElement: ElementRef;

    private _overlayId;

    constructor(@Inject(IgxOverlayService) private overlayService: IgxOverlayService) { }

    public showOverlay() {
        if (!this._overlayId) {
            this._overlayId = this.overlayService.attach(this.cardSample, {
                target: this.buttonElement.nativeElement,
                positionStrategy: new ConnectedPositioningStrategy()
            });
        }
        this.overlayService.show(this._overlayId);
    }

    public ngOnDestroy(): void {
        if (this._overlayId) {
            this.overlayService.detach(this._overlayId);
            delete this._overlayId;
        }
    }

}
