import { Component } from '@angular/core';

@Component({
    selector: 'app-select-sample-1',
    styleUrls: ['select-sample-1.component.css'],
    templateUrl: 'select-sample-1.component.html'
})
export class SelectSample1Component {
    public items: string[] = ['Orange', 'Apple', 'Banana', 'Mango'];
}
