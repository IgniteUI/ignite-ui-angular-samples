/* eslint-disable @typescript-eslint/naming-convention */
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { IgxDialogComponent, IgxGridComponent, Transaction } from 'igniteui-angular';
import { Observable } from 'rxjs';
import { RemotePagingService } from '../../services/remotePaging.service';

@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [RemotePagingService],
    selector: 'app-remote-paging-batch-editing',
    styleUrls: ['./batch-editing-remote-paging.component.scss'],
    templateUrl: './batch-editing-remote-paging.component.html'
})
export class RemotePagingBatchEditingComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;
    @ViewChild(IgxDialogComponent, { static: true }) public dialog: IgxDialogComponent;

    public page = 0;
    public totalCount = 0;
    public data: Observable<any[]>;
    public selectOptions = [5, 10, 15, 25, 50];
    public transactionsData: Transaction[] = [];

    private _perPage = 10;
    private _dataLengthSubscriber;
    private _recordOnServer = 0;
    private _totalPagesOnServer = 0;
    constructor(private remoteService: RemotePagingService) {
    }

    public get perPage(): number {
        return this._perPage;
    }

    public set perPage(val: number) {
        this._perPage = val;
        this._totalPagesOnServer = Math.floor(this._recordOnServer / this.perPage);
        this.paginate(0);
    }

    public ngOnInit() {
        this.data = this.remoteService.remoteData.asObservable();
        this._dataLengthSubscriber = this.remoteService.getDataLength().subscribe((data) => {
            this.totalCount = data;
            this._recordOnServer = data;
            this._totalPagesOnServer = Math.floor(this.totalCount / this.perPage);
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
        this.grid1.endEdit(true);
        if (page > this._totalPagesOnServer) {
            if (this.page !== this._totalPagesOnServer) {
                const skipEl = this._totalPagesOnServer * this.perPage;
                this.remoteService.getData(skipEl, this.perPage);
            }
            this.grid1.page = page - this._totalPagesOnServer;
            this.page = page;
            return;
        } else {
            this.grid1.page = 0;
        }
        this.page = page;
        const skip = this.page * this.perPage;
        this.remoteService.getData(skip, this.perPage);
    }

    public addRow() {
        this.totalCount++;
        const newID = this.generateRandomInteger(this.totalCount, this.totalCount * 100);
        this.grid1.addRow({
            ID: newID, ProductName: 'Product Name', QuantityPerUnit: 'Quantity per Unit',
            SupplierName: 'Supplier Name', UnitsInStock: 1, Rating: 1
        });
    }

    public deleteRow(rowID) {
        if (!this.grid1.data.some(d => d.ID === rowID)) {
            this.totalCount--;
        }
        this.grid1.deleteRow(rowID);
        if (this.grid1.dataView.length === 1) {
            this.paginate(this.page - 1);
        }
    }

    public generateRandomInteger(start: number, end: number) {
        return Math.floor(Math.random() * (end - start + 1)) + start;
    }

    public undo() {
        this.grid1.transactions.undo();
    }

    public redo() {
        this.grid1.transactions.redo();
    }

    public openCommitDialog() {
        this.transactionsData = this.grid1.transactions.getAggregatedChanges(true);
        this.dialog.open();
    }

    public commit() {
        this.grid1.transactions.commit(this.grid1.data);
        this.dialog.close();
    }

    public cancel() {
        this.dialog.close();
    }

    public discard() {
        this.grid1.transactions.clear();
        this.totalCount = this._recordOnServer;
        this._totalPagesOnServer = Math.floor(this._recordOnServer / this.perPage);
        this.paginate(this._totalPagesOnServer);
        this.dialog.close();
    }

    public get hasTransactions(): boolean {
        return this.grid1.transactions.getAggregatedChanges(false).length > 0;
    }

    public stateFormatter(value: string) {
        return JSON.stringify(value);
    }

    public typeFormatter(value: string) {
        return value.toUpperCase();
    }

    public classFromType(type: string): string {
        return `transaction--${type.toLowerCase()}`;
    }
}
