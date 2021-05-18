import { Component, OnInit } from '@angular/core';
import { IRowSelectionEventArgs } from 'igniteui-angular';
import { generateEmployeeFlatData } from '../data/employees-flat';

@Component({
    selector: 'app-tree-grid-conditional-row-selectors',
    styleUrls: ['./tree-grid-conditional-row-selectors.component.css'],
    templateUrl: 'tree-grid-conditional-row-selectors.component.html'
})

export class TreeGridConditionalRowSelectorsSampleComponent implements OnInit {
    public employees: any[];
    public disabledCollection: string[] = [];

    public ngOnInit(): void {
        this.employees = generateEmployeeFlatData();
        this.disabledCollection = this.employees.filter(empl => empl.OnPTO === true).map(empl => empl.ID);
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
