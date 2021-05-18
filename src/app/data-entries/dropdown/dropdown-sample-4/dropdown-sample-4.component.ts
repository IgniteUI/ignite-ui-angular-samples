import { Component, ViewChild } from '@angular/core';
import {
    ConnectedPositioningStrategy,
    IgxDropDownComponent,
    IgxInputGroupComponent
} from 'igniteui-angular';
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-dropdown-sample-4',
    styleUrls: ['./dropdown-sample-4.component.css'],
    templateUrl: './dropdown-sample-4.component.html'
})
export class DropDownSample4Component {
    @ViewChild(IgxDropDownComponent, { static: true }) public igxDropDown: IgxDropDownComponent;
    @ViewChild('inputGroup', { read: IgxInputGroupComponent, static: true }) public inputGroup: IgxInputGroupComponent;

    public items: { field: string }[] = [
        { field: 'Option 1' },
        { field: 'Option 2' },
        { field: 'Option 3' }
    ];

    public openDropDown() {
        if (this.igxDropDown.collapsed) {
            this.igxDropDown.open({
                target: this.inputGroup.element.nativeElement,
                modal: false,
                positionStrategy: new ConnectedPositioningStrategy()
            });
        }
    }
}
