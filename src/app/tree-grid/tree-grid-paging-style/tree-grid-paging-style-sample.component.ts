import { Component, OnInit } from '@angular/core';
import { FOODS_DATA } from '../data/foods';

@Component({
    selector: 'app-tree-grid-paging-sample',
    styleUrls: ['./tree-grid-paging-style-sample.component.css'],
    templateUrl: 'tree-grid-paging-style-sample.component.html'
})

export class TreeGridPagingStyleSampleComponent implements OnInit {

    public data: any[];

    public ngOnInit(): void {
        this.data = FOODS_DATA();
    }
}
