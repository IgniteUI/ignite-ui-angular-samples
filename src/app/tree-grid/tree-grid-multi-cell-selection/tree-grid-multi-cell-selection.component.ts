import { Component, ViewEncapsulation } from '@angular/core';
import { IgxColumnComponent, IgxToastComponent, IgxTreeGridComponent } from 'igniteui-angular';
import { FOODS_DATA } from '../data/foods';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-tree-grid-multi-cell-selection-sample',
    styleUrls: ['./tree-grid-multi-cell-selection.component.css'],
    templateUrl: './tree-grid-multi-cell-selection.component.html'
})
export class TreeGridMultiCellSelectionComponent {

    public sourceData = FOODS_DATA();
    public targetData = [];

    public transferData(source: IgxTreeGridComponent, target: IgxTreeGridComponent,
                        notification: IgxToastComponent) {
        target.shouldGenerate = true;
        target.clearCellSelection();
        this.targetData = source.getSelectedData();
        notification.position = 'middle';
        notification.displayTime = 1000;
        notification.open(`Transfered ${this.targetData.length} rows`);
    }

    public initColumn(column: IgxColumnComponent) {
        column.sortable = true;
    }

    public transferExpressions(source: IgxTreeGridComponent, target: IgxTreeGridComponent, type: string) {
        target.sortingExpressions = source.sortingExpressions;
    }
}
