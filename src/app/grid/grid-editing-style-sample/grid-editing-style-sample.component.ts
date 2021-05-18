import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';
import { DATA } from '../../data/nwindData';

@Component({
    selector: 'app-grid-editing-style-sample',
    styleUrls: ['./grid-editing-style-sample.component.css'],
    templateUrl: './grid-editing-style-sample.component.html'
})
export class GridEditingStyleSampleComponent implements OnInit {

    @ViewChild('grid', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;
    public data;
    constructor() { }

    public ngOnInit() {
        this.data = DATA;
    }
}
