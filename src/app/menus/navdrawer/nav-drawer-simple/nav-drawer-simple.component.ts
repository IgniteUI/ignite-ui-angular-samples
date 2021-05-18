import { Component, ViewChild } from '@angular/core';
import { IgxNavigationDrawerComponent } from 'igniteui-angular';

@Component({
  selector: 'app-nav-drawer-simple',
  styleUrls: ['./nav-drawer-simple.component.css'],
  templateUrl: './nav-drawer-simple.component.html'
})
export class NavDrawerSimpleComponent  {
    @ViewChild(IgxNavigationDrawerComponent, { static: true })
    public drawer: IgxNavigationDrawerComponent;

    public navItems = [
        { name: 'account_circle', text: 'Avatar' },
        { name: 'error', text: 'Badge' },
        { name: 'group_work', text: 'Button Group' }
    ];

    public selected = 'Avatar';

    public navigate(item) {
        this.selected = item.text;
        this.drawer.close();
    }
}
