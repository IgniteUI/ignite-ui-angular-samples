import { Component, OnInit } from '@angular/core';
import { IgxFilterOptions } from 'igniteui-angular';
@Component({
  selector: 'app-contact-list2',
  styleUrls: ['./list-sample-4.component.css'],
  templateUrl: './list-sample-4.component.html'
})
export class ListSample4Component implements OnInit {
  public searchContact: string;

  public contacts = [
    {
      isFavorite: false,
      name: 'Terrance Orta',
      phone: '770-504-2217',
      photo: 'assets/images/men/27.jpg'
    },
    {
      isFavorite: true,
      name: 'Richard Mahoney',
      phone: '423-676-2869',
      photo: 'assets/images/men/1.jpg'
    },
    {
      isFavorite: false,
      name: 'Donna Price',
      phone: '859-496-2817',
      photo: 'assets/images/women/50.jpg'
    },
    {
      isFavorite: false,
      name: 'Lisa Landers',
      phone: '901-747-3428',
      photo: 'assets/images/women/3.jpg'
    },
    {
      isFavorite: true,
      name: 'Dorothy H. Spencer',
      phone: '573-394-9254',
      photo: 'assets/images/women/67.jpg'
    }
  ];

  public density = 'comfortable';
  public displayDensities;

  constructor() { }

  public ngOnInit() {
    this.displayDensities = [
        { label: 'comfortable', selected: this.density === 'comfortable', togglable: true },
        { label: 'cosy', selected: this.density === 'cosy', togglable: true },
        { label: 'compact', selected: this.density === 'compact', togglable: true }
    ];
  }

  public selectDensity(event) {
    this.density = this.displayDensities[event.index].label;
  }

  public toggleFavorite(contact: any) {
    contact.isFavorite = !contact.isFavorite;
  }

  get filterContacts() {
    const fo = new IgxFilterOptions();
    fo.key = 'name';
    fo.inputValue = this.searchContact;
    return fo;
  }
}
