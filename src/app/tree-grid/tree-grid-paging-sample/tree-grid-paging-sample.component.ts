import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular';
import { FOODS_DATA } from '../data/foods';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-tree-grid-paging-sample',
    styleUrls: ['./tree-grid-paging-sample.component.css'],
    templateUrl: 'tree-grid-paging-sample.component.html'
})

export class TreeGridPagingSampleComponent implements OnInit {
    @ViewChild('treegrid1', { static: true }) public grid1: IgxTreeGridComponent;
    public data: any[];

    public ngOnInit(): void {
        this.data = FOODS_DATA();
    }
}
