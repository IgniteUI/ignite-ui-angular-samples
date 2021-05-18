import { AfterViewInit, Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';
import { Observable } from 'rxjs';
import { RemotePagingService } from '../services/remotePagingService';
@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [RemotePagingService],
    selector: 'app-custom-remote-paging-grid-sample',
    styleUrls: ['./custom-remote-paging-sample.component.css'],
    templateUrl: './custom-remote-paging-sample.component.html'
})
export class CustomRemotePagingGridSampleComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('customPager', { read: TemplateRef, static: true }) public remotePager: TemplateRef<any>;
    @ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;

    public page = 0;
    public lastPage = false;
    public firstPage = true;
    public totalPages = 1;
    public totalCount = 0;
    public pages = [];
    public title = 'gridPaging';
    public data: Observable<any[]>;

    private visibleElements = 5;
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
        this.paginate(0, true);
    }

    public get shouldShowLastPage() {
        return this.pages[this.pages.length - 1] !== this.totalPages - 1;
    }

    public get shouldShowFirstPage() {
        return this.pages[0] !== 0;
    }

    public ngOnInit() {
        this.data = this.remoteService.remoteData.asObservable();

        this._dataLengthSubscriber = this.remoteService.getDataLength().subscribe((data) => {
            this.totalCount = data;
            this.totalPages = Math.ceil(data / this.perPage);
            this.buttonDeselection(this.page, this.totalPages);
            this.grid1.isLoading = false;
            this.setNumberOfPagingItems(this.page, this.totalPages);
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

    public nextPage() {
        this.firstPage = false;
        this.page++;
        const skip = this.page * this.perPage;
        const top = this.perPage;
        this.remoteService.getData(skip, top);
        if (this.page + 1 >= this.totalPages) {
            this.lastPage = true;
        }
        this.setNumberOfPagingItems(this.page, this.totalPages);
    }

    public previousPage() {
        this.lastPage = false;
        this.page--;
        const skip = this.page * this.perPage;
        const top = this.perPage;
        this.remoteService.getData(skip, top);
        if (this.page <= 0) {
            this.firstPage = true;
        }
        this.setNumberOfPagingItems(this.page, this.totalPages);
    }

    public paginate(page: number, recalc = false) {
        this.page = page;
        const skip = this.page * this.perPage;
        const top = this.perPage;
        if (recalc) {
            this.totalPages = Math.ceil(this.totalCount / this.perPage);
        }
        this.setNumberOfPagingItems(this.page, this.totalPages);
        this.remoteService.getData(skip, top);
        this.buttonDeselection(this.page, this.totalPages);
    }

    public buttonDeselection(page: number, totalPages: number) {
        if (totalPages === 1) {
            this.lastPage = true;
            this.firstPage = true;
        } else if (page + 1 >= totalPages) {
            this.lastPage = true;
            this.firstPage = false;
        } else if (page !== 0 && page !== totalPages) {
            this.lastPage = false;
            this.firstPage = false;
        } else {
            this.lastPage = false;
            this.firstPage = true;
        }
    }

    public activePage(page) {
        return page === this.page ? 'activePage' : '';
    }

    public setNumberOfPagingItems(currentPage, totalPages) {
        if (currentPage > this.pages[0] && currentPage < this.pages[this.pages.length]) {
            return;
        }
        if (this.pages.length === 0) {
            const lastPage = (currentPage + this.visibleElements) <= totalPages ?
                currentPage + this.visibleElements : totalPages;
            for (let item = 0; item < lastPage; item++) {
                this.pages.push(item);
            }
            return;
        }
        if (currentPage <= this.pages[0]) {
            this.pages = [];
            let firstPage = currentPage - 1 < 0 ? 0 : currentPage - 1;
            firstPage = firstPage > totalPages - this.visibleElements ?
                totalPages - this.visibleElements : firstPage;
            firstPage = firstPage >= 0 ? firstPage : 0;
            const lastPage = (firstPage + this.visibleElements) <= totalPages ?
                firstPage + this.visibleElements : totalPages;
            for (let item = firstPage; item < lastPage; item++) {
                this.pages.push(item);
            }

        } else if (currentPage >= this.pages[this.pages.length - 1]) {
            this.pages = [];
            let firstPage = currentPage > totalPages - this.visibleElements ?
                totalPages - this.visibleElements : currentPage - 1;
            firstPage = firstPage >= 0 ? firstPage : 0;
            const lastPage = (firstPage + this.visibleElements) <= totalPages ?
            firstPage + this.visibleElements : totalPages;
            for (let item = firstPage; item < lastPage; item++) {
                this.pages.push(item);
            }
        }
    }
}
