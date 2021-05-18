import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-drawer-mini',
  styleUrls: ['./nav-drawer-mini.component.css'],
  templateUrl: './nav-drawer-mini.component.html'
})
export class NavDrawerMiniComponent  {
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
