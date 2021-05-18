import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {
    IGridCreatedEventArgs,
    IgxHierarchicalGridComponent,
    IgxRowIslandComponent
} from 'igniteui-angular';
import { IDataState, RemoteLoDService } from '../services/remote-lod.service';

@Component({
    providers: [RemoteLoDService],
    selector: 'app-hierarchical-grid-lod',
    styleUrls: ['./hierarchical-grid-lod.component.css'],
    templateUrl: './hierarchical-grid-lod.component.html'
})
export class HierarchicalGridLoDSampleComponent implements AfterViewInit {
    @ViewChild('hGrid', { static: true })
    public hGrid: IgxHierarchicalGridComponent;

    constructor(private remoteService: RemoteLoDService) { }

    public ngAfterViewInit() {
        const dataState: IDataState = {
            key: 'Customers',
            parentID: '',
            parentKey: '',
            rootLevel: true
        };
        this.hGrid.isLoading = true;
        this.remoteService.getData(dataState).subscribe(
            (data) => {
                this.hGrid.isLoading = false;
                this.hGrid.data = data;
                this.hGrid.cdr.detectChanges();
            },
            (error) => {
                this.hGrid.emptyGridMessage = error.message;
                this.hGrid.isLoading = false;
                this.hGrid.cdr.detectChanges();
            }
        );
    }

    public dateFormatter(val: string) {
        return new Intl.DateTimeFormat('en-US').format(new Date(val));
    }

    public gridCreated(event: IGridCreatedEventArgs, _parentKey: string) {
        const dataState: IDataState = {
            key: event.owner.key,
            parentID: event.parentID,
            parentKey: _parentKey,
            rootLevel: false
        };
        event.grid.isLoading = true;
        this.remoteService.getData(dataState).subscribe(
            (data) => {
                event.grid.isLoading = false;
                event.grid.data = data;
                event.grid.cdr.detectChanges();
            },
            (error) => {
                event.grid.emptyGridMessage = error.message;
                event.grid.isLoading = false;
                event.grid.cdr.detectChanges();
            }
        );
    }
}
