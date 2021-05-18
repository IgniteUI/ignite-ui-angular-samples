import { ChangeDetectorRef, Component, TemplateRef, ViewChild, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { IgxColumnComponent, IgxGridComponent } from 'igniteui-angular';
import { debounceTime } from 'rxjs/operators';
import { RemoteServiceVirt } from '../services/remoteService';

@Component({
    providers: [RemoteServiceVirt],
    selector: 'app-grid-remote-virtualization-sample',
    styleUrls: ['grid-sample-4.component.css'],
    templateUrl: 'grid-sample-4.component.html'
})

export class GridRemoteVirtualizationSampleComponent implements OnInit, AfterViewInit, OnDestroy{
    @ViewChild('grid', { static: true }) public grid: IgxGridComponent;
    @ViewChild('remoteDataLoadingLarge', { read: TemplateRef, static: true })
    public remoteDataLoadingLargeTemplate: TemplateRef<any>;
    @ViewChild('remoteDataLoadingMedium', { read: TemplateRef, static: true })
    public remoteDataLoadingMediumTemplate: TemplateRef<any>;
    @ViewChild('remoteDataLoadingSmall', { read: TemplateRef, static: true })
    public remoteDataLoadingSmallTemplate: TemplateRef<any>;

    public remoteData: any;

    private _columnCellCustomTemplates: Map<IgxColumnComponent, TemplateRef<any>>;
    private _prevRequest: any;

    constructor(private _remoteService: RemoteServiceVirt, public cdr: ChangeDetectorRef) { }

    public ngOnInit(): void {
        this.remoteData = this._remoteService.data;
        this._columnCellCustomTemplates = new Map<IgxColumnComponent, TemplateRef<any>>();
    }

    public ngAfterViewInit() {
        this.grid.isLoading = true;

        this._remoteService.getData(this.grid.virtualizationState, this.grid.sortingExpressions[0], true,
        (data) => {
            this.grid.totalItemCount = data['@odata.count'];
            this.grid.isLoading = false;
        }, {
            startIndex: this.grid.virtualizationState.startIndex,
            chunkSize: 20
        });

        this.grid.dataPreLoad.pipe().subscribe(() => {
            this._remoteService.getDataFromCache(this.grid.virtualizationState,
                this.grid.sortingExpressions[0], false, () => {
                    this.cdr.detectChanges();
                });
        });

        this.grid.dataPreLoad.pipe(debounceTime(500)).subscribe(() => {
            this.processData(false);
        });
    }

    public handlePreLoad() {
        this.processData(false);
    }

    public processData(reset) {
        if (this._prevRequest) {
            this._prevRequest.unsubscribe();
        }
        let state;
        if (!reset) {
            state = {
                startIndex: this.grid.virtualizationState.startIndex,
                chunkSize: 20
            };
        }
        this._prevRequest = this._remoteService.getData(this.grid.virtualizationState,
            this.grid.sortingExpressions[0], reset, () => {
                this.cdr.detectChanges();
            }, state);
    }

    public formatNumber(value: number) {
        return value.toFixed(2);
    }

    public formatCurrency(value: number) {
        return '$' + value.toFixed(2);
    }

    public ngOnDestroy() {
        if (this._prevRequest) {
            this._prevRequest.unsubscribe();
        }
    }

    public getDataLoadingTemplate(): TemplateRef<any> {
        const val = Math.floor(Math.random() * 3) + 1;

        switch (val) {
            case 1: return this.remoteDataLoadingLargeTemplate;
            case 2: return this.remoteDataLoadingMediumTemplate;
            case 3: return this.remoteDataLoadingSmallTemplate;
        }
    }
}
