import { formatNumber } from '@angular/common';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular';
import { Observable } from 'rxjs';
import { RemotePagingService } from './remotePagingService';

@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [RemotePagingService],
    selector: 'app-tree-grid-remote-paging-grid-sample',
    styleUrls: ['./tree-grid-remote-paging-sample.component.css'],
    templateUrl: './tree-grid-remote-paging-sample.component.html'
})
export class TreeGridRemotePagingSampleComponent implements OnInit, AfterViewInit, OnDestroy {

    @ViewChild('treeGrid', { static: true }) public treeGrid: IgxTreeGridComponent;

    public page = 0;
    public lastPage = false;
    public firstPage = true;
    public totalPages = 1;
    public totalCount = 0;
    public maxPerPage = Number.MAX_SAFE_INTEGER;
    public data: Observable<any[]>;
    public selectOptions = [5, 10, 25, 50];
    private _perPage = 10;
    private _dataLengthSubscriber;

    constructor(
        private remoteService: RemotePagingService) {
    }

    public get perPage(): number {
        return this._perPage;
    }

    public set perPage(val: number) {
        this._perPage = val;
        this.paginate(0);
    }

    public ngOnInit() {
        this.data = this.remoteService.remoteData.asObservable();

        this._dataLengthSubscriber = this.remoteService.dataLength.subscribe((data) => {
            this.totalCount = data;
            this.totalPages = Math.ceil(data / this.perPage);
            this.treeGrid.isLoading = false;
        });
    }

    public ngOnDestroy() {
        if (this._dataLengthSubscriber) {
            this._dataLengthSubscriber.unsubscribe();
        }
    }

    public ngAfterViewInit() {
        this.treeGrid.isLoading = true;

        this.remoteService.getData(0, this.perPage);
        this.remoteService.getDataLength();
    }

    public paginate(page: number) {
        this.page = page;
        const skip = this.page * this.perPage;
        const top = this.perPage;
        this.remoteService.getData(skip, top);
    }

    public formatSize(value: number) {
        return formatNumber(value, 'en') + ' KB';
    }
}
