import { Component, OnInit, ViewChild } from '@angular/core';
import {
    AbsoluteScrollStrategy, ConnectedPositioningStrategy,
    HorizontalAlignment, IgxSelectComponent, OverlaySettings,
    PositionSettings, scaleInTop, scaleOutBottom, VerticalAlignment
} from 'igniteui-angular';

@Component({
    selector: 'app-select-sample-4',
    styleUrls: ['select-sample-4.component.css'],
    templateUrl: 'select-sample-4.component.html'
})
export class SelectSample4Component implements OnInit {
    @ViewChild(IgxSelectComponent, { static: true })
    public igxSelect: IgxSelectComponent;
    public items: string[] = ['Orange', 'Apple', 'Banana'];
    public customOverlaySettings: OverlaySettings;

    public ngOnInit(): void {
        const positionSettings: PositionSettings = {
            closeAnimation: scaleOutBottom,
            horizontalDirection: HorizontalAlignment.Right,
            horizontalStartPoint: HorizontalAlignment.Left,
            openAnimation: scaleInTop,
            verticalDirection: VerticalAlignment.Bottom,
            verticalStartPoint: VerticalAlignment.Bottom
        };
        this.customOverlaySettings = {
            target: this.igxSelect.inputGroup.element.nativeElement,
            positionStrategy: new ConnectedPositioningStrategy(
                positionSettings
            ),
            scrollStrategy: new AbsoluteScrollStrategy()
        };
    }
}
