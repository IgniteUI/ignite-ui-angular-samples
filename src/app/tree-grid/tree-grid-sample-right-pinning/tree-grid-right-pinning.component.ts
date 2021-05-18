import { Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { ColumnPinningPosition, IgxColumnComponent, IgxTreeGridComponent, IPinningConfig } from 'igniteui-angular';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';

@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [],
    selector: 'app-tree-grid-sample',
    styleUrls: ['tree-grid-right-pinning.component.css'],
    templateUrl: 'tree-grid-right-pinning.component.html'
})

export class TreeGridRightPinningSampleComponent implements OnInit {
    @ViewChild('grid1', { static: true })
    public grid1: IgxTreeGridComponent;
    @ViewChild('pinTemplate', { read: TemplateRef, static: true })
    public pinTemplate: TemplateRef<any>;

    public data: any[];
    public columns: any[];
    public pinningConfig: IPinningConfig = { columns: ColumnPinningPosition.End };

    private _columnsPinned = true;

    public ngOnInit(): void {
        this.data = generateEmployeeDetailedFlatData();
    }

    public toggleColumnPinning(col: IgxColumnComponent): void {
        col.pinned ? col.unpin() : col.pin();
    }

    public get columnsPinned(): boolean {
        return this._columnsPinned;
    }

    public set columnsPinned(pinned) {
        this._columnsPinned = !this._columnsPinned;
    }
}
