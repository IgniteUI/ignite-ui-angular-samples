
import { Component, ElementRef, ViewChild } from '@angular/core';
import { IgxSelectComponent } from 'igniteui-angular';

@Component({
    selector: 'app-select-sample-2',
    styleUrls: ['select-sample-2.component.css'],
    templateUrl: 'select-sample-2.component.html'
})
export class SelectSample2Component {
    @ViewChild(IgxSelectComponent, { static: true })
    public select: IgxSelectComponent;

    public greengrocery: {
        label: string;
        items: { type: string; origin: string }[];
    }[] = [
        {
            label: 'Fruits',
            items:
            [
                { type: 'Apple', origin: 'local' },
                { type: 'Orange', origin: 'import' },
                { type: 'Banana', origin: 'import'}
            ]
        },
        {
            label: 'Vegetables',
            items:
            [
                { type: 'Cucumber', origin: 'local' },
                { type: 'Potato', origin: 'import' },
                { type: 'Pepper', origin: 'local' }
            ]
        }
    ];

    constructor(public element: ElementRef) {
    }
}
