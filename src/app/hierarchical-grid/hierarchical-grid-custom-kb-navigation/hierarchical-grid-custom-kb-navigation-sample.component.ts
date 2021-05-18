import { Component, OnInit, ViewChild } from '@angular/core';
import {
    IGridCreatedEventArgs, IGridKeydownEventArgs,
    IgxGridCellComponent, IgxHierarchicalGridComponent
} from 'igniteui-angular';
import { SINGERS } from '../data';

@Component({
    selector: 'app-hierarchical-grid-custom-kb-navigation-sample',
    styleUrls: ['./hierarchical-grid-custom-kb-navigation-sample.component.css'],
    templateUrl: 'hierarchical-grid-custom-kb-navigation-sample.component.html'
})

export class HGridCustomKBNavigationComponent implements OnInit {
    @ViewChild('grid1', { read: IgxHierarchicalGridComponent, static: true })
    public grid1: IgxHierarchicalGridComponent;

    public data: any[];

    constructor() {
    }
    public ngOnInit(): void {
        this.data = SINGERS;
    }

    public formatter = (a) => a;

    public childGridCreated(event: IGridCreatedEventArgs) {
        const grid = event.grid;
        event.grid.gridKeydown.subscribe((args) => {
            this.customKeydown(args, grid);
        });
    }

    public customKeydown(args: IGridKeydownEventArgs, grid) {
        const target: IgxGridCellComponent = args.target as IgxGridCellComponent;
        const evt: KeyboardEvent = args.event as KeyboardEvent;
        const type = args.targetType;

        if (type === 'dataCell' && target.editMode && evt.key.toLowerCase() === 'tab') {
            // Value validation for number column.
            // This covers both 'tab' and 'shift+tab' key interactions.
            args.event.preventDefault();
            args.cancel = true;
            if (target.column.dataType === 'number' && target.editValue < 0) {
                alert('The value should be less than 0');
                return;
            }
            const cell = evt.shiftKey ?
                grid.getPreviousCell(target.rowIndex, target.visibleColumnIndex, (col) => col.editable) :
                grid.getNextCell(target.rowIndex, target.visibleColumnIndex, (col) => col.editable);

            grid.navigateTo(cell.rowIndex, cell.visibleColumnIndex,
                (obj) => { obj.target.activate(); });
        } else if (type === 'dataCell' && evt.key.toLowerCase() === 'enter') {
            // Perform column based kb navigation with 'enter' key press
            args.cancel = true;
            const nexRowIndex = target.row.expanded ? target.rowIndex + 2 : target.rowIndex + 1;
            grid.navigateTo(nexRowIndex, target.visibleColumnIndex,
                (obj) => { obj.target.activate(); });
        }
    }
}
