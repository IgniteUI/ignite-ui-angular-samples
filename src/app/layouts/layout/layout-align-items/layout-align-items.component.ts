import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonGroupAlignment } from 'igniteui-angular';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-layout-align-items',
  styleUrls: ['./layout-align-items.component.css'],
  templateUrl: './layout-align-items.component.html'
})

export class LayoutAlignItemsComponent {
    public alignment = ButtonGroupAlignment.horizontal;
    public rippleColor = 'grey';
    public alignItems = 'flex-start';
}
