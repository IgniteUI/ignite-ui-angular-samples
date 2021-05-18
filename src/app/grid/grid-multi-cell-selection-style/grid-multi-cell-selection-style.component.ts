import { Component } from '@angular/core';
import { IgxColumnComponent } from 'igniteui-angular';
import { DATA } from '../../data/nwindData';

@Component({
    selector: 'app-grid-multi-cell-selection-style-sample',
    styleUrls: ['./grid-multi-cell-selection-style.component.css'],
    templateUrl: './grid-multi-cell-selection-style.component.html'
})
export class GridMultiCellSelectionStyleComponent {

    public sourceData = DATA;

    public initColumn(column: IgxColumnComponent) {
        column.sortable = true;
    }
}
