import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-igx-list-demo',
  styleUrls: ['./list-sample-1.component.css'],
  templateUrl: './list-sample-1.component.html'
})
export class ListSample1Component implements OnInit {
  @ViewChild('itemInput') public newItem: ElementRef;

  public emptyListMsg = 'Please add something';
  public listItems = [
    {
      heading: true,
      name: 'Contacts'
    },
    {
      name: 'Angelina Jolie'
    }
  ];
  public counter = 0;

  public itemOptions = [
    {
      actions: 'onItemDelete',
      name: 'Delete'
    }
  ];

  constructor() {}

  public ngOnInit() {}

  public addItem() {}
}
