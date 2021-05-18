import { Component } from '@angular/core';
import { IgxToastComponent, IgxToastPosition } from 'igniteui-angular';

@Component({
    selector: 'app-toast-sample-1',
    styleUrls: ['./toast-sample-1.component.css'],
    templateUrl: './toast-sample-1.component.html'
})
export class ToastSample1Component {
    public toast: IgxToastComponent;
    public toastPosition: IgxToastPosition;

    openToast(toast: IgxToastComponent, toastPosition: IgxToastPosition) {
        toast.position = toastPosition;
        toast.open();
    }
}
