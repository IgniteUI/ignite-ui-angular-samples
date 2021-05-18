/* eslint-disable @typescript-eslint/naming-convention */
import { Component, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';
import { DATA } from '../../data/customers';

// eslint-disable-next-line no-shadow
enum DragIcon {
    DEFAULT = 'drag_handle',
    ALLOW = 'add'
}

@Component({
    selector: 'app-grid-row-drag-to-grid-sample',
    styleUrls: ['./grid-row-drag-to-grid.component.css'],
    templateUrl: 'grid-row-drag-to-grid.component.html'
})

export class GridDragToGridSampleComponent {
    @ViewChild('sourceGrid', { read: IgxGridComponent, static: true }) public sourceGrid: IgxGridComponent;
    @ViewChild('targetGrid', { read: IgxGridComponent, static: true }) public targetGrid: IgxGridComponent;
    public data1: any[];
    public data2: any[];

    constructor() {
        this.data1 = DATA;
        this.data2 = [];
    }

    public onRowDragEnd(args) {
        args.animation = true;
    }

    public onDropAllowed(args) {
        this.targetGrid.addRow(args.dragData.rowData);
        this.sourceGrid.deleteRow(args.dragData.rowID);
    }

    public onEnterAllowed(args) {
        this.changeGhostIcon(args.drag.ghostElement, DragIcon.ALLOW);
    }

    public onLeaveAllowed(args) {
        this.changeGhostIcon(args.drag.ghostElement, DragIcon.DEFAULT);
    }

    private changeGhostIcon(ghost, icon: string) {
        if (ghost) {
            const currentIcon = ghost.querySelector('.igx-grid__drag-indicator > igx-icon');
            if (currentIcon) {
                currentIcon.innerText = icon;
            }
        }
    }
}
