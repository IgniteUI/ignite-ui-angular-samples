import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-contact-list',
  styleUrls: ['./list-sample-3.component.css'],
  templateUrl: './list-sample-3.component.html'
})
export class ListSample3Component implements OnInit {
  public contacts = [
    {
      name: 'Terrance Orta',
      phone: '770-504-2217'
    },
    {
      name: 'Richard Mahoney',
      phone: '423-676-2869'
    },
    {
      name: 'Donna Price',
      phone: '859-496-2817'
    },
    {
      name: 'Lisa Landers',
      phone: '901-747-3428'
    },
    {
      name: 'Dorothy H. Spencer',
      phone: '573-394-9254'
    }
  ];

  constructor() { }

  public ngOnInit() { }
}
