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

    public onValueChanged(event: IgxDateTimeEditorEventArgs) {
        console.log("value changed", event.oldValue, event.newValue);
        // this.date = event.newValue;
    }

    public onValidationFailed(event: IgxDateTimeEditorEventArgs) {
        console.log("validation failed", event.oldValue, event.newValue);
    }
}
