import { Component, OnInit } from "@angular/core";
import {
    IgxDateTimeEditorDirective,
    IgxDateTimeEditorEventArgs,
    IgxInputGroupModule
} from "igniteui-angular";

@Component({
    selector: "datetimeeditor-sample-1",
    styleUrls: ["./datetimeeditor-sample-1.component.scss"],
    templateUrl: "./datetimeeditor-sample-1.component.html"
})
export class DateТimeЕditorSample1Component implements OnInit {
    public date = new Date();

    ngOnInit(): void {

    }
}
