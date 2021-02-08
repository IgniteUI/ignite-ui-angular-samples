import { formatNumber } from "@angular/common";
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { GridPagingMode, IgxTreeGridComponent } from "igniteui-angular";
import { Observable } from "rxjs";
import { RemotePagingService } from "./remotePagingService";

@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [RemotePagingService],
    selector: "tree-grid-remote-paging-default-template",
    styleUrls: ["./tree-grid-remote-paging-default-template.component.scss"],
    templateUrl: "./tree-grid-remote-paging-default-template.component.html"
})
export class TreeGridRemotePagingDefaultTemplateComponent implements OnInit, AfterViewInit, OnDestroy {

    public totalCount = 0;
    public data: Observable<any[]>;
    public mode = GridPagingMode.remote;
    @ViewChild("treeGrid", { static: true }) public treeGrid: IgxTreeGridComponent;
    private _dataLengthSubscriber;

    constructor(
        private remoteService: RemotePagingService) {
    }

    public ngOnInit() {
        this.data = this.remoteService.remoteData.asObservable();

        this._dataLengthSubscriber = this.remoteService.dataLength.subscribe((data) => {
            this.totalCount = data;
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

        this.remoteService.getData(0, this.treeGrid.perPage);
        this.remoteService.getDataLength();
    }

    public paginate(page) {
        const skip = page.current * this.treeGrid.perPage;
        this.remoteService.getData(skip, this.treeGrid.perPage);
    }
    public log() {
        console.log(this.treeGrid.totalRecords, this.treeGrid.totalPages);
    }

    public getPage() {
        this.remoteService.getData(0, this.treeGrid.perPage);
    }

    public formatSize(value: number) {
        return formatNumber(value, "en") + " KB";
    }
}
