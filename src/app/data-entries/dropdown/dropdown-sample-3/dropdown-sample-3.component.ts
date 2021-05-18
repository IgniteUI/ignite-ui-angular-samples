import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-dropdown-sample-3',
    styleUrls: ['./dropdown-sample-3.component.css'],
    templateUrl: './dropdown-sample-3.component.html'
})
export class DropDownSample3Component {

    public items: any[] = [
        { field: 'European Union', code: 'EU', header: true },
        { field: 'Germany', code: 'DE' },
        { field: 'Bulgaria', code: 'BG', selected: true },
        { field: 'France', code: 'FR', disabled: true },
        { field: 'North America', code: 'NA', header: true },
        { field: 'Canada', code: 'CA' },
        { field: 'United States', code: 'US' },
        { field: 'Mexico', code: 'MX' }
    ];
}
