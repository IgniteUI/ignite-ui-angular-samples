import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxDropDownComponent } from "igniteui-angular/main";
@Component({
    // tslint:disable-next-line:component-selector
    selector: "app-dropdown-sample-2",
    styleUrls: ["./dropdown-sample-2.component.scss"],
    templateUrl: "./dropdown-sample-2.component.html"
})
export class DropDownSample2Component implements OnInit {
    @ViewChild(IgxDropDownComponent) public igxDropDown: IgxDropDownComponent;

    public items: any[] = [];

    constructor() {
        for (let i = 1; i < 4; i ++) {
            const item = { field: "Option " + i };
            this.items.push(item);
        }
    }

    public ngOnInit() {
    }

    public toggleDropDown() {
        this.igxDropDown.toggle();
    }

    public onOpening(ev) {
        this.igxDropDown.setSelectedItem(0);
    }
}
