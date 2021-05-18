import { Component, ElementRef, ViewChild } from '@angular/core';

import {
    ConnectedPositioningStrategy,
    HorizontalAlignment,
    IgxToggleDirective,
    VerticalAlignment,
    OverlaySettings
} from 'igniteui-angular';

@Component({
  selector: 'app-toggle',
  styleUrls: ['./toggle-samples.css'],
  templateUrl: './toggle.component.html'
})
export class ToggleComponent {
    @ViewChild(IgxToggleDirective, { static: true }) public igxToggle: IgxToggleDirective;
    @ViewChild('button', { static: true }) public igxButton: ElementRef;

    public _positionSettings = {
        horizontalStartPoint: HorizontalAlignment.Left,
        verticalStartPoint: VerticalAlignment.Bottom
    };

    public _overlaySettings: OverlaySettings = {
        closeOnOutsideClick: false,
        modal: false,
        closeOnEscape: true,
        positionStrategy: new ConnectedPositioningStrategy(this._positionSettings)
    };

    public toggle() {
        this._overlaySettings.target = this.igxButton.nativeElement;
        this.igxToggle.toggle(this._overlaySettings);
    }
}
