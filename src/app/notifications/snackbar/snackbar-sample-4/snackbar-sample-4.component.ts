import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxSnackbarComponent } from 'igniteui-angular';

@Component({
  selector: 'app-snackbar-sample-4',
  styleUrls: ['./snackbar-sample-4.component.css'],
  templateUrl: './snackbar-sample-4.component.html'
})
export class SnackbarSample4Component implements OnInit {
  @ViewChild(IgxSnackbarComponent, { static: true })
  public snackbar: IgxSnackbarComponent;
  public navItems: any[];
  public deletedItems = [];

  constructor() { }

  public ngOnInit() {
    this.navItems = [{
      avatar: 'assets/images/avatar/2.jpg',
      text: 'Richard Mahoney'
    },
    {
      avatar: 'assets/images/avatar/4.jpg',
      text: 'Lisa Landers'
    },
    {
      avatar: 'assets/images/avatar/14.jpg',
      text: 'Marianne Taylor'
    }, {
      avatar: 'assets/images/avatar/17.jpg',
      text: 'Ward Riley'
    }];
  }

  public delete(item) {
    this.deletedItems.push([item, this.navItems.indexOf(item)]);
    this.navItems.splice(this.navItems.indexOf(item), 1);
    this.snackbar.open();
  }

  public restore() {
    const [item, index] = this.deletedItems.pop();
    this.navItems.splice(index, 0, item);
    this.snackbar.close();
  }
}
