import { Component } from '@angular/core';
import { IRowSelectionEventArgs } from 'igniteui-angular';
import { DATA } from '../../data/customers';

@Component({
    selector: 'app-grid-conditional-row-selectors',
    styleUrls: ['./grid-conditional-row-selectors-sample.component.css'],
    templateUrl: 'grid-conditional-row-selectors-sample.component.html'
})

export class GridConditionalRowSelectorsComponent {
    public data: any[];
    public disabledCollection: string[] = [];

    constructor() {
        this.data = DATA;
        this.data.filter(dataItem => dataItem.ID.indexOf('A') === -1).map((item) => {
            this.disabledCollection.push(item.ID);
        });
    }

    public isSelectionAllowed(newRowID: string) {
        return this.disabledCollection.indexOf(newRowID) === -1;
    }

    public onRowSelect(event: IRowSelectionEventArgs) {
        if (!event.added.length && event.removed.length) {
            // ignore deselect
            return;
        }
        const originalAddedLength = event.added.length;
        event.added = event.added.filter(x => this.isSelectionAllowed(x));

        // update selection to contain only allowed rows
        event.newSelection = event.newSelection.filter(x => this.isSelectionAllowed(x));

        // cleanup selection if all conditionally selectable rows are already selected
        if (event.added.length === 0
            && !event.newSelection.filter(x => event.oldSelection.indexOf(x) === -1).length
            && originalAddedLength > 1) {
                // all selected from header, deselect instead
                event.newSelection = [];
        }
    }
}
