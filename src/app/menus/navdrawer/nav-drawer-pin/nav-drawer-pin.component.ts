import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-drawer-pin',
  styleUrls: ['./nav-drawer-pin.component.css'],
  templateUrl: './nav-drawer-pin.component.html'
})
export class NavDrawerPinComponent  {
    public navItems = [
        { name: 'account_circle', text: 'Avatar' },
        { name: 'error', text: 'Badge' },
        { name: 'group_work', text: 'Button Group' }
    ];

    public selected = 'Avatar';

    public navigate(item) {
        this.selected = item.text;
    }
}
