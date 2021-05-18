import { Component, ElementRef } from '@angular/core';
import { IgxOverlayService } from 'igniteui-angular';

@Component({
    selector: 'app-overlay-styling',
    styleUrls: ['overlay-styling.component.css'],
    templateUrl: 'overlay-styling.component.html'
})
export class OverlayStylingComponent {
    public items = [{
            name: 'Option 1',
            id: 0
        }, {
            name: 'Option 2',
            id: 1
        }, {
            name: 'Option 3',
            id: 2
        }, {
            name: 'Option 4',
            id: 3
        }, {
            name: 'Option 5',
            id: 4
        }, {
            name: 'Option 6',
            id: 5
        }
    ];

    constructor(public element: ElementRef, private overlayService: IgxOverlayService) {
    }
}
