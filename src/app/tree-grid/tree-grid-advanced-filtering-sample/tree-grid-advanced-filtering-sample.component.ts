import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxTreeGridComponent} from 'igniteui-angular';
import { generateEmployeeFlatData } from '../data/employees-flat';

@Component({
    selector: 'app-tree-grid-advanced-filtering-sample',
    styleUrls: ['./tree-grid-advanced-filtering-sample.component.css'],
    templateUrl: './tree-grid-advanced-filtering-sample.component.html'
})
export class TreeGridAdvancedFilteringSampleComponent implements OnInit {

    @ViewChild('treeGrid1', { static: true }) public treeGrid: IgxTreeGridComponent;
    public data: any[];

    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();
    }
}
