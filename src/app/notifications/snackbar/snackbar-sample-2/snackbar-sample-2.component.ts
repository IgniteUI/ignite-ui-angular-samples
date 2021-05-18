import { Component } from '@angular/core';

@Component({
  selector: 'app-snackbar-sample-2',
  styleUrls: ['./snackbar-sample-2.component.css'],
  templateUrl: './snackbar-sample-2.component.html'
})
export class SnackbarSample2Component {
  public close(element) {
    element.close();
  }
}
