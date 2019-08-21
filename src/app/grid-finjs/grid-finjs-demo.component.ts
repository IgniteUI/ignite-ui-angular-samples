import { AfterViewInit, Component, ElementRef, Inject, OnDestroy, OnInit, ViewChild } from "@angular/core";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import { DefaultSortingStrategy, IgxButtonGroupComponent, IgxGridComponent, IgxSliderComponent,
    SortingDirection} from "igniteui-angular";
import { IgxDataChartComponent } from "igniteui-angular-charts/ES5/igx-data-chart-component";
import { Observable, timer } from "rxjs";
import { debounce } from "rxjs/operators";
import { ContextDialogWithChartComponent
} from "./context-dialog-with-chart/context-dialog-with-chart.component";
import { LocalDataService } from "./localData.service";

@Component({
    providers: [LocalDataService],
    selector: "app-grid-component",
    styleUrls: ["./grid-finjs-demo.component.scss"],
    templateUrl: "./grid-finjs-demo.component.html"
})
export class FinJSDemoComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild("grid1", { static: true }) public grid1: IgxGridComponent;
    @ViewChild("buttonGroup1", { static: true }) public buttonGroup1: IgxButtonGroupComponent;
    @ViewChild("buttonGroup2", { static: true }) public buttonGroup2: IgxButtonGroupComponent;
    @ViewChild("slider1", { static: true }) public volumeSlider: IgxSliderComponent;
    @ViewChild("slider2", { static: true }) public intervalSlider: IgxSliderComponent;

    public theme = false;
    public volume = 1000;
    public frequency = 500;
    public data = [];
    public selectedData = [];
    public chartData = [];
    public multiCellSelection: { data: any[]} = { data: []};
    public controls = [
        {
            disabled: false,
            icon: "update",
            label: "LIVE PRICES",
            selected: false
        },
        {
            disabled: false,
            icon: "update",
            label: "LIVE ALL PRICES",
            selected: false
        },
        {
            disabled: true,
            icon: "stop",
            label: "Stop",
            selected: false
        },
        {
            disabled: false,
            icon: "update",
            label: "Chart",
            selected: false
        }
    ];
    private subscription;
    private selectedButton;
    private _timer;
    private volumeChanged;
    constructor(public dialog: MatDialog, private localService: LocalDataService, private elRef: ElementRef) {
        this.subscription = this.localService.getData(this.volume);
        this.localService.records.subscribe(x => { this.data = x; });
    }

    public ngOnInit() {
        this.selectedData = this.data;
        this.grid1.groupingExpressions = [{
                dir: SortingDirection.Desc,
                fieldName: "Category",
                ignoreCase: false,
                strategy: DefaultSortingStrategy.instance()
            },
            {
                dir: SortingDirection.Desc,
                fieldName: "Type",
                ignoreCase: false,
                strategy: DefaultSortingStrategy.instance()
            },
            {
                dir: SortingDirection.Desc,
                fieldName: "Contract",
                ignoreCase: false,
                strategy: DefaultSortingStrategy.instance()
            }
        ];
        this.volumeChanged = this.volumeSlider.onValueChange.pipe(debounce(() => timer(200)));
        this.volumeChanged.subscribe(
            (x) => {
                this.localService.getData(this.volume);
            },
            (err) => console.log("Error: " + err));
    }

    public ngAfterViewInit() {
        this.grid1.reflow();
    }

    public transferData(args, grid1: IgxGridComponent, target: IgxDataChartComponent) {
        this.multiCellSelection = {
            data: this.grid1.selectedRows()
        };
        const range = {
            rowStart: args.rowStart, rowEnd: args.rowEnd, columnStart: args.columnStart, columnEnd: args.columnEnd };
        this.grid1.deselectAllRows();
        this.grid1.clearCellSelection();
        this.grid1.selectRange(range);
        this.selectedData = this.grid1.getSelectedData();

}
    public transferDataFromCheckboxSelection(args, source: IgxGridComponent, target: IgxDataChartComponent) {
        this.grid1.clearCellSelection();

        this.selectedData = args.newSelection;
        const pushData = [];
        this.selectedData.forEach(element => {
            pushData.push(this.grid1.data[element]);
        });
        this.selectedData = pushData;
}

    public onButtonAction(event: any) {
        switch (event.index) {
            case 0: {
                    this.disableOtherButtons(event.index, true);
                    const currData = this.grid1.data;
                    this._timer = setInterval(() => this.ticker(currData), this.frequency);
                    break;
                }
            case 1: {
                    this.disableOtherButtons(event.index, true);
                    const currData = this.grid1.data;
                    this._timer = setInterval(() => this.tickerAllPrices(currData), this.frequency);
                    break;
                }
            case 2: {
                this.disableOtherButtons(event.index, false);
                this.stopFeed();
                break;
            }
            case 3: {
                this.disableOtherButtons(event.index, true);
                this.openDialog();
                break;
            }
            default:
                {
                    break;
                }
        }
    }

    public openDialog(): void {
        console.log(this.selectedData);
        const dialogRef = this.dialog.open(ContextDialogWithChartComponent, {
                data: this.selectedData
        });
        dialogRef.afterClosed().subscribe(result => {
          this.buttonGroup1.selectButton(2);

          console.log("The dialog was closed");
        });
      }

    public onChange(event: any) {
        if (this.grid1.groupingExpressions.length > 0) {
            this.grid1.groupingExpressions = [];
        } else {
            this.grid1.groupingExpressions = [{
                dir: SortingDirection.Desc,
                fieldName: "Category",
                ignoreCase: false,
                strategy: DefaultSortingStrategy.instance()
            },
            {
                dir: SortingDirection.Desc,
                fieldName: "Type",
                ignoreCase: false,
                strategy: DefaultSortingStrategy.instance()
            },
            {
                dir: SortingDirection.Desc,
                fieldName: "Contract",
                ignoreCase: false,
                strategy: DefaultSortingStrategy.instance()
            }
        ];
        }
    }

    public stopFeed() {
        if (this._timer) {
            clearInterval(this._timer);
        }
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    public formatNumber(value: number) {
        return value.toFixed(2);
    }

    public percentage(value: number) {
        return value.toFixed(2) + "%";
    }

    public formatCurrency(value: number) {
        return "$" + value.toFixed(3);
    }

    /**
     * the below code is needed when accessing the sample through the navigation
     * it will style all the space below the sample component element, but not the navigation menu
     */
    public onThemeChanged(event: any) {
        const parentEl = this.parentComponentEl();
        if (event.checked && parentEl.classList.contains("main")) {
            parentEl.classList.add("fin-dark-theme");
        } else {
            parentEl.classList.remove("fin-dark-theme");
        }
    }

    public ngOnDestroy() {
        this.stopFeed();
        this.volumeChanged.unsubscribe();
    }

    public toggleToolbar(event: any) {
        this.grid1.showToolbar = !this.grid1.showToolbar;
    }

    private negative = (rowData: any): boolean => {
        return rowData["Change(%)"] < 0;
    }
    private positive = (rowData: any): boolean => {
        return rowData["Change(%)"] > 0;
    }
    private changeNegative = (rowData: any): boolean => {
        return rowData["Change(%)"] < 0 && rowData["Change(%)"] > -1;
    }
    private changePositive = (rowData: any): boolean => {
        return rowData["Change(%)"] > 0 && rowData["Change(%)"] < 1;
    }
    private strongPositive = (rowData: any): boolean => {
        return rowData["Change(%)"] >= 1;
    }
    private strongNegative = (rowData: any, key: string): boolean => {
        return rowData["Change(%)"] <= -1;
    }

    // tslint:disable:member-ordering
    public trends = {
        changeNeg: this.changeNegative,
        changePos: this.changePositive,
        negative: this.negative,
        positive: this.positive,
        strongNegative: this.strongNegative,
        strongPositive: this.strongPositive
    };

    public trendsChange = {
        changeNeg2: this.changeNegative,
        changePos2: this.changePositive,
        strongNegative2: this.strongNegative,
        strongPositive2: this.strongPositive
    };
    // tslint:enable:member-ordering

    private disableOtherButtons(ind: number, disableButtons: boolean) {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.volumeSlider.disabled = disableButtons;
        this.intervalSlider.disabled = disableButtons;
        this.selectedButton = ind;
        this.buttonGroup1.buttons.forEach((button, index) => {
            if (index === 2) { button.disabled = !disableButtons; } else {
                this.buttonGroup1.buttons[0].disabled = disableButtons;
                this.buttonGroup1.buttons[1].disabled = disableButtons;
            }
        });
    }

    /**
     * returns the main div container of the Index Component,
     * if path is /samples/sample-url, or the appRoot, if path is /sample-url
     */
    private parentComponentEl() {
        return this.elRef.nativeElement.parentElement.parentElement;
    }

    private ticker(data: any) {
        this.grid1.data = this.updateRandomPrices(data);
    }

    private tickerAllPrices(data: any) {
        this.grid1.data = this.updateAllPrices(data);
    }

    /**
     * Updates values in every record
     */
    private updateAllPrices(data: any[]): any {
        const newData = data.slice();
        for (const dataRow of newData) {
          this.randomizeObjectData(dataRow);
        }
        return newData;
    }

    /**
     * Updates values in random number of records
     */
    private updateRandomPrices(data: any[]): any {
        const newData = data.slice();
        let y = 0;
        for (let i = Math.round(Math.random() * 10); i < newData.length; i += Math.round(Math.random() * 10)) {
          this.randomizeObjectData(newData[i]);
          y++;
        }
        return newData;
    }

    /**
     * Generates ne values for Change, Price and ChangeP columns
     */
    private randomizeObjectData(dataObj) {
        const changeP = "Change(%)";
        const res = this.generateNewPrice(dataObj.Price);
        dataObj.Change = res.Price - dataObj.Price;
        dataObj.Price = res.Price;
        dataObj[changeP] = res.ChangePercent;
    }

    private generateNewPrice(oldPrice): any {
        let rnd = Math.random();
        rnd = Math.round(rnd * 100) / 100;
        const volatility = 2;
        let newPrice = 0;
        let changePercent = 2 * volatility * rnd;
        if (changePercent > volatility) {
            changePercent -= (2 * volatility);
        }
        const changeAmount = oldPrice * (changePercent / 100);
        newPrice = oldPrice + changeAmount;
        newPrice = Math.round(newPrice * 100) / 100;
        const result = {Price: 0, ChangePercent: 0};
        changePercent = Math.round(changePercent * 100) / 100;
        result.Price = newPrice;
        result.ChangePercent = changePercent;

        return result;
    }

    get grouped(): boolean {
        return this.grid1.groupingExpressions.length > 0;
    }

    get buttonSelected(): number {
      return this.selectedButton || this.selectedButton === 0 ? this.selectedButton : -1;
    }
}
