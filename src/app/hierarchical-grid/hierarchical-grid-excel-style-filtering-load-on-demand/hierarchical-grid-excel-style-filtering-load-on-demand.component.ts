import { Component, OnInit } from '@angular/core';
import { IFilteringExpressionsTree, IgxColumnComponent } from 'igniteui-angular';
import { RemoteValuesService } from './remoteValues.service';

@Component({
  selector: 'app-hierarchical-grid-excel-style-filtering-load-on-demand',
  templateUrl: './hierarchical-grid-excel-style-filtering-load-on-demand.component.html',
  styleUrls: ['./hierarchical-grid-excel-style-filtering-load-on-demand.component.css'],
  providers: [RemoteValuesService]
})
export class HierarchicalGridExcelStyleFilteringLoadOnDemandComponent implements OnInit {

    public localdata: any[];

    constructor(private remoteValuesService: RemoteValuesService) { }

    public singersColumnValuesStrategy = (column: IgxColumnComponent,
                                          columnExprTree: IFilteringExpressionsTree,
                                          done: (uniqueValues: any[]) => void) => {
        // Get specific column data for the singers.
        this.remoteValuesService.getColumnData(
            null, 'Singers', column, columnExprTree, uniqueValues => done(uniqueValues));
    };

    public albumsColumnValuesStrategy = (column: IgxColumnComponent,
                                         columnExprTree: IFilteringExpressionsTree,
                                         done: (uniqueValues: any[]) => void) => {
    // Get specific column data for the albums of a specific singer.
    const parentRowId = (column.grid as any).foreignKey;
    this.remoteValuesService.getColumnData(
        parentRowId, 'Albums', column, columnExprTree, uniqueValues => done(uniqueValues));
    };

    public ngOnInit() {
        this.localdata = this.remoteValuesService.getSingersData();
    }
}
