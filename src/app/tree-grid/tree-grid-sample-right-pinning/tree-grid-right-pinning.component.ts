import { Component, ViewChild, ViewEncapsulation } from "@angular/core";
import { ColumnPinningPosition, IgxColumnComponent, IgxTreeGridComponent } from "igniteui-angular";
import { IPinningConfig } from "igniteui-angular/lib/grids/common/grid.interface";
import { data } from "../../data/athletesData";
import { athletesData } from "../services/data";

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
    public athletesData: any[];
    public columns: any[];
    public pinningConfig: IPinningConfig = { columns: ColumnPinningPosition.End };
    private _columnsPinned: boolean = true;

    public ngOnInit(): void {
        this.data = athletesData;
        this.athletesData = data;
        let i = 0;
        this.data.forEach((x) => {
            x.FirstPlaces = Math.floor(Math.random() * Math.floor(3));
            x.SecondPlaces = Math.floor(Math.random() * Math.floor(4));
            x.ThirdPlaces = Math.floor(Math.random() * Math.floor(5));
            x.RegistrationDate = this.generateReadableDate(x.Registered);
            x.Birthday = this.generateReadableDate(this.athletesData[i].birthday);
            x.Sponsor = this.athletesData[i].company;
            x.AgentData = [this.athletesData[i]];
            i++;
        });
    }

    public toggleColumn(col: IgxColumnComponent): void {
        col.pinned ? col.unpin() : col.pin();
    }

    public get columnsPinned(): boolean {
        return this._columnsPinned;
    }

    public set columnsPinned(pinned) {
        this._columnsPinned = !this._columnsPinned;
    }

    private generateReadableDate(timestamp: string): string {
        let dateObj = new Date(timestamp);
        if (isNaN(dateObj.getTime())) {
            dateObj = new Date(timestamp.split(" ")[0]);
        }
        const month = dateObj.toLocaleString("default", { month: "long"});
        const day = dateObj.getDate();
        return day + " " + month + " " + dateObj.getFullYear();
    }

}
