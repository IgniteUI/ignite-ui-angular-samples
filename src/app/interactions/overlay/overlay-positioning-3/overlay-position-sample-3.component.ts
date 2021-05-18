import { Component, ElementRef, Inject, OnDestroy, ViewChild } from '@angular/core';
import { AutoPositionStrategy, IgxOverlayService } from 'igniteui-angular';
import { MyDynamicCardComponent } from '../overlay-dynamic-card/overlay-dynamic-card.component';
@Component({
    selector: 'app-overlay-sample',
    styleUrls: ['./overlay-position-sample-3.component.css'],
    templateUrl: './overlay-position-sample-3.component.html',
    providers: [IgxOverlayService]
})
export class OverlayPositionSample3Component implements OnDestroy {
    @ViewChild('buttonElement', { static: true })
    private buttonElement: ElementRef;
    private _overlayId: string;

    constructor(@Inject(IgxOverlayService) public overlayService: IgxOverlayService) { }

    public showOverlay() {
        if (!this._overlayId) {
            const myPositionStrategy = new AutoPositionStrategy();
            this._overlayId = this.overlayService.attach(
                MyDynamicCardComponent, {
                    target: this.buttonElement.nativeElement,
                    positionStrategy: myPositionStrategy
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
