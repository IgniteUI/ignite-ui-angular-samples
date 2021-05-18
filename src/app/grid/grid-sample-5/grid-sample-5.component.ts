import { AfterViewInit, ChangeDetectorRef, Component, ViewChild, OnInit } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';
import { RemoteService } from './remote.service';

@Component({
    providers: [RemoteService],
    selector: 'app-grid-remote-virtualization-sample',
    styleUrls: ['grid-sample-5.component.css'],
    templateUrl: 'grid-sample-5.component.html'
})

export class GridRemoteVirtualizationAddRowSampleComponent implements AfterViewInit, OnInit {

    @ViewChild('grid', { static: true })
    public grid: IgxGridComponent;

    public remoteData: any;
    private page = 1;
    private pageSize = 10;
    private totalPageCount = 0;
    private totalItems = 0;

    constructor(private _remoteService: RemoteService, public cdr: ChangeDetectorRef) { }

    public ngOnInit(): void {
        this.remoteData = this._remoteService.data;
    }

    public ngAfterViewInit() {
        this.grid.isLoading = true;
        // load 1 page of data with the size of a  data view and a half
        const dataViewSize = parseInt(this.grid.height, 10) / this.grid.rowHeight;
        this.pageSize = Math.floor(dataViewSize * 1.5);
        this._remoteService.loadDataForPage(this.page, this.pageSize, (request) => {
            if (request.data) {
                this.grid.data = this._remoteService.getCachedData({startIndex: 0, chunkSize: 10});
                this.cdr.detectChanges();
                this.grid.verticalScrollContainer.totalItemCount = this.page * this.pageSize;
                this.totalItems = request.data['@odata.count'];
                this.totalPageCount = Math.ceil(this.totalItems / this.pageSize);
                this.grid.isLoading = false;
            }
        });
    }

    public handlePreLoad() {
        const isLastChunk = this.grid.totalItemCount ===
                            this.grid.virtualizationState.startIndex + this.grid.virtualizationState.chunkSize;
        // when last chunk reached load another page of data
        if (isLastChunk) {
            if (this.totalPageCount === this.page) {
                this.grid.data = this._remoteService.getCachedData(this.grid.virtualizationState);
                return;
            }
            this.page++;
            this.grid.isLoading = true;
            this._remoteService.loadDataForPage(this.page, this.pageSize, (request) => {
                if (request.data) {
                    this.grid.totalItemCount = Math.min(this.page * this.pageSize, this.totalItems);
                    this.grid.data = this._remoteService.getCachedData(this.grid.virtualizationState);
                    this.grid.isLoading = false;
                }
            });
        } else {
            this.grid.data = this._remoteService.getCachedData(this.grid.virtualizationState);
        }
    }

    public formatNumber(value: number) {
        return value.toFixed(2);
    }

    public formatCurrency(value: number) {
        return '$' + value.toFixed(2);
    }
}
