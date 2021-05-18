import { Component } from '@angular/core';

@Component({
    selector: 'app-mask-sample-1',
    styleUrls: ['./mask-sample-1.component.css'],
    templateUrl: './mask-sample-1.component.html'
})

export class MaskSample1Component {
    public validateDate(dateInput, snackbar) {
        if (!this.isDateValid(dateInput.value)) {
            this.notify(snackbar, 'Invalid Date', dateInput);
        }
    }

    private isDateValid(date) {
        return (new Date(date).toLocaleString() !== 'Invalid Date');
    }

    private notify(snackbar, message, input) {
        snackbar.message = message;
        snackbar.open();
    }
}
