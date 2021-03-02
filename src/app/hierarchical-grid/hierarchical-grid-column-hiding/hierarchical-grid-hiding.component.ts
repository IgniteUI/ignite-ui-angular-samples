import { Component, OnInit } from "@angular/core";
import { SINGERS } from "../../data/singersData";

@Component({
    selector: "hierarchical-grid-hiding",
    styleUrls: ["./hierarchical-grid-hiding.component.scss"],
    templateUrl: "hierarchical-grid-hiding.component.html"
})

export class HGridColumnHidingSampleComponent implements OnInit {
    public localdata;

    constructor() {}

    public ngOnInit(): void {
        this.localdata = SINGERS;
    }

    public formatter = (a) => a;

}
