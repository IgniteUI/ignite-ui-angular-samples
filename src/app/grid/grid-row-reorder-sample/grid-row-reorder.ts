import { Component, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';
import { DATA } from '../../data/customers';

@Component({
    selector: 'app-grid-row-reorder-sample',
    styleUrls: ['grid-row-reorder.css'],
    templateUrl: 'grid-row-reorder.html'
})
export class GridRowReorderComponent {
    @ViewChild('grid', { read: IgxGridComponent, static : true })
    public grid: IgxGridComponent;
    public data: any[];

    constructor() {
        this.data = DATA;
    }

    public onDropAllowed(args) {
        const event = args.originalEvent;
        const currRowIndex = this.getCurrentRowIndex(this.grid.rowList.toArray(),
            { x: event.clientX, y: event.clientY });
        if (currRowIndex === -1) { return; }
        // remove the row that was dragged and place it onto its new location
        this.grid.deleteRow(args.dragData.key);
        this.data.splice(currRowIndex, 0, args.dragData.data);
    }

    private getCurrentRowIndex(rowList, cursorPosition) {
        for (const row of rowList) {
            const rowRect = row.nativeElement.getBoundingClientRect();
            if (cursorPosition.y > rowRect.top + window.scrollY && cursorPosition.y < rowRect.bottom + window.scrollY &&
                cursorPosition.x > rowRect.left + window.scrollX && cursorPosition.x < rowRect.right + window.scrollX) {
                // return the index of the targeted row
                return this.data.indexOf(this.data.find((r) => r.ID === row.rowID));
            }
        }

        return -1;
    }
}
