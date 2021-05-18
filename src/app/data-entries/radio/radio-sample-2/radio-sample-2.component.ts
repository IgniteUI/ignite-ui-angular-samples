import { Component } from '@angular/core';

@Component({
    selector: 'app-radio-sample-2',
    styleUrls: ['./radio-sample-2.component.css'],
    templateUrl: './radio-sample-2.component.html'
})
export class RadioSample2Component {
    public colors = [{
        hex: '#f06a2f',
        name: 'Carrot'
    }, {
        hex: '#ff134a',
        name: 'Watermelon'
    }, {
        hex: '#7bc96f',
        name: 'Grass'
    },
    {
        hex: 'transparent',
        name: 'No color'
    }];

    public selectedColor: string = this.colors[3].hex;
}
