import { Component } from '@angular/core';
import { IgxToastComponent, IgxToastPosition } from 'igniteui-angular';

@Component({
    selector: 'app-toast-style',
    styleUrls: ['./toast-style.component.css'],
    templateUrl: './toast-style.component.html'
})
export class ToastStyleComponent {
    public toast: IgxToastComponent;
    public toastPosition: IgxToastPosition;

    openToast(toast: IgxToastComponent, toastPosition: IgxToastPosition) {
        toast.position = toastPosition;
        toast.open();
    }
}

