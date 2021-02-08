import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { GridPagingMode, IgxGridComponent } from "igniteui-angular";
import { Observable } from "rxjs";
import { RemotePagingService } from "../services/remotePagingService";

@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [RemotePagingService],
    selector: "remote-paging-default-template",
    styleUrls: ["./remote-paging-default-template.component.scss"],
    templateUrl: "./remote-paging-default-template.component.html"
})
export class RemotePagingDefaultTemplateComponent implements OnInit, AfterViewInit, OnDestroy {

    public totalCount = 0;
    public data: Observable<any[]>;
    public mode = GridPagingMode.remote;
    @ViewChild("grid1", { static: true }) public grid1: IgxGridComponent;

    private _dataLengthSubscriber;

    constructor(private remoteService: RemotePagingService) {
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
        this.remoteService.getData(0, this.grid1.perPage);
    }

    public pagingDone(page) {
        const skip = page.current * this.grid1.perPage;
        this.remoteService.getData(skip, this.grid1.perPage);
    }

    public paginate() {
        this.remoteService.getData(0, this.grid1.perPage);
    }
}
