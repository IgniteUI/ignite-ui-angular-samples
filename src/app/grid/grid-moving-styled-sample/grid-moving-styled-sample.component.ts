import { AfterViewInit, Component, TemplateRef, ViewChild, ViewEncapsulation } from "@angular/core";
import { IgxColumnComponent, IgxGridComponent } from "igniteui-angular";
import { DATA } from "../grid-sample-selection/financialData";

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "app-grid-moving-styled-sample",
    styleUrls: ["./grid-moving-styled-sample.component.scss"],
    templateUrl: "./grid-moving-styled-sample.component.html"
})

export class GridMovingStyledSampleComponent implements AfterViewInit {
    public data: any[];
    @ViewChild("dataGrid", { static: true }) public grid: IgxGridComponent;
    @ViewChild("pinTemplate", { read: TemplateRef, static: true })
    private pinTemplate: TemplateRef<any>;

    constructor() {
        this.data = DATA;
    }

    public ngAfterViewInit(): void {
        if (this.grid.columns.length > 0) {
            this.grid.columns.forEach((column: IgxColumnComponent) => {
                column.headerTemplate = this.pinTemplate;
            });
        }
    }

    public formatNumber(value: number) {
        return value.toFixed(2);
    }

    public formatCurrency(value: number) {
        return "$" + value.toFixed(2);
    }

    public toggleColumnPinning(column: IgxColumnComponent) {
        column.pinned ? column.unpin() : column.pin();
    }
}
