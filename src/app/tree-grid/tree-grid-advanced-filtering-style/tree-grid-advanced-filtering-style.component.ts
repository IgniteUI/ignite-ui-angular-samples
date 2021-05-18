import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxTreeGridComponent} from 'igniteui-angular';
import { generateEmployeeFlatData } from '../data/employees-flat';

@Component({
    selector: 'app-tree-grid-advanced-filtering-style',
    styleUrls: ['./tree-grid-advanced-filtering-style.component.css'],
    templateUrl: './tree-grid-advanced-filtering-style.component.html'
})
export class TreeGridAdvancedFilteringStyleComponent implements OnInit {

    @ViewChild('treeGrid1', { static: true }) public treeGrid: IgxTreeGridComponent;
    public data: any[];

    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();
    }
}
