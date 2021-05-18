import { Component } from '@angular/core';
import { GlobalPositionStrategy, OverlaySettings, scaleInCenter, scaleOutCenter } from 'igniteui-angular';

@Component({
    selector: 'app-combo-overlay',
    templateUrl: 'combo-overlay.component.html',
    styleUrls: ['combo-overlay.component.css']
})
export class ComboOverlayComponent {
    public items = [{ name: 'Option 1' }, { name: 'Option 2' }, { name: 'Option 3' },
    { name: 'Option 4' }, { name: 'Option 5' }, { name: 'Option 6' },
    { name: 'Option 7' }, { name: 'Option 8' }, { name: 'Option 9' }];

    public overlaySettings: OverlaySettings = {
        positionStrategy: new GlobalPositionStrategy({ openAnimation: scaleInCenter, closeAnimation: scaleOutCenter }),
        modal: true,
        closeOnOutsideClick: true
    };
}
