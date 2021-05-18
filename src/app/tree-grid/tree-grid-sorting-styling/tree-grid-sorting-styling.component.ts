import { Component, OnInit, ViewChild } from '@angular/core';
import { DefaultSortingStrategy, IgxTreeGridComponent, SortingDirection } from 'igniteui-angular';
import { FOODS_DATA } from '../data/foods';

@Component({
    selector: 'app-tree-grid-sorting-styling',
    styleUrls: ['./tree-grid-sorting-styling.component.css'],
    templateUrl: 'tree-grid-sorting-styling.component.html'
})

export class TreeGridSortingStylingComponent implements OnInit {
    @ViewChild('treegrid1', { read: IgxTreeGridComponent, static: true })
    public treegrid1: IgxTreeGridComponent;
    public data: any[];

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

}
