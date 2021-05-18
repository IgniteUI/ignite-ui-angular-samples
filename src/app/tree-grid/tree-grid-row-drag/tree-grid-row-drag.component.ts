/* eslint-disable @typescript-eslint/naming-convention */
import { Component, ViewChild } from '@angular/core';
import { IDropDroppedEventArgs, IgxTreeGridComponent, RowType } from 'igniteui-angular';
import { FULL_EMPLOYEE_DATA } from '../data/employees';

// eslint-disable-next-line no-shadow
enum DragIcon {
    DEFAULT = 'drag_handle',
    ALLOW = 'remove'
}

@Component({
    selector: 'app-tree-grid-row-drag',
    styleUrls: ['tree-grid-row-drag.component.css'],
    templateUrl: 'tree-grid-row-drag.component.html'
})
export class TreeGridRowDragComponent {
    @ViewChild(IgxTreeGridComponent, { read: IgxTreeGridComponent, static: true })
    public treeGrid: IgxTreeGridComponent;

    public localData = [];
    constructor() {
        this.localData = FULL_EMPLOYEE_DATA();
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
