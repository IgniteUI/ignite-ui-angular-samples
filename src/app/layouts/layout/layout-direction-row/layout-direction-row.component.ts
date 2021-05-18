import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonGroupAlignment } from 'igniteui-angular';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-layout-direction-row',
  styleUrls: ['./layout-direction-row.component.css'],
  templateUrl: './layout-direction-row.component.html'
})

export class LayoutDirectionRowComponent {
    public alignment = ButtonGroupAlignment.horizontal;
    public rippleColor = 'grey';
    public layout = 'row';
}
