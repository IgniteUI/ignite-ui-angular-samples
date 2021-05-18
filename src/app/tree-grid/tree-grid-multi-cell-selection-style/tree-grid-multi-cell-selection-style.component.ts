import { Component } from '@angular/core';
import { IgxColumnComponent } from 'igniteui-angular';
import { FOODS_DATA } from '../data/foods';

@Component({
    selector: 'app-tree-grid-multi-cell-selection-style-sample',
    styleUrls: ['./tree-grid-multi-cell-selection-style.component.css'],
    templateUrl: './tree-grid-multi-cell-selection-style.component.html'
})
export class TreeGridMultiCellSelectionStyleComponent {

    public sourceData = FOODS_DATA();

    public initColumn(column: IgxColumnComponent) {
        column.sortable = true;
    }
}
