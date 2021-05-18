import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';
import { DATA } from '../../data/nwindData';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-grid-external-excel-style-filtering',
    templateUrl: './grid-external-excel-style-filtering.component.html',
    styleUrls: ['./grid-external-excel-style-filtering.component.css']
})
export class GridExternalExcelStyleFilteringComponent implements OnInit {

    public data: any[];
    constructor() {}

    public ngOnInit(): void {
        this.data = DATA;
    }
}
