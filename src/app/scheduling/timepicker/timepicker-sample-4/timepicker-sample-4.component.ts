import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-timepicker',
    styleUrls: ['./timepicker-sample-4.component.css'],
    templateUrl: './timepicker-sample-4.component.html'
})
export class TimePickerSample4Component {
    @ViewChild('toast', { static: true })
    private toast;

    public time = '10:00:00';
    public min = '08:15:30';
    public max = '18:15:30';

    public onValidationFailed() {
        this.toast.open();
    }
}
