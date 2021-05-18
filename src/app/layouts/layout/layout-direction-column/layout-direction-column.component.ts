import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonGroupAlignment } from 'igniteui-angular';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-layout-direction-column',
  styleUrls: ['./layout-direction-column.component.css'],
  templateUrl: './layout-direction-column.component.html'
})

export class LayoutDirectionColumnComponent {
    public alignment = ButtonGroupAlignment.horizontal;
    public rippleColor = 'grey';
    public layout = 'column';
}
