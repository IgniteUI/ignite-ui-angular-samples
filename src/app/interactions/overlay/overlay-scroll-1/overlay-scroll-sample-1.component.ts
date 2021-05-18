import { Component, ElementRef, Inject, OnDestroy, ViewChild } from '@angular/core';
import {
    AbsoluteScrollStrategy,
    AutoPositionStrategy,
    ConnectedPositioningStrategy,
    ElasticPositionStrategy,
    GlobalPositionStrategy,
    HorizontalAlignment,
    IgxOverlayService,
    OverlaySettings,
    PositionSettings,
    VerticalAlignment
} from 'igniteui-angular';
// tslint:disable:object-literal-sort-keys
@Component({
    selector: 'app-overlay-sample',
    styleUrls: ['./overlay-scroll-sample-1.component.css'],
    templateUrl: './overlay-scroll-sample-1.component.html',
    providers: [IgxOverlayService]
})
export class OverlayScrollSample1Component implements OnDestroy {
    @ViewChild('modalDemo', { static: true })
    public modalDemo: ElementRef;

    @ViewChild('overlayDemo', { static: true })
    public overlayDemo: ElementRef;

    @ViewChild('mainContainer', { static: true })
    public mainContainer: ElementRef;

    public modalValue = true;
    private _defaultPositionSettings: PositionSettings = {
        horizontalDirection: HorizontalAlignment.Center,
        horizontalStartPoint: HorizontalAlignment.Center,
        verticalDirection: VerticalAlignment.Middle,
        verticalStartPoint: VerticalAlignment.Middle
    };

    private _overlaySettings: OverlaySettings = {
        positionStrategy: new GlobalPositionStrategy(),
        scrollStrategy: new AbsoluteScrollStrategy(),
        modal: true,
        closeOnOutsideClick: true
    };

    private _overlayId: string;

    constructor(
        @Inject(IgxOverlayService) public overlay: IgxOverlayService) { }

    public onClickModal(event: Event, strategy: string) {
        event.stopPropagation();
        const positionSettings = Object.assign(Object.assign({}, this._defaultPositionSettings), {
            horizontalDirection: HorizontalAlignment.Right,
            horizontalStartPoint: HorizontalAlignment.Right,
            verticalDirection: VerticalAlignment.Bottom,
            verticalStartPoint: VerticalAlignment.Bottom
        });
        let positionStrategy;
        switch (strategy) {
            case ('auto'):
                positionStrategy = new AutoPositionStrategy(positionSettings);
                break;
            case ('elastic'):
                positionStrategy = new ElasticPositionStrategy(positionSettings);
                break;
            case ('connected'):
                positionStrategy = new ConnectedPositioningStrategy(positionSettings);
                break;
            default:
                positionStrategy = new GlobalPositionStrategy(Object.assign(positionSettings, {
                    horizontalDirection: HorizontalAlignment.Center,
                    verticalDirection: VerticalAlignment.Middle
                }));
        }
        const showSettings = Object.assign(Object.assign({}, this._overlaySettings), {
            target: this.modalDemo.nativeElement,
            modal: this.modalValue,
            positionStrategy
        });
        if (this._overlayId) {
            this.overlay.detach(this._overlayId);
            delete this._overlayId;
        }
        this._overlayId = this.overlay.attach(this.overlayDemo, showSettings);
        this.overlay.show(this._overlayId, showSettings);
    }

    public ngOnDestroy(): void {
        if (this._overlayId) {
            this.overlay.detach(this._overlayId);
            delete this._overlayId;
        }
    }
}
