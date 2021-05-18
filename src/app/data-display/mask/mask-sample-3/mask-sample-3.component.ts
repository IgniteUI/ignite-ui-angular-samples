import { Component } from '@angular/core';

@Component({
  selector: 'app-mask-sample-3',
  styleUrls: ['./mask-sample-3.component.css'],
  templateUrl: './mask-sample-3.component.html'
})
export class MaskSample3Component {
  public socialSecurityNumber = '123-45-6789';
  public includeLiterals = true;

  public clear() {
    if (this.includeLiterals === false){
        this.socialSecurityNumber = '123-45-6789';
    } else {
        this.socialSecurityNumber = '';
    }
  }
}
