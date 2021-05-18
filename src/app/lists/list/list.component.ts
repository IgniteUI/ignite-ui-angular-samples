import { Component, OnInit } from '@angular/core';
import { IgxFilterOptions } from 'igniteui-angular';

@Component({
    selector: 'app-list',
    styleUrls: ['./list.component.css'],
    templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

    public search1: string;

    public contacts = [{
        avatar: 'assets/images/avatar/1.jpg',
        favorite: true,
        key: '1',
        link: '#',
        name: 'Terrance Orta',
        phone: '770-504-2217'
    }, {
        avatar: 'assets/images/avatar/2.jpg',
        favorite: false,
        key: '2',
        link: '#',
        name: 'Richard Mahoney',
        phone: '423-676-2869'
    }, {
        avatar: 'assets/images/avatar/3.jpg',
        favorite: false,
        key: '3',
        link: '#',
        name: 'Donna Price',
        phone: '859-496-2817'
    }, {
        avatar: 'assets/images/avatar/4.jpg',
        favorite: false,
        key: '4',
        link: '#',
        name: 'Lisa Landers',
        phone: '901-747-3428'
    }, {
        avatar: 'assets/images/avatar/12.jpg',
        favorite: true,
        key: '5',
        link: '#',
        name: 'Dorothy H. Spencer',
        phone: '573-394-9254'
    }, {
        avatar: 'assets/images/avatar/13.jpg',
        favorite: false,
        key: '6',
        link: '#',
        name: 'Stephanie May',
        phone: '323-668-1482'
    }, {
        avatar: 'assets/images/avatar/14.jpg',
        favorite: false,
        key: '7',
        link: '#',
        name: 'Marianne Taylor',
        phone: '401-661-3742'
    }, {
        avatar: 'assets/images/avatar/15.jpg',
        favorite: true,
        key: '8',
        link: '#',
        name: 'Tammie Alvarez',
        phone: '662-374-2920'
    }, {
        avatar: 'assets/images/avatar/16.jpg',
        favorite: true,
        key: '9',
        link: '#',
        name: 'Charlotte Flores',
        phone: '240-455-2267'
    }, {
        avatar: 'assets/images/avatar/17.jpg',
        favorite: false,
        key: '10',
        link: '#',
        name: 'Ward Riley',
        phone: '724-742-0979'
    }];

    get fo1() {
        const _fo = new IgxFilterOptions();
        _fo.key = 'name';
        _fo.inputValue = this.search1;
        return _fo;
    }
    constructor() { }

    public ngOnInit() {
    }

}
