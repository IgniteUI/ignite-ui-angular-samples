import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IgxInputDirective, IgxInputState, IgxSliderComponent, IgxSliderType } from 'igniteui-angular';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-slider-sample-1',
    styleUrls: ['./slider-sample-1.component.css'],
    templateUrl: './slider-sample-1.component.html'
})
export class SliderSample1Component implements OnInit, OnDestroy {

    @ViewChild(IgxSliderComponent, { static: true })
    public slider: IgxSliderComponent;

    @ViewChild('lowerInput', { read: IgxInputDirective, static: true })
    public lowerInput: IgxInputDirective;

    @ViewChild('upperInput', { read: IgxInputDirective, static: true })
    public upperInput: IgxInputDirective;

    public sliderType = IgxSliderType;
    public priceRange: PriceRange = new PriceRange(200, 800);
    public $destroyer = new Subject<boolean>();

    constructor() { }

    public ngOnInit() {
        fromEvent(this.lowerInput.nativeElement, 'input').pipe(takeUntil(this.$destroyer))
            .subscribe((event) => {
                this.validate(this.lowerInput, event);
            });

        fromEvent(this.lowerInput.nativeElement, 'blur').pipe(takeUntil(this.$destroyer))
            .subscribe((event) => {
                this.validate(this.lowerInput, event);
            });

        fromEvent(this.upperInput.nativeElement, 'input').pipe(takeUntil(this.$destroyer))
            .subscribe((event) => {
                this.validate(this.upperInput, event);
            });

        fromEvent(this.upperInput.nativeElement, 'blur').pipe(takeUntil(this.$destroyer))
            .subscribe((event) => {
                this.validate(this.upperInput, event);
            });
    }

    public ngOnDestroy() {
        this.$destroyer.next(true);
    }

    public validate(input: IgxInputDirective, event) {
        const val = parseInt(input.value, 10);
        if (isNaN(val) || val > this.slider.upperBound || val < this.slider.lowerBound) {
            input.valid = IgxInputState.INVALID;
        } else {
            input.valid = IgxInputState.VALID;
            this.updatePriceRange(val, event.currentTarget);
        }
    }

    public updatePriceRange(value, event) {
        const prevPriceRange = this.priceRange;
        switch (event.id) {
            case 'lowerInput': {
                this.priceRange = new PriceRange(value, prevPriceRange.upper);
                break;
            }
            case 'upperInput': {
                this.priceRange = new PriceRange(prevPriceRange.lower, value);
                break;
            }
        }
    }
}
class PriceRange {
    constructor(
        public lower: number,
        public upper: number
    ) {
    }
}
