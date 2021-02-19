import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { GridPagingMode, IGridCreatedEventArgs, IgxHierarchicalGridComponent, IgxPaginatorComponent } from "igniteui-angular";

import { RemotePagingService } from "./remotePagingService";

@Component({
    providers: [RemotePagingService],
    selector: "hierarchical-grid-remote-paging-default-template",
    styleUrls: ["./hierarchical-grid-remote-paging-default-template.component.scss"],
    templateUrl: "hierarchical-grid-remote-paging-default-template.component.html"
})

export class HGridRemotePagingDefaultTemplateComponent implements OnInit, AfterViewInit, OnDestroy {

    public totalCount = 0;
    public page = 0;
    public perPage = 10;
    public mode = GridPagingMode.Remote;
    @ViewChild("hierarchicalGrid", { static: true }) public hierarchicalGrid: IgxHierarchicalGridComponent;
    private _dataLengthSubscriber;

    constructor(private remoteService: RemotePagingService) { }

    public ngOnInit(): void {
        this._dataLengthSubscriber = this.remoteService.getDataLength(
            { parentID: null, rootLevel: true, key: "Customers" }).subscribe((length) => {
                this.totalCount = length;
            });
    }

    public ngOnDestroy() {
        if (this._dataLengthSubscriber) {
            this._dataLengthSubscriber.unsubscribe();
        }
    }

    public ngAfterViewInit() {
        this.hierarchicalGrid.isLoading = true;
        const skip = this.page * this.perPage;
        this.remoteService.getData(
            { parentID: null, rootLevel: true, key: "Customers" }, skip, this.perPage)
            .subscribe((data) => {
                this.hierarchicalGrid.isLoading = false;
                this.hierarchicalGrid.data = data;
            },
                (error) => {
                    this.hierarchicalGrid.emptyGridMessage = error.message;
                    this.hierarchicalGrid.isLoading = false;
                    this.hierarchicalGrid.cdr.detectChanges();
                }
            );
    }

    public dateFormatter(val: string) {
        return new Intl.DateTimeFormat("en-US").format(new Date(val));
    }

    public gridCreated(event: IGridCreatedEventArgs, _foreignKey: string) {
        const dataState = {
            foreignKey: _foreignKey,
            key: event.owner.key,
            parentID: event.parentID,
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

    public paging(event: IPagingEventArgs) {
        const skip = event.newPage * this.perPage;

        this.remoteService.getData(
            { parentID: null, rootLevel: true, key: "Customers" }, skip, (event.owner as IgxPaginatorComponent).perPage)
            .subscribe((data) => {
                this.hierarchicalGrid.data = data;
                this.hierarchicalGrid.cdr.detectChanges();
            },
                (error) => {
                    this.hierarchicalGrid.emptyGridMessage = error.message;
                    this.hierarchicalGrid.data = null;
                    this.hierarchicalGrid.cdr.detectChanges();
                }
            );
    }

    public perPageChange(perPage: number) {
        const skip = this.page * perPage;
        this.remoteService.getData(
            { parentID: null, rootLevel: true, key: "Customers" }, skip, perPage)
            .subscribe((data) => {
                this.hierarchicalGrid.data = data;
                this.hierarchicalGrid.cdr.detectChanges();
            });
    }
}
