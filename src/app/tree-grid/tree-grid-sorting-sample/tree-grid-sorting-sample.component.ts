import { Component, OnInit, ViewChild } from '@angular/core';
import { DefaultSortingStrategy, IgxTreeGridComponent, SortingDirection } from 'igniteui-angular';
import { FOODS_DATA } from '../data/foods';

@Component({
    selector: 'app-tree-grid-sorting-sample',
    styleUrls: ['./tree-grid-sorting-sample.component.css'],
    templateUrl: 'tree-grid-sorting-sample.component.html'
})

export class TreeGridSortingSampleComponent implements OnInit {
    @ViewChild('treegrid1', { read: IgxTreeGridComponent, static: true })
    public treegrid1: IgxTreeGridComponent;
    public data: any[];

    public contextmenu = false;
    public contextmenuX = 0;
    public contextmenuY = 0;
    public clickedCell = null;

    constructor() {
    }
    public ngOnInit(): void {
        this.data = FOODS_DATA();
        this.treegrid1.sortingExpressions = [
            { dir: SortingDirection.Asc, fieldName: 'UnitPrice',
              ignoreCase: true, strategy: DefaultSortingStrategy.instance() }
        ];
    }

    public formatDate(val: Date) {
        return new Intl.DateTimeFormat('en-US').format(val);
    }

    public rightClick(eventArgs) {
      eventArgs.event.preventDefault();
      this.contextmenuX = eventArgs.event.clientX;
      this.contextmenuY = eventArgs.event.clientY;
      this.contextmenu = true;
      this.clickedCell = eventArgs.cell;
    }

    public disableContextMenu() {
      this.contextmenu = false;
   }
}
