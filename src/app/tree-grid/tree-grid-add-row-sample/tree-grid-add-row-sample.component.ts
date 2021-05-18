import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxActionStripComponent, IgxTreeGridComponent } from 'igniteui-angular';
import { generateEmployeeFlatData } from '../data/employees-flat';

@Component({
    selector: 'app-tree-grid-add-row-sample',
    styleUrls: ['./tree-grid-add-row-sample.component.css'],
    templateUrl: './tree-grid-add-row-sample.component.html'
})
export class TreeGridAddRowSampleComponent implements OnInit {
    @ViewChild('actionstrip') actionStrip: IgxActionStripComponent;
    @ViewChild('treeGrid', { static: true }) public treeGrid: IgxTreeGridComponent;
    public data: any[];

    constructor() {
    }

    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();
    }
}
