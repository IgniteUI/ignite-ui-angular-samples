import { Component } from '@angular/core';

@Component({
    selector: 'app-dialog-sample-2',
    styleUrls: ['./dialog-sample-2.component.css'],
    templateUrl: './dialog-sample-2.component.html'
})
export class DialogSample2Component {

    constructor() { }

    public onDialogOKSelected(event) {
        event.dialog.close();
    }
}
