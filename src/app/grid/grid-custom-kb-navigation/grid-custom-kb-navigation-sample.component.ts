import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxGridComponent } from "igniteui-angular";
import { DATA } from "../../data/nwindData";

@Component({
    selector: "grid-custom-kb-navigation-sample",
    styleUrls: ["./grid-custom-kb-navigation-sample.component.scss"],
    templateUrl: "grid-custom-kb-navigation-sample.component.html"
})

export class GridCustomKBNavigationComponent implements OnInit {
    @ViewChild("grid1", { read: IgxGridComponent })
    public grid1: IgxGridComponent;

    public data: any[];

    constructor() {
    }
    public ngOnInit(): void {
        this.data = DATA;
    }

    public customKeydown(args) {
        const target = args.target;
        const type = args.targetType;

        if (type === "dataCell" && target.inEditMode && args.event.key.toLowerCase() === "tab") {
            // Value validation for number column.
            // The value should be bigger than 10 in order to continue with the kb navigation.
            // This covers both 'tab' and 'shift+tab' key interactions.
            args.event.preventDefault();
            args.cancel = true;
            if (target.column.dataType === "number" && target.editValue < 10) {
                alert("The value should be bigger than 10");
                return;
            }
            const cell = args.event.shiftKey ?
                this.grid1.getPreviousCell(target.rowIndex, target.visibleColumnIndex, (col) => col.editable) :
                this.grid1.getNextCell(target.rowIndex, target.visibleColumnIndex, (col) => col.editable);

            this.grid1.navigateTo(cell.rowIndex, cell.visibleColumnIndex,
                (obj) => { obj.target.nativeElement.focus(); });
        } else if (type === "dataCell" && args.event.key.toLowerCase() === "enter") {
            // Perform column based kb navigation with 'enter' key press
            args.cancel = true;
            this.grid1.navigateTo(target.rowIndex + 1, target.visibleColumnIndex,
                (obj) => { obj.target.nativeElement.focus(); });
        }
    }
}
