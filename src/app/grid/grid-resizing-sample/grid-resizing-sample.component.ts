import { Component } from '@angular/core';
import { IgxColumnComponent } from 'igniteui-angular';
import { DATA } from '../../data/customers';

@Component({
    selector: 'app-grid-resizing-sample',
    styleUrls: ['./grid-resizing-sample.component.css'],
    templateUrl: 'grid-resizing-sample.component.html'
})

export class ResizingSampleComponent {
    public data: any[];

    public col: IgxColumnComponent;
    public pWidth: string;
    public nWidth: string;

    constructor() {
        this.data = DATA;
    }

    public onResize(event) {
        this.col = event.column;
        this.pWidth = event.prevWidth;
        this.nWidth = event.newWidth;
    }
}
