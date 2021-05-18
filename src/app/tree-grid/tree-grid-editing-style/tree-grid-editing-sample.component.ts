import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular';
import { generateEmployeeFlatData } from '../data/employees-flat';

@Component({
    selector: 'app-tree-grid-editing-sample',
    styleUrls: ['./tree-grid-editing-sample.component.css'],
    templateUrl: './tree-grid-editing-sample.component.html'
})
export class TreeGridEditingStyleComponent implements OnInit {
    @ViewChild(IgxTreeGridComponent, { static: true }) public treeGrid: IgxTreeGridComponent;
    public data: any[];

    constructor() {
    }

    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();
    }
}
