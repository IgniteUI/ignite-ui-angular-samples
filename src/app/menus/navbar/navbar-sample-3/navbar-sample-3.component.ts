import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
  selector: 'app-navbar',
  styleUrls: ['./navbar-sample-3.component.css'],
  templateUrl: './navbar-sample-3.component.html'
})
export class NavbarSample3Component implements OnInit{

  constructor(private _location: Location) { }

  public ngOnInit() {  }

  public navigateBack() {
    this._location.back();
  }

  public canGoBack() {
      return window.history.length > 0;
  }
}
