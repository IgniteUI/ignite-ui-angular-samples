import { Component } from '@angular/core';
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-dropdown-sample-1',
    styleUrls: ['./dropdown-sample-1.component.css'],
    templateUrl: './dropdown-sample-1.component.html'
})
export class DropDownSample1Component {
    public items: { field: string }[] = [
        { field: 'Option 1' },
        { field: 'Option 2' },
        { field: 'Option 3' }
    ];
}
