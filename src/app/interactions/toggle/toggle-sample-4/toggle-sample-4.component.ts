import { Component, ViewChild } from '@angular/core';
import { IgxToggleDirective } from 'igniteui-angular';

@Component({
  selector: 'app-toggle-sample-4',
  styleUrls: ['../toggle-samples.css'],
  templateUrl: './toggle-sample-4.component.html'
})
export class ToggleSample4Component {
    @ViewChild(IgxToggleDirective, { static: true }) public toggle: IgxToggleDirective;

    public offsetToggle() {
        const deltaX = 30;
        const deltaY = 30;
        this.toggle.setOffset(deltaX, deltaY);
    }
}
