import { Component } from '@angular/core';
import { IgxToastPosition } from 'igniteui-angular';

@Component({
  selector: 'app-toast-sample-5',
  styleUrls: ['./toast-sample-5.component.css'],
  templateUrl: './toast-sample-5.component.html'
})

export class ToastSample5Component {
  public toastPosition: IgxToastPosition;

  public open(toast) {
    this.toastPosition = 'top';
    toast.open();
  }
}
