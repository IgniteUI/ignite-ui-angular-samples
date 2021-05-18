import { Component, ViewEncapsulation } from '@angular/core';
import { DefaultSortingStrategy, SortingDirection } from 'igniteui-angular';
import { DATA } from '../../data/customers';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-grid-multi-row-layout-styling-sample',
    styleUrls: ['./grid-multi-row-layout-styling.component.css'],
    templateUrl: './grid-multi-row-layout-styling.component.html'
})
export class GridMultiRowLayoutStylingComponent {

    public sourceData = DATA;
    public group = [
        {
            dir: SortingDirection.Asc,
            fieldName: 'Country',
            ignoreCase: false,
            strategy: DefaultSortingStrategy.instance()
        }
    ];
    public sort = [
        {
            dir: SortingDirection.Desc,
            fieldName: 'CompanyName',
            ignoreCase: true
        }
    ];
}
