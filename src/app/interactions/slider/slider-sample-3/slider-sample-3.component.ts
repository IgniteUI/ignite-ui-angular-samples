import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IgxInputDirective, IgxInputState, IgxSliderComponent } from 'igniteui-angular';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-slider-sample-3',
    styleUrls: ['./slider-sample-3.component.css'],
    templateUrl: './slider-sample-3.component.html'
})
export class SliderSample3Component implements OnInit, OnDestroy {
    @ViewChild(IgxInputDirective, { static: true })
    public input: IgxInputDirective;

    @ViewChild(IgxSliderComponent, { static: true })
    public slider: IgxSliderComponent;

    public task: Task = new Task(10);

    public $destroyer = new Subject<boolean>();

    constructor() { }

    public updateTask() {
        const val = parseInt(this.input.value, 10);
        if (isNaN(val) || val < this.slider.lowerBound || val > this.slider.upperBound || val % 10 > 0) {
            this.input.valid = IgxInputState.INVALID;
        } else {
            this.input.valid = IgxInputState.VALID;
            this.task.completion = val;
        }
    }

    public ngOnInit() {
        fromEvent(this.input.nativeElement, 'input').pipe(takeUntil(this.$destroyer))
            .subscribe(() => {
                this.updateTask();
            });

        fromEvent(this.input.nativeElement, 'blur').pipe(takeUntil(this.$destroyer))
            .subscribe(() => {
                this.updateTask();
            });
    }

    public ngOnDestroy() {
        this.$destroyer.next(true);
    }
}

class Task {
    constructor(
        public completion: number
    ) {
    }
}
