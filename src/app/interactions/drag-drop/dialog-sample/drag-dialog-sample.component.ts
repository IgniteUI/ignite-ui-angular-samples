import { Component, ElementRef, ViewChild } from '@angular/core';
import {
    GlobalPositionStrategy,
    IgxDragDirective,
    IgxDragLocation,
    IgxToggleDirective,
    NoOpScrollStrategy,
    OverlaySettings
} from 'igniteui-angular';

@Component({
    selector: 'app-drag-dialog-sample',
    templateUrl: './drag-dialog-sample.component.html',
    styleUrls: ['./drag-dialog-sample.component.css']
})
export class DragDialogSampleComponent {
    @ViewChild('toggleForm', { static: true })
    public toggleForm: IgxToggleDirective;

    @ViewChild('toggleForm', { read: IgxDragDirective, static: true })
    public toggleFormDrag: IgxDragDirective;

    @ViewChild('dialogButton', { static: true })
    public buttonElement: ElementRef;
    public toggleStartPageX;
    public toggleStartPageY;


    private overlaySettings: OverlaySettings = {
        positionStrategy: new GlobalPositionStrategy(),
        scrollStrategy: new NoOpScrollStrategy(),
        modal: true,
        closeOnOutsideClick: true
    };

    constructor() { }

    public openDialog() {
        this.toggleForm.open(this.overlaySettings);
        if (!this.toggleStartPageX && !this.toggleStartPageY) {
            this.toggleStartPageX = this.toggleFormDrag.pageX;
            this.toggleStartPageY = this.toggleFormDrag.pageY;
        }
        this.toggleFormDrag.setLocation(new IgxDragLocation(this.toggleStartPageX, this.toggleStartPageY));
    }

    public onDragMove(e) {
        const deltaX = e.nextPageX - e.pageX;
        const deltaY = e.nextPageY - e.pageY;
        e.cancel = true;
        this.toggleForm.setOffset(deltaX, deltaY);
    }
}
