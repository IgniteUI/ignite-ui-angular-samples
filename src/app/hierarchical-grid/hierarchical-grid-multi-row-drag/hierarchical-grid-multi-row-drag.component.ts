import { Component, ViewChild } from '@angular/core';
import { IDropDroppedEventArgs, IgxHierarchicalGridComponent, RowType } from 'igniteui-angular';
import { createData, IDrive } from '../../data/files.data';

@Component({
    selector: 'app-hierarchical-grid-multi-row-drag',
    styleUrls: ['./hierarchical-grid-multi-row-drag.component.css'],
    templateUrl: 'hierarchical-grid-multi-row-drag.component.html'
})

export class HGridMultiRowDragComponent {
    @ViewChild(IgxHierarchicalGridComponent, { read: IgxHierarchicalGridComponent, static: true })
    public hGrid: IgxHierarchicalGridComponent;
    public localData: IDrive[] = [];
    public selectionMode = 'multiple';
    public ids;
    public grid;
    public selected = false;
    public countIcon = 'drag_indicator';
    public dragIcon = 'keyboard_backspace';
    constructor() {
        this.localData = createData(3, 12, 8);
    }

    public onRowDragEnd(args) {
        args.animation = true;
    }

    public handleRowSelectionChange(args) {
        this.ids = args.newSelection;
        this.grid = args.owner;
        this.selected = this.ids.length !== 0;
    }

    public onDropAllowed(args: IDropDroppedEventArgs) {
        if (this.selected === false) {
            const draggedRow: RowType = args.dragData;
            draggedRow.delete();
        } else {
            if (this.grid == null) {
                this.ids.forEach((rowData) => {
                    this.hGrid.deleteRow(rowData);
                });
                this.selected = false;
            } else {
                this.ids.forEach((rowData) => {
                    this.grid.deleteRow(rowData);
                });
                this.selected = false;
            }
        }
    }

    public onRowDragStart(args) {
        if (this.selected === false) {
            this.countIcon = `filter_1`;
        } else {
            const count = this.ids.length;
            this.countIcon = `filter_${count > 9 ? '9_plus' : `${count}`}`;
        }
    }

    public onLeaveAllowed(args) {
        this.onRowDragStart(args);
        this.dragIcon = 'keyboard_backspace';
    }

    public onEnterAllowed(args) {
        this.dragIcon = 'remove';
    }
}
