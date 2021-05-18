import { Component, OnInit, ViewChild} from '@angular/core';
import { DefaultSortingStrategy, IgxGridComponent, SortingDirection} from 'igniteui-angular';
import { DATA } from '../../data/nwindData';

@Component({
    selector: 'app-grid-contextmenu-sample',
    styleUrls: ['./grid-contextmenu-sample.component.css'],
    templateUrl: './grid-contextmenu-sample.component.html'

})

export class GridContextmenuSampleComponent implements OnInit {
    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;
    public data: any[];

    public contextmenu = false;
    public contextmenuX = 0;
    public contextmenuY = 0;
    public clickedCell = null;
    public copiedData;
    public multiCellSelection: { data: any[]} = { data: []};
    public multiCellArgs;

    constructor() {
    }
    public ngOnInit(): void {
        this.data = DATA;
        this.grid1.sortingExpressions = [
            {
                dir: SortingDirection.Asc, fieldName: 'ProductName',
                ignoreCase: true, strategy: DefaultSortingStrategy.instance()
            }
        ];
    }

    public formatDate(val: Date) {
        return new Intl.DateTimeFormat('en-US').format(val);
    }

    public rightClick(eventArgs: any) {
        eventArgs.event.preventDefault();
        this.multiCellArgs = {};
        if (this.multiCellSelection) {
            const node = eventArgs.cell.selectionNode;
            const isCellWithinRange = this.grid1.getSelectedRanges().some((range) => {
                if (node.column >= range.columnStart &&
                    node.column <= range.columnEnd &&
                    node.row >= range.rowStart &&
                    node.row <= range.rowEnd) {
                    return true;
                }
                return false;
            });
            if (isCellWithinRange) {
                this.multiCellArgs = { data: this.multiCellSelection.data };
            }
        }
        this.contextmenuX = eventArgs.event.clientX;
        this.contextmenuY = eventArgs.event.clientY;
        this.clickedCell = eventArgs.cell;
        this.contextmenu = true;
    }

    public disableContextMenu() {
        if (this.contextmenu) {
            this.multiCellSelection = undefined;
            this.multiCellArgs = undefined;
            this.contextmenu = false;
        }
    }

    public getCells(event) {
        this.multiCellSelection = {
            data: this.grid1.getSelectedData()
        };
    }

    public copy(event) {
        this.copiedData = JSON.stringify(event.data, null, 2);
        if (this.multiCellSelection) {
            this.multiCellSelection = undefined;
            this.multiCellArgs = undefined;
            this.grid1.clearCellSelection();
        }
    }

    public cellSelection(event) {
        this.contextmenu = false;
    }
}
