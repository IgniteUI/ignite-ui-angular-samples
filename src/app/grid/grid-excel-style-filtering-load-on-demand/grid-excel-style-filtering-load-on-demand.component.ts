import { Component, OnInit } from '@angular/core';
import { IFilteringExpressionsTree, IgxColumnComponent } from 'igniteui-angular';
import { RemoteValuesService } from './remoteValues.service';

@Component({
    selector: 'app-grid-excel-style-filtering-load-on-demand',
    styleUrls: ['./grid-excel-style-filtering-load-on-demand.component.css'],
    templateUrl: './grid-excel-style-filtering-load-on-demand.component.html',
    providers: [RemoteValuesService]
})
export class GridExcelStyleFilteringLoadOnDemandComponent implements OnInit {

    public data: any[];

    constructor(private remoteValuesService: RemoteValuesService) { }

    public columnValuesStrategy = (column: IgxColumnComponent,
                                   columnExprTree: IFilteringExpressionsTree,
                                   done: (uniqueValues: any[]) => void) => {
        // Get specific column data.
        this.remoteValuesService.getColumnData(column, columnExprTree, uniqueValues => done(uniqueValues));
    };

    public ngOnInit() {
        // Get full data.
        this.data = this.remoteValuesService.getRecordsData();
    }
}
