/* eslint-disable @typescript-eslint/naming-convention */
import { AfterViewInit, Component, Injectable, ViewChild, OnInit } from '@angular/core';

import { IgxBannerComponent, IgxGridComponent, IgxSnackbarComponent } from 'igniteui-angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { DATA } from '../services/financialData';

@Injectable()
export class LocalService {
    public records: Observable<any[]>;
    private _records: BehaviorSubject<any[]>;

    constructor() {
        this._records = new BehaviorSubject([]);
        this.records = this._records.asObservable();
    }

    public getData(count?: number) {
        let financialData = DATA;
        if (count) {
            financialData = this.generateData(count);
        }
        this._records.next(financialData);
    }
    private generateData(count: number): any[] {
        const currData = [];
        for (let i = 0; i < count; i++) {
            const rand = Math.floor(Math.random() * Math.floor(DATA.length));
            const dataObj = Object.assign({}, DATA[rand]);
            this.randomizeObjectData(dataObj, i);
            currData.push(dataObj);
        }
        return currData;
    }
    private randomizeObjectData(dataObj, index) {
        const changeP = 'Change(%)';
        const res = this.generateNewPrice(dataObj.Price);
        dataObj.Change = res.Price - dataObj.Price;
        dataObj.Price = res.Price;
        dataObj[changeP] = res.ChangePercent;
        dataObj['ID'] = index;
    }
    private generateNewPrice(oldPrice): any {
        const rnd = parseFloat(Math.random().toFixed(2));
        const volatility = 2;
        let newPrice = 0;

        let changePercent = 2 * volatility * rnd;
        if (changePercent > volatility) {
            changePercent -= (2 * volatility);
        }

        const changeAmount = oldPrice * (changePercent / 100);
        newPrice = oldPrice + changeAmount;

        const result = { Price: 0, ChangePercent: 0 };
        result.Price = parseFloat(newPrice.toFixed(2));
        result.ChangePercent = parseFloat(changePercent.toFixed(2));

        return result;
    }
}

@Component({
    providers: [LocalService],
    selector: 'app-grid-sample',
    styleUrls: ['./grid-selection.component.css'],
    templateUrl: 'grid-selection.component.html'
})

export class GridSelectionSampleComponent implements AfterViewInit, OnInit {
    @ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;
    @ViewChild(IgxSnackbarComponent, { static: true }) public snackbar: IgxSnackbarComponent;
    public data: Observable<any[]>;
    public selectionMode = 'multiple';
    public selectionModes = [];
    public hideRowSelectors = false;
    public selectedRows = [1, 2, 3];

    constructor(private localService: LocalService) {
        this.localService.getData(100000);
        this.data = this.localService.records;
        this.selectionModes = [
            { label: 'none', selected: this.selectionMode === 'none', togglable: true },
            { label: 'single', selected: this.selectionMode === 'single', togglable: true },
            { label: 'multiple', selected: this.selectionMode === 'multiple', togglable: true }
        ];

    }
    public ngOnInit(): void {
        this.snackbar.autoHide = false;
        this.snackbar.open();
    }

    public ngAfterViewInit(): void {
    }

    public formatNumber(value: number) {
        return value.toFixed(2);
    }
    public formatCurrency(value: number) {
        return '$' + value.toFixed(2);
    }
    public handleRowSelection(event) {
        const targetCell = event.cell;
    }

    public selectCellSelectionMode(args) {
        this.selectionMode = this.selectionModes[args.index].label;
        this.snackbar.open();
    }
}
