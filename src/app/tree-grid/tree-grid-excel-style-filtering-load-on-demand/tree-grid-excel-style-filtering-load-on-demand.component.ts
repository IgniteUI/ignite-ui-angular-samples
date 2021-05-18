import { Component, OnInit } from '@angular/core';
import { IFilteringExpressionsTree, IgxColumnComponent } from 'igniteui-angular';
import { RemoteValuesService } from './remoteValues.service';

@Component({
  selector: 'app-tree-grid-excel-style-filtering-load-on-demand',
  styleUrls: ['./tree-grid-excel-style-filtering-load-on-demand.component.css'],
  templateUrl: './tree-grid-excel-style-filtering-load-on-demand.component.html',
  providers: [RemoteValuesService]
})
export class TreeGridExcelStyleFilteringLoadOnDemandComponent implements OnInit {

    public data: any[];

    constructor(private remoteValuesService: RemoteValuesService) { }

    public ngOnInit() {
        this.data = this.remoteValuesService.getRecordsData();
    }

    public columnValuesStrategy = (column: IgxColumnComponent,
                                   columnExprTree: IFilteringExpressionsTree,
                                   done: (uniqueValues: any[]) => void) => {
        // Get specific column data.
        this.remoteValuesService.getColumnData(column, columnExprTree, uniqueValues => done(uniqueValues));
    };
}
