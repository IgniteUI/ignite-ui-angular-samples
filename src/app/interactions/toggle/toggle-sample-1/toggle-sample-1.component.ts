import { Component, ViewChild } from '@angular/core';
import { IgxToggleDirective } from 'igniteui-angular';

@Component({
  selector: 'app-toggle-sample-1',
  styleUrls: ['./toggle-sample-1.component.scss', '../toggle-samples.css'],
  templateUrl: './toggle-sample-1.component.html'
})
export class ToggleSample1Component {

  @ViewChild(IgxToggleDirective, { static: true })
  public toggle: IgxToggleDirective;

  public toggleContent() {
    if (this.toggle.collapsed) {
      this.toggle.open();
    } else {
      this.toggle.close();
    }
  }
}
