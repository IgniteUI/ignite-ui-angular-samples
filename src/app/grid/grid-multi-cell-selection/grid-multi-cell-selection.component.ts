import { Component, ViewEncapsulation } from '@angular/core';
import { IgxColumnComponent, IgxGridComponent, IgxToastComponent } from 'igniteui-angular';
import { DATA } from '../../data/nwindData';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-grid-multi-cell-selection-sample',
    styleUrls: ['./grid-multi-cell-selection.component.css'],
    templateUrl: './grid-multi-cell-selection.component.html'
})
export class GridMultiCellSelectionComponent {

    public sourceData = DATA;
    public targetData = [];

    public transferData(source: IgxGridComponent, target: IgxGridComponent,
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

    public transferExpressions(source: IgxGridComponent, target: IgxGridComponent, type: string) {
        if (type === 'filter') {
            target.filteringExpressionsTree = source.filteringExpressionsTree;
        } else {
            target.sortingExpressions = source.sortingExpressions;
        }
    }
}
