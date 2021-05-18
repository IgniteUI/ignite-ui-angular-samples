import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IgxTreeGridComponent, NoopFilteringStrategy } from 'igniteui-angular';
import { Observable, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { RemoteFilteringService } from '../services/remoteFilteringService';

const DEBOUNCE_TIME = 300;

@Component({
    providers: [RemoteFilteringService],
    selector: 'app-tree-grid-remote-filtering-sample',
    styleUrls: ['./tree-grid-remote-filtering-sample.component.css'],
    templateUrl: './tree-grid-remote-filtering-sample.component.html'
})
export class TreeGridRemoteFilteringSampleComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('treeGrid', { static: true }) public treeGrid: IgxTreeGridComponent;
    public remoteData: Observable<any[]>;
    public noopFilterStrategy = NoopFilteringStrategy.instance();

    private destroy$ = new Subject<boolean>();

    constructor(private _remoteService: RemoteFilteringService, private _cdr: ChangeDetectorRef) {
    }

    public ngOnInit() {
        this.remoteData = this._remoteService.remoteData;
    }

    public ngAfterViewInit() {
        this.processData();
        this._cdr.detectChanges();

        this.treeGrid.filteringExpressionsTreeChange.pipe(
            debounceTime(DEBOUNCE_TIME),
            takeUntil(this.destroy$)
        ).subscribe(() => {
            this.processData();
        });
    }

    public processData() {
        this.treeGrid.isLoading = true;

        const filteringExpr = this.treeGrid.filteringExpressionsTree;

        this._remoteService.getData(filteringExpr, () => {
            this.treeGrid.isLoading = false;
        });
    }

    public ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
