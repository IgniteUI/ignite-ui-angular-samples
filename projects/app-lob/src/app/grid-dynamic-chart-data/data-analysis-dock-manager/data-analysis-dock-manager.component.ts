// tslint:disable: max-line-length
import { ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, Pipe, PipeTransform, QueryList, ViewChild, ViewChildren, TemplateRef, AfterViewInit } from "@angular/core";
import { IgcDockManagerLayout, IgcDockManagerPaneType, IgcSplitPane, IgcSplitPaneOrientation } from "@infragistics/igniteui-dockmanager";
import { AutoPositionStrategy, CloseScrollStrategy, HorizontalAlignment, IgxDialogComponent, IgxGridComponent, IgxOverlayOutletDirective, IgxTabsComponent, VerticalAlignment, OverlaySettings } from "igniteui-angular";
import { noop, Subject } from "rxjs";
import { debounceTime, takeUntil, tap } from "rxjs/operators";
import { FinancialData } from "../../services/financialData";
import { ChartIntegrationDirective, IDeterminedChartTypesArgs } from "../directives/chart-integration/chart-integration.directive";
import { CHART_TYPE } from "../directives/chart-integration/chart-types";
import { ConditionalFormattingDirective } from "../directives/conditional-formatting/conditional-formatting.directive";
import { DockSlotComponent } from "./dock-slot/dock-slot.component";
import { FloatingPanesService } from "./floating-panes.service";
@Pipe({
    name: "hastDuplicateLayouts"
})
export class HastDuplicateLayouts implements PipeTransform {
    public transform(contentId: string, layout: IgcDockManagerLayout, chartTypes) {
        const count = this.hasDuplicateContentID(layout, contentId, 0);
        if (count === 0 && (chartTypes[contentId] || Object.keys(chartTypes).indexOf(contentId) !== -1)) {
            delete chartTypes[contentId];
            return false;
        }
        return count >= 1;

    }

    private hasDuplicateContentID = (ob, contentId, count) => {

        if (ob["contentId"] && ob["contentId"] === contentId) {
            count++;
        }

        for (const i in ob) {
            if (!ob.hasOwnProperty(i)) { continue; }

            if ((typeof ob[i]) === "object") {
                count = this.hasDuplicateContentID(ob[i], contentId, count);
            }
        }
        return count;
    }
}

@Component({
    selector: "app-data-analysis-dock-manager",
    templateUrl: "./data-analysis-dock-manager.component.html",
    styleUrls: ["./data-analysis-dock-manager.component.scss"],
    providers: [FloatingPanesService]
})
export class DataAnalysisDockManagerComponent implements OnInit, AfterViewInit {

    public data;

    @ViewChild("dock", { read: ElementRef })
    public dockManager: ElementRef<HTMLIgcDockmanagerElement>;

    @ViewChild(ConditionalFormattingDirective, { read: ConditionalFormattingDirective, static: true })
    public formatting: ConditionalFormattingDirective;

    @ViewChild(ChartIntegrationDirective, { read: ChartIntegrationDirective, static: true })
    public chartIntegration: ChartIntegrationDirective;

    @ViewChild("grid", { read: IgxGridComponent, static: true })
    public grid: IgxGridComponent;

    @ViewChild(IgxOverlayOutletDirective, { static: true })
    public outlet: IgxOverlayOutletDirective;

    @ViewChild("contextDialog", { static: true })
    public contextDialog: IgxDialogComponent;

    @ViewChild(IgxTabsComponent, { static: true })
    public tabs: IgxTabsComponent;

    @ViewChildren(DockSlotComponent)
    public dockSlots: QueryList<DockSlotComponent>;

    @ViewChild("template", { read: TemplateRef })
    public emptyChartTemplate: TemplateRef<any>;

    public chartData = [];
    public contextmenu = false;
    public contextmenuX = 0;
    public contextmenuY = 0;
    public selectedCharts = {};
    public range;
    public currentFormatter;

    protected destroy$ = new Subject<any>();
    private _contextDilogOverlaySettings: OverlaySettings = {
        closeOnOutsideClick: true,
        modal: false,
        outlet: null,
        scrollStrategy: new CloseScrollStrategy(),
        positionStrategy: null
    };

    private rowIndex;
    private colIndex;

    // tslint:disable-next-line: member-ordering
    public docLayout: IgcDockManagerLayout = {
        rootPane: {
            type: IgcDockManagerPaneType.splitPane,
            orientation: IgcSplitPaneOrientation.horizontal,
            panes: [
                {
                    type: IgcDockManagerPaneType.documentHost,
                    rootPane: {
                        type: IgcDockManagerPaneType.splitPane,
                        size: 75,
                        orientation: IgcSplitPaneOrientation.horizontal,
                        panes: [
                            {
                                type: IgcDockManagerPaneType.contentPane,
                                contentId: "grid",
                                header: "Grid"
                            }
                        ]
                    }
                },
                {
                    type: IgcDockManagerPaneType.contentPane,
                    contentId: "chart-types-content",
                    header: "Chart Types",
                    size: 20
                }
            ]
        },
        floatingPanes: []
    };

