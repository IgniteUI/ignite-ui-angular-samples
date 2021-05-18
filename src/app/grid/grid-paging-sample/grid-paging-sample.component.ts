import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';
import { athletesData } from '../services/data';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-grid-sample',
    styleUrls: ['./grid-paging-sample.component.css'],
    templateUrl: 'grid-paging-sample.component.html'
})

export class PagingSampleComponent implements OnInit {
    @ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;
    public data: any[];

    public ngOnInit(): void {
        this.data = athletesData;
    }
}
