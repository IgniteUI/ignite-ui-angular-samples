/* eslint-disable @typescript-eslint/naming-convention */
import { Component, ViewChild } from '@angular/core';
import { IDropDroppedEventArgs, IgxHierarchicalGridComponent, RowType } from 'igniteui-angular';
import { createData, IDrive } from '../../data/files.data';

// eslint-disable-next-line no-shadow
enum DragIcon {
    DEFAULT = 'drag_indicator',
    ALLOW = 'remove'
}

@Component({
    selector: 'app-hierarchical-row-drag-base',
    styleUrls: ['./hierarchical-row-drag-base.component.css'],
    templateUrl: 'hierarchical-row-drag-base.component.html'
})

export class HGridRowDragBaseComponent {
    @ViewChild(IgxHierarchicalGridComponent, { read: IgxHierarchicalGridComponent, static: true })
    public hGrid: IgxHierarchicalGridComponent;
    public localData: IDrive[] = [];
    constructor() {
        this.localData = createData(3, 12, 8);
    }

    public onRowDragEnd(args) {
        args.animation = true;
    }

    public onDropAllowed(args: IDropDroppedEventArgs) {
        const draggedRow: RowType = args.dragData;
        draggedRow.delete();
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
