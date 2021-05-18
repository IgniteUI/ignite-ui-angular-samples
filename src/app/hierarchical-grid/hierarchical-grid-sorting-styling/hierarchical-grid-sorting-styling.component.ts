import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DefaultSortingStrategy, IgxHierarchicalGridComponent, SortingDirection } from 'igniteui-angular';
import { SINGERS } from '../data';

@Component({
    selector: 'app-hierarchical-grid-sorting-styling',
    styleUrls: ['./hierarchical-grid-sorting-styling.component.css'],
    templateUrl: 'hierarchical-grid-sorting-styling.component.html'
})

export class HGridSortingStylingComponent implements OnInit, AfterViewInit {
    @ViewChild('hierarchicalGrid', { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    public localdata;

    constructor() {}

    public ngOnInit(): void {
        this.localdata = SINGERS;
        this.hierarchicalGrid.sortingExpressions = [
            { dir: SortingDirection.Asc, fieldName: 'Artist',
              ignoreCase: true, strategy: DefaultSortingStrategy.instance() }
        ];
    }
    public ngAfterViewInit(): void {
        this.hierarchicalGrid.cdr.detectChanges();
    }

    public formatter = (a) => a;
}
