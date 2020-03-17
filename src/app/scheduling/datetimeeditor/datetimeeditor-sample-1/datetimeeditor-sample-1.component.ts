import { Component, OnInit } from "@angular/core";
import {
    IgxDateTimeEditorDirective,
    IgxInputGroupModule
} from "igniteui-angular";

@Component({
    selector: "datetimeeditor-sample-1",
    styleUrls: ["./datetimeeditor-sample-1.component.scss"],
    templateUrl: "./datetimeeditor-sample-1.component.html"
})
export class DateТimeЕditorSample1Component {
    public test: IgxDateTimeEditorDirective;

    ngOnInit(): void {}
}
