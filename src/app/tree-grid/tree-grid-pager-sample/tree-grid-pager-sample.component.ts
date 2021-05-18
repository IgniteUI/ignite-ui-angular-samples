import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { IPaginatorResourceStrings, IgxPaginatorComponent } from 'igniteui-angular';
import { FOODS_DATA } from '../data/foods';

@Component({
    selector: 'app-tree-grid-pager-sample',
    styleUrls: ['./tree-grid-pager-sample.component.css'],
    templateUrl: './tree-grid-pager-sample.component.html'
})
export class TreeGridPagerSampleComponent implements OnInit, AfterViewInit {
    @ViewChild('paginator', { read: IgxPaginatorComponent, static: false })
    paginator: IgxPaginatorComponent;

    public data: any[];
    public densityOptions: string[];
    public isDropdownHidden = false;
    public isPagerHidden = false;
    public isDropdownDisabled = false;
    public isPagerDisabled = false;
    public selectOptions = [5, 15, 20, 50];

    private paginatorResourceStrings: IPaginatorResourceStrings = {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        igx_paginator_label: 'Records per page'
    };

    public ngOnInit(): void {
        this.data = FOODS_DATA();
        this.densityOptions = ['compact', 'cosy', 'comfortable'];
    }

    public ngAfterViewInit(): void {
        requestAnimationFrame(() => {
            this.paginator.resourceStrings = this.paginatorResourceStrings;
        });
    }
}
