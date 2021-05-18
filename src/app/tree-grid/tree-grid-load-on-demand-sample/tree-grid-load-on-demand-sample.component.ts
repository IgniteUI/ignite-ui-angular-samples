import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular';
import { TreeGridLoadOnDemandService } from './remoteService';

@Component({
    selector: 'app-tree-grid-load-on-demand-sample',
    styleUrls: ['./tree-grid-load-on-demand-sample.component.css'],
    templateUrl: './tree-grid-load-on-demand-sample.component.html'
})
export class TreeGridLoadOnDemandSampleComponent implements OnInit {
    @ViewChild('treeGrid', { static: true }) public treeGrid: IgxTreeGridComponent;
    public data = [];
    private dataService = new TreeGridLoadOnDemandService();

    constructor() { }

    public ngOnInit() {
        this.treeGrid.isLoading = true;
        this.dataService.getData(-1, (children) => {
            this.data = children;
            this.treeGrid.isLoading = false;
        });
    }

    public loadChildren = (parentID: any, done: (children: any[]) => void) => {
        this.dataService.getData(parentID, (children) => done(children));
    };
}
