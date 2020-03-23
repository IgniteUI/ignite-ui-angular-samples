import { Component, TemplateRef, ViewChild, ViewEncapsulation } from "@angular/core";
import { ColumnPinningPosition, IgxColumnComponent, IgxTreeGridComponent } from "igniteui-angular";
import { IPinningConfig } from "igniteui-angular/lib/grids/common/grid.interface";
import { generateEmployeeDetailedFlatData } from "../data/employees-flat-detailed";

@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [],
    selector: "tree-grid-sample",
    styleUrls: ["tree-grid-right-pinning.component.scss"],
    templateUrl: "tree-grid-right-pinning.component.html"
})

export class TreeGridRightPinningSampleComponent {
    @ViewChild("grid1", { static: true })
    public grid1: IgxTreeGridComponent;

    public data: any[];
    public columns: any[];
    public pinningConfig: IPinningConfig = { columns: ColumnPinningPosition.End };

    @ViewChild("pinTemplate", { read: TemplateRef, static: true })
    public pinTemplate: TemplateRef<any>;

    private _columnsPinned: boolean = true;

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