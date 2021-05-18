import { AfterViewInit, Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { GridPagingMode, IgxGridComponent } from 'igniteui-angular';
import { Observable } from 'rxjs';
import { RemotePagingService } from '../services/remotePagingService';

@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [RemotePagingService],
    selector: 'app-remote-paging-default-template',
    styleUrls: ['./remote-paging-default-template.component.css'],
    templateUrl: './remote-paging-default-template.component.html'
})
export class RemotePagingDefaultTemplateComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;
    @ViewChild('customPager', { read: TemplateRef, static: true }) public remotePager: TemplateRef<any>;
    public totalCount = 0;
    public page = 0;
    public data: Observable<any[]>;
    public mode = GridPagingMode.Remote;
    public isLoading = true;

    private _dataLengthSubscriber;
    private _perPage = 10;

    public get perPage(): number {
        return this._perPage;
    }

    public set perPage(val: number) {
        this._perPage = val;
        this.paginate(0);
    }

    constructor(private remoteService: RemotePagingService) {
    }

    public ngOnInit() {
        this.data = this.remoteService.remoteData.asObservable();
        this.data.subscribe(() => {
            this.isLoading = false;
        });
        this._dataLengthSubscriber = this.remoteService.getDataLength().subscribe((data) => {
            this.totalCount = data;
        });
    }

    public ngOnDestroy() {
        if (this._dataLengthSubscriber) {
            this._dataLengthSubscriber.unsubscribe();
        }
    }

    public ngAfterViewInit() {
        this.remoteService.getData(0, this.grid1.perPage);
        this.remoteService.getDataLength();
    }

    public paginate(page) {
        this.isLoading = true;
        const skip = page * this.grid1.perPage;
        this.remoteService.getData(skip, this.grid1.perPage);
    }
}
