import { Component, ViewChild } from '@angular/core';
import {
    IDropDroppedEventArgs,
    IgxHierarchicalGridComponent,
    RowType,
    Point
} from 'igniteui-angular';
import { createData, IDrive } from '../../data/files.data';

@Component({
    selector: 'app-hierarchical-grid-row-reorder',
    styleUrls: ['./hierarchical-grid-row-reorder.component.css'],
    templateUrl: 'hierarchical-grid-row-reorder.component.html'
})
export class HGridRowReorderComponent {
    @ViewChild(IgxHierarchicalGridComponent, { read: IgxHierarchicalGridComponent, static: true })
    public hGrid: IgxHierarchicalGridComponent;
    public localData: IDrive[] = [];
    public selectionMode = 'multiple';
    constructor() {
        this.localData = createData(3, 12, 8);
    }

    public rowDragStart(args: any): void {
        const targetRow: RowType = args.dragData;
        // if the row-to-be-dragged is expanded - collapse it
        if (targetRow.expanded) {
            targetRow.expanded = false;
        }
    }

    public rowDrop(args: IDropDroppedEventArgs): void {
        const targetRow = args.dragData;
        const event = args.originalEvent;
        const cursorPosition: Point = { x: event.clientX, y: event.clientY };
        this.moveRow(targetRow, cursorPosition);
    }

    private moveRow(draggedRow: RowType, cursorPosition: Point): void {
        // const parent: IgxHierarchicalGridComponent = (draggedRow as any).grid;
        // const parent = args.drag.ghostContext.grid;
        const parent = this.hGrid;
        const rowIndex: number = this.getTargetRowIndex(parent.rowList.toArray(), cursorPosition);
        if (rowIndex === -1) { return; }
        // delete the dragged row and then insert it at its new position
        const wasSelected = draggedRow.selected;
        draggedRow.delete();
        parent.data.splice(rowIndex, 0, draggedRow.data);
        if (wasSelected) {
            // find the row that has the same ID as the dragged row and select it
            parent.selectRows([parent.rowList.toArray()
                .find((r) => r.rowID === draggedRow.key).rowID], false);
        }
    }

    private getTargetRowIndex(rowListArr: any[], cursorPosition: Point): number {
        const targetElem = this.catchCursorPosOnElem(rowListArr, cursorPosition);
        // get the index of the row that has the same ID as the dragged row
        return rowListArr.indexOf(rowListArr.find((r) => r.rowData.id === targetElem.rowData.id));
    }

    private catchCursorPosOnElem(rowListArr: any[], cursorPosition: Point): any {
        // get the row which the dragged row was dropped on
        for (const row of rowListArr) {
            const rowRect = row.nativeElement.getBoundingClientRect();
            if (cursorPosition.y > rowRect.top + window.scrollY && cursorPosition.y < rowRect.bottom + window.scrollY &&
                cursorPosition.x > rowRect.left + window.scrollX && cursorPosition.x < rowRect.right + window.scrollX) {
                return row;
            } else if (row === rowListArr[rowListArr.length - 1] && cursorPosition.y > rowRect.bottom) {
                return row;
            }
        }
    }
}
