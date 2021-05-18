import { AfterViewInit, Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';
import { Observable } from 'rxjs';
import { RemotePagingService } from '../services/remotePagingService';
@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [RemotePagingService],
    selector: 'app-remote-paging-grid-sample',
    styleUrls: ['./remote-paging-sample.component.css'],
    templateUrl: './remote-paging-sample.component.html'
})
export class RemotePagingGridSampleComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('customPager', { read: TemplateRef, static: true }) public remotePager: TemplateRef<any>;
    @ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;
    public page = 0;
    public totalCount = 0;
    public pages = [];
    public data: Observable<any[]>;
    public selectOptions = [5, 10, 15, 25, 50];

    private _perPage = 10;
    private _dataLengthSubscriber;

    constructor(private remoteService: RemotePagingService) {
    }

    public get perPage(): number {
        return this._perPage;
    }

    public set perPage(val: number) {
        this._perPage = val;
        // this.paginate(0);
    }

    public ngOnInit() {
        this.data = this.remoteService.remoteData.asObservable();

        this._dataLengthSubscriber = this.remoteService.getDataLength().subscribe((data) => {
            this.totalCount = data;
            this.grid1.isLoading = false;
        });
    }

    public ngOnDestroy() {
        if (this._dataLengthSubscriber) {
            this._dataLengthSubscriber.unsubscribe();
        }
    }

    public ngAfterViewInit() {
        this.grid1.isLoading = true;
        this.remoteService.getData(0, this.perPage);
    }

    public paginate(page: number) {
        this.page = page;
        const skip = this.page * this.perPage;
        const top = this.perPage;

        this.remoteService.getData(skip, top);
    }

    public perPageChange(perPage: number) {
        const skip = this.page * perPage;
        const top = perPage;

        this.remoteService.getData(skip, top);
    }
}
