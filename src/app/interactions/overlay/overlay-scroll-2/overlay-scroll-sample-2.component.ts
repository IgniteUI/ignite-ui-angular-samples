import { Component, ElementRef, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
    AbsoluteScrollStrategy,
    BlockScrollStrategy,
    CloseScrollStrategy,
    ConnectedPositioningStrategy,
    IgxOverlayService,
    NoOpScrollStrategy
} from 'igniteui-angular';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MyDynamicCardComponent } from '../overlay-dynamic-card/overlay-dynamic-card.component';
@Component({
    selector: 'app-overlay-sample',
    styleUrls: ['./overlay-scroll-sample-2.component.css'],
    templateUrl: './overlay-scroll-sample-2.component.html',
    providers: [IgxOverlayService]
})
export class OverlayScrollSample2Component implements OnInit, OnDestroy {
    @ViewChild('scrollDemo', { static: true })
    public scrollDemo: ElementRef;

    @ViewChild(MyDynamicCardComponent, { static: true })
    public overlayDemo: MyDynamicCardComponent;

    @ViewChild('mainContainer', { static: true })
    public mainContainer: ElementRef;

    public previewHidden = false;
    private destroy$ = new Subject<boolean>();
    private _overlayId: string;
    private _target: HTMLElement;

    constructor(
        @Inject(IgxOverlayService) public overlay: IgxOverlayService) {
            this.overlay.onOpening
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => this.previewHidden = true);

            this.overlay
                .onClosed
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => this.previewHidden = false);
        }

    public ngOnInit(): void {
        (this.mainContainer.nativeElement as HTMLElement).style.height = '450px';
        this.overlay.onOpening.subscribe(() => {
            this.previewHidden = true;
        });
        this.overlay.onClosing.subscribe(() => {
            this.previewHidden = false;
        });
    }

    public onClickScrollStrategy(strategy: string) {
        let scrollStrategy;
        const positionStrategy = new ConnectedPositioningStrategy();
        switch (strategy) {
            case ('absolute'):
                scrollStrategy = new AbsoluteScrollStrategy();
                this._target = this.scrollDemo.nativeElement.children[0];
                break;
            case ('block'):
                scrollStrategy = new BlockScrollStrategy();
                this._target = this.scrollDemo.nativeElement.children[1];
                break;
            case ('close'):
                scrollStrategy = new CloseScrollStrategy(this.mainContainer.nativeElement);
                this._target = this.scrollDemo.nativeElement.children[2];
                break;
            default:
                scrollStrategy = new NoOpScrollStrategy();
                this._target = this.scrollDemo.nativeElement.children[3];
        }
        if (this._overlayId) {
            this.overlay.detach(this._overlayId);
            delete this._overlayId;
        }
        this._overlayId = this.overlay.attach(MyDynamicCardComponent, {
            target: this._target,
            positionStrategy,
            scrollStrategy,
            modal: false,
            closeOnOutsideClick: true
        });
        this.overlay.show(this._overlayId);
    }

    public ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.complete();
        if (this._overlayId) {
            this.overlay.detach(this._overlayId);
            delete this._overlayId;
        }
    }
}