    constructor(private cdr: ChangeDetectorRef, private paneService: FloatingPanesService) {

    }

    public ngOnInit() {
        (this.tabs.headerContainer.nativeElement as HTMLElement).onpointerdown = event => event.stopPropagation();

        this.data = new FinancialData().generateData(1000);

        this.grid.onRangeSelection.pipe(tap(() => this.contextmenu ? this.disableContextMenu() : noop()), debounceTime(200))
            .subscribe(range => {
                this.chartData = this.grid.getSelectedData();
                this.range = range;
                this.renderButton();
                if (Object.keys(this.selectedCharts).length !== 0) {
                    setTimeout(() => {
                        Object.keys(this.selectedCharts).forEach((c: CHART_TYPE) => {
                            const chartHost = this.getChartHostFromSlot(c);
                            if (this.availableCharts.indexOf(c) !== -1) {
                                if (this.selectedCharts[c]) {
                                    this.selectedCharts[c] = this.chartIntegration.chartFactory(c, null, this.selectedCharts[c]);
                                } else {
                                    chartHost.viewContainerRef.clear();
                                    this.selectedCharts[c] = this.chartIntegration.chartFactory(c, chartHost.viewContainerRef);
                                }
                            } else {
                                chartHost.viewContainerRef.clear();
                                const embeddedView = chartHost.viewContainerRef.createEmbeddedView(this.emptyChartTemplate);
                                embeddedView.detectChanges();
                                this.selectedCharts[c] = undefined;
                            }
                        });
                    });
                }
            });
    }

    public getChartHostFromSlot(type: CHART_TYPE) {
        return this.dockSlots.find(s => s.id === type).chartHost;
    }

    public ngAfterViewInit(): void {
        console.log(this.emptyChartTemplate)
        this.allCharts = this.chartIntegration.getAllChartTypes();
        this.chartIntegration.onChartTypesDetermined.subscribe((args: IDeterminedChartTypesArgs) => {
            if (args.chartsAvailabilty.size === 0 || args.chartsForCreation.length === 0) {
                this.chartIntegration.disableCharts(this.allCharts);
            } else {
                args.chartsAvailabilty.forEach((isAvailable, chart) => {
                    if (args.chartsForCreation.indexOf(chart) === -1) {
                        this.chartIntegration.disableCharts([chart]);
                    } else {
                        this.chartIntegration.enableCharts([chart]);
                    }
                });
            }

            this.availableCharts = this.chartIntegration.getAvailableCharts();
        });
        this.cdr.detectChanges();

        this.formatting.onFormattersReady.pipe(takeUntil(this.destroy$)).subscribe(names => this.formattersNames = names);
        this.grid.onCellClick.pipe(takeUntil(this.destroy$)).subscribe(() => this.range = undefined);
        this.grid.onDataPreLoad.pipe(
            tap(() => this.contextmenu ? this.disableContextMenu() : noop()),
            debounceTime(250),
            takeUntil(this.destroy$))
            .subscribe(() => this.range && !this.contextmenu ? this.renderButton() : noop());
        this.grid.parentVirtDir.onChunkLoad.pipe(
            tap(() => this.contextmenu ? this.disableContextMenu() : noop()),
            debounceTime(250),
            takeUntil(this.destroy$))
            .subscribe(() => {
                if (this.range) { this.renderButton(); }
            });

        window.onresize = () => {
            const x = (this.dockManager.nativeElement.getBoundingClientRect().width / 3);
            const y = (this.dockManager.nativeElement.getBoundingClientRect().height / 3);
            this.paneService.initialPanePosition = { x, y };
        };

        setTimeout(() => {
            const x = (this.dockManager.nativeElement.getBoundingClientRect().width / 3);
            const y = (this.dockManager.nativeElement.getBoundingClientRect().height / 3);

            this.paneService.initialPanePosition = { x, y };

            const handler = (component) => {
                const _this = component;
                return {
                    deleteProperty(target, prop) {
                        if (target[prop].type) {
                            _this.paneService.removeChartPane(target[prop]);
                            _this.cdr.detectChanges();
                        }
                        return true;
                    }
                };
            };
            this.dockManager.nativeElement.layout.floatingPanes = new Proxy(this.dockManager.nativeElement.layout.floatingPanes, handler(this));

        }, 1000);
    }

