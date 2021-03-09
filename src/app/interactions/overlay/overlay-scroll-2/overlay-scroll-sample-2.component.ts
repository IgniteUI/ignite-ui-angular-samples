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
import { filter, takeUntil } from 'rxjs/operators';
import { MyDynamicCardComponent } from '../overlay-dynamic-card/overlay-dynamic-card.component';
@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'overlay-sample',
    styleUrls: ['./overlay-scroll-sample-2.component.scss'],
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
        @Inject(IgxOverlayService) public overlay: IgxOverlayService
    ) {
        //  overlay service deletes the id when onClosed is called. We should clear our id
        //  also in same event
        this.overlay
            .onClosed
            .pipe(
                filter((x) => x.id === this._overlayId),
                takeUntil(this.destroy$))
            .subscribe(() => delete this._overlayId);
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
        this.overlay.show(this.overlayId, {
            target: this._target,
            positionStrategy,
            scrollStrategy,
            modal: false,
            closeOnOutsideClick: true
        });
    }

    private get overlayId(): string {
        if (!this._overlayId) {
            this._overlayId = this.overlay.attach(MyDynamicCardComponent);
        }
        return this._overlayId;
    }

    public ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}
