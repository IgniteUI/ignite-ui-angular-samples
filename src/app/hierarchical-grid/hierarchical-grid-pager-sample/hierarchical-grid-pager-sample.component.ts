import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { IPaginatorResourceStrings, IgxPaginatorComponent } from 'igniteui-angular';
import { SINGERS } from '../data';

@Component({
    selector: 'app-hierarchical-grid-pager-sample',
    styleUrls: ['./hierarchical-grid-pager-sample.component.css'],
    templateUrl: './hierarchical-grid-pager-sample.component.html'
})
export class HierarchicalGridPagerSampleComponent implements OnInit, AfterViewInit {
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
        this.data = SINGERS;
        this.densityOptions = ['compact', 'cosy', 'comfortable'];
    }

    public ngAfterViewInit(): void {
        requestAnimationFrame(() => {
            this.paginator.resourceStrings = this.paginatorResourceStrings;
        });
    }
}
