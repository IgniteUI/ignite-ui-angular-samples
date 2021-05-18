import { Component, OnInit, ViewChild } from '@angular/core';
import { IGridKeydownEventArgs, IgxGridCellComponent, IgxGridComponent } from 'igniteui-angular';
import { DATA } from '../../data/nwindData';

@Component({
    selector: 'app-grid-custom-kb-navigation-sample',
    styleUrls: ['./grid-custom-kb-navigation-sample.component.css'],
    templateUrl: 'grid-custom-kb-navigation-sample.component.html'
})

export class GridCustomKBNavigationComponent implements OnInit {
    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;
    public selectionMode = 'multiple';
    public data: any[];

    constructor() {
    }
    public ngOnInit(): void {
        this.data = DATA;
    }

    public customKeydown(args: IGridKeydownEventArgs) {
        const target: IgxGridCellComponent = args.target as IgxGridCellComponent;
        const evt: KeyboardEvent = args.event as KeyboardEvent;
        const type = args.targetType;

        if (type === 'dataCell' && target.editMode && evt.key.toLowerCase() === 'tab') {
            // Value validation for number column.
            // This covers both 'tab' and 'shift+tab' key interactions.
            args.event.preventDefault();
            args.cancel = true;
            if (target.column.dataType === 'number' && target.editValue < 10) {
                alert('The value should be bigger than 10');
                return;
            }
            const cell = evt.shiftKey ?
                this.grid1.getPreviousCell(target.rowIndex, target.visibleColumnIndex, (col) => col.editable) :
                this.grid1.getNextCell(target.rowIndex, target.visibleColumnIndex, (col) => col.editable);

            this.grid1.navigateTo(cell.rowIndex, cell.visibleColumnIndex,
                (obj) => { obj.target.activate(); });
        } else if (type === 'dataCell' && evt.key.toLowerCase() === 'enter') {
            // Perform column based kb navigation with 'enter' key press
            args.cancel = true;
            this.grid1.navigateTo(target.rowIndex + 1, target.visibleColumnIndex, (obj) => {
                obj.target.activate();
            });
        }
    }
}
