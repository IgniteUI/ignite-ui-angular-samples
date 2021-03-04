import { AfterViewInit, Component, EventEmitter, NgZone, OnDestroy, Output, ViewChild } from "@angular/core";
import { IDialogEventArgs, IgxDialogComponent } from 'igniteui-angular';
import { IgxCategoryChartComponent } from 'igniteui-angular-charts';
import { ControllerComponent } from './controllers.component';
import { GridFinJSComponent } from './grid-finjs.component';
import { SignalRService } from "./signal-r.service";

@Component({
    selector: "app-finjs-main",
    styleUrls: ["./main.component.scss"],
    templateUrl: "./main.component.html"
})
export class FinJSDemoComponent implements AfterViewInit, OnDestroy {
    @ViewChild('finGrid', { static: true }) public finGrid: GridFinJSComponent;
    @ViewChild('controllers', { static: true }) public controller: ControllerComponent;
    @ViewChild("dialog", { static: true }) public dialog: IgxDialogComponent;
    @ViewChild("chart1", { static: true }) public chart: IgxCategoryChartComponent;

    @Output() public switch = new EventEmitter<any>();
    @Output() public recordsVolume = new EventEmitter<any>();
    @Output() public frequencyTimer = new EventEmitter<any>();
    @Output() public player = new EventEmitter<any>();

    public properties = ["Price", "Country"];
    public chartData = [];
    public selectionMode = 'multiple';
    private subscription$;
    public darkTheme = false;
    public volume = 1000;
    public frequency = 500;
    private _timer;

    constructor(private zone: NgZone, public signalRService: SignalRService ) {
    }

    public ngAfterViewInit() {
        setTimeout(() => {
            this.selectFirstGroupAndFillChart();
        }, 2000);
    }

    public ngOnInit() {
    }

    public onSwitchChanged(event: any) {
        switch (event.action) {
            case 'toolbar': {
                this.finGrid.showToolbar = event.value;
                break;
            }
            case 'grouped': {
                this.finGrid.toggleGrouping();
                break;
            }
            case 'theme': {
                this.darkTheme = event.value;
                break;
            }
            default:
                {
                    break;
                }
        }
    }

    public onVolumeChanged(volume: any) {
        this.signalRService.broadcastParams(this.controller.frequency, volume);
    }

    public onFrequencyChanged(frequency: any) {
        this.signalRService.broadcastParams(frequency, this.controller.volume);
    }

    public onPlayAction(event: any) {
        switch (event.action) {
            case 'playAll': {
                const currData = this.finGrid.grid.data;
                this._timer = setInterval(() =>  this.zone.runOutsideAngular(() => this.finGrid.finService.updateAllPriceValues(currData)), this.controller.frequency);
                break;
            }
            case 'playRandom': {
                const currData = this.finGrid.grid.filteredSortedData ?? this.finGrid.grid.data;
                this._timer = setInterval(() => this.zone.runOutsideAngular(() => this.finGrid.finService.updateRandomPriceValues(currData)), this.controller.frequency);
                break;
            }
            case 'stop': {
                this.stopFeed();
                break;
            }
            case 'chart': {
                this.setChartData(this.finGrid.grid.selectedRows);
                this.dialog.open()
                break;
            }
            default:
                {
                    break;
                }
        }
    }

    public setChartData(args: any[]) {
        this.chartData = [];
        args.forEach(row => {
            this.chartData.push(this.finGrid.grid.data[row]);
            this.chart.notifyInsertItem(this.chartData, this.chartData.length - 1,
                this.finGrid.grid.data[row]);
        });
        this.controller.controls[3].disabled = this.chartData.length === 0;
        this.setLabelIntervalAndAngle();
        this.setChartConfig("Countries", "Prices (USD)", "Data Chart with prices by Category and Country");
    }

    public onCloseHandler(evt: IDialogEventArgs) {
        if (this.finGrid.grid.navigation.activeNode) {
            if (this.finGrid.grid.navigation.activeNode.row === -1) {
                this.finGrid.grid.theadRow.nativeElement.focus();
            } else {
                this.finGrid.grid.tbody.nativeElement.focus();
            }
        }
    }

    public closeDialog(evt) {
        if (this.dialog.isOpen &&
            evt.shiftKey === true && evt.ctrlKey === true && evt.key.toLowerCase() === "d") {
            evt.preventDefault();
            this.dialog.close();
        }
    }

    public selectFirstGroupAndFillChart() {
        this.setChartConfig("Countries", "Prices (USD)", "Data Chart with prices by Category and Country");
        // tslint:disable-next-line: max-line-length
        if(this.finGrid.grid.groupsRecords.length !== 0) {
        const recordsToBeSelected = this.finGrid.grid.selectionService.getRowIDs(this.finGrid.grid.groupsRecords[0].groups[0].groups[0].records);
            recordsToBeSelected.forEach(item => {
                this.finGrid.grid.selectionService.selectRowById(item, false, true);
            });
        }
    }
    public setChartConfig(xAsis, yAxis, title) {
        // update label interval and angle based on data
        this.setLabelIntervalAndAngle();
        this.chart.xAxisTitle = xAsis;
        this.chart.yAxisTitle = yAxis;
        this.chart.chartTitle = title;
    }
    public setLabelIntervalAndAngle() {
        const intervalSet = this.chartData.length;
        if (intervalSet < 10) {
            this.chart.xAxisLabelAngle = 0;
            this.chart.xAxisInterval = 1;
        } else if (intervalSet < 15) {
            this.chart.xAxisLabelAngle = 30;
            this.chart.xAxisInterval = 1;
        } else if (intervalSet < 40) {
            this.chart.xAxisLabelAngle = 90;
            this.chart.xAxisInterval = 1;
        } else if (intervalSet < 100) {
            this.chart.xAxisLabelAngle = 90;
            this.chart.xAxisInterval = 3;
        } else if (intervalSet < 200) {
            this.chart.xAxisLabelAngle = 90;
            this.chart.xAxisInterval = 5;
        } else if (intervalSet < 400) {
            this.chart.xAxisLabelAngle = 90;
            this.chart.xAxisInterval = 7;
        } else if (intervalSet > 400) {
            this.chart.xAxisLabelAngle = 90;
            this.chart.xAxisInterval = 10;
        }
        this.chart.yAxisAbbreviateLargeNumbers = true;
    }

    public openSingleRowChart(rowData: any) {
        this.chartData = [];
        setTimeout(() => {
            this.chartData = this.finGrid.grid.data.filter(item => item.region === rowData.region &&
                item.category === rowData.category);

            this.chart.notifyInsertItem(this.chartData, this.chartData.length - 1, {});

            this.setLabelIntervalAndAngle();
            this.chart.chartTitle = "Data Chart with prices of " + this.chartData[0].category + " in " +
                this.chartData[0].region + " Region";

            this.dialog.open();
        }, 200);
    }


    public stopFeed() {
        if (this._timer) {
            clearInterval(this._timer);
        }
        if (this.subscription$) {
            this.subscription$.unsubscribe();
        }
    }

    public ngOnDestroy() {
        this.stopFeed();
    }
}
