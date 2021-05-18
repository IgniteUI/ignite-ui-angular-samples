import { Component } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';
import { DATA } from '../../data/nwindData';
@Component({
    selector: 'app-grid-external-advanced-filtering',
    templateUrl: './grid-external-advanced-filtering.component.html',
    styleUrls: ['./grid-external-advanced-filtering.component.css']
})
export class GridExternalAdvancedFilteringComponent {

    public data: any;

    constructor() {
        this.data = DATA;
    }
}