    public ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.complete();
    }

    public formatCurrency(value: number) {
        return "$" + value.toFixed(3);
    }

    // tslint:disable: member-ordering
    public chartTypesMenuX;
    public chartTypesMenuY;

    public availableCharts: CHART_TYPE[] = [];
    public allCharts: CHART_TYPE[] = [];
    public chartTypes = ["Column", "Area", "Bar", "Line", "Scatter", "Pie"];

    public toggleContextDialog(btn) {
        if (!this.contextDialog.isOpen) {
            this._contextDilogOverlaySettings.outlet = this.outlet;
            const positionStrategy = {
                verticalStartPoint: VerticalAlignment.Bottom,
                target: btn,
                openAnimation: null,
                closeAnimation: null
            };

            if (((this.grid.visibleColumns.length - 1) - this.colIndex) < 2 || !this.grid.navigation.isColumnFullyVisible(this.colIndex + 1)) {
                positionStrategy["horizontalDirection"] = HorizontalAlignment.Left;
                positionStrategy["horizontalStartPoint"] = HorizontalAlignment.Right;
            } else {
                positionStrategy["horizontalDirection"] = HorizontalAlignment.Center;
                positionStrategy["horizontalStartPoint"] = HorizontalAlignment.Center;
            }
            this._contextDilogOverlaySettings.positionStrategy = new AutoPositionStrategy({ ...positionStrategy });
            this.contextDialog.open(this._contextDilogOverlaySettings);
        } else {
            this.contextDialog.close();
        }
    }

    public formattersNames = [];

    public createChart(type: CHART_TYPE) {

        const floatingPane: IgcSplitPane = {
            type: IgcDockManagerPaneType.splitPane,
            orientation: IgcSplitPaneOrientation.horizontal,
            panes: [
                {
                    type: IgcDockManagerPaneType.contentPane,
                    header: type,
                    contentId: type
                }
            ]
        };
        const splitPane: IgcSplitPane = {
            type: IgcDockManagerPaneType.splitPane,
            orientation: IgcSplitPaneOrientation.horizontal,
            floatingWidth: 400,
            floatingHeight: 300,
            panes: [floatingPane]
        };

        this.paneService.appendChartPane(splitPane);
        const chartHost = this.getChartHostFromSlot(type);
        chartHost.viewContainerRef.clear();
        const chart = this.chartIntegration.chartFactory(type, chartHost.viewContainerRef);

        this.dockManager.nativeElement.layout.floatingPanes.push(splitPane);
        this.docLayout = { ...this.dockManager.nativeElement.layout };
        this.selectedCharts[type] = chart;
        this.cdr.detectChanges();
    }

    public disableContextMenu() {
        this.contextmenu = false;
        this.contextDialog.close();
    }
    // What we check here and why we need a lister on host level
    @HostListener("pointerdown", ["$event"])
    public onPointerDown(event) {
        if (!event.target.parentElement.classList.contains("analytics-btn") &&
            event.target.className.indexOf("btn") === -1 &&
            event.target.className.indexOf("action") === -1 &&
            event.target.className.indexOf("tab-option") === -1) {
            this.disableContextMenu();
        }
    }

    public analyse(condition) {
        this.currentFormatter = condition;
        this.formatting.formatCells(condition);
    }

    public clearFormatting() {
        this.formatting.clearFormatting();
    }

    private renderButton() {
        this.rowIndex = this.range.rowEnd;
        this.colIndex = this.range.columnEnd;

        while (this.colIndex >= 0 && !this.grid.navigation.isColumnFullyVisible(this.colIndex)) {
            this.colIndex--;
        }

        if (this.colIndex < 0) {
            return;
        }

        let cell;
        if ((!this.grid.getRowByIndex(this.rowIndex) || (this.grid.rowList.toArray().indexOf(this.grid.getRowByIndex(this.rowIndex)) >= this.grid.rowList.length - 2) && this.rowIndex + 2 < this.grid.dataLength)) {
            const lastFullyVisibleRowIndex = this.grid.rowList.toArray()[this.grid.rowList.length - 3].index;
            const field = this.grid.visibleColumns[this.colIndex].field;
            cell = this.grid.getCellByColumn(lastFullyVisibleRowIndex, field);
        } else {
            cell = this.grid.getCellByColumn(this.rowIndex, this.grid.visibleColumns[this.colIndex].field);
        }
        this.contextmenuX = cell.element.nativeElement.getClientRects()[0].right;
        this.contextmenuY = cell.element.nativeElement.getClientRects()[0].bottom;
        this.contextmenu = this.isWithInRange(cell.rowIndex, cell.visibleColumnIndex);
        this.cdr.detectChanges();
    }

    public isWithInRange(rowIndex, colIndex) {
        return rowIndex >= this.range.rowStart && rowIndex <= this.range.rowEnd
            && colIndex >= this.range.columnStart && colIndex <= this.range.columnEnd;
    }
}
