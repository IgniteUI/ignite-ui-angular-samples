import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {
    DefaultSortingStrategy,
    GridSummaryCalculationMode,
    GridSummaryPosition,
    IgxGridComponent,
    IgxNumberSummaryOperand,
    IgxSummaryOperand,
    IgxSummaryResult,
    ISortingExpression,
    SortingDirection
} from 'igniteui-angular';
import { INVOICE_DATA } from '../../data/invoiceData';

class CustomSummary {


    public operate(data?: any[]): IgxSummaryResult[] {
        const result = [];
        result.push({
            key: 'sum',
            label: 'Sum',
            summaryResult: IgxNumberSummaryOperand.sum(data)
        }, {
            key: 'count',
            label: 'Count',
            summaryResult: data.length ? data.length : 0
        });
        return result;
    }
}

@Component({
    selector: 'app-grid-groupby-summary-sample',
    styleUrls: ['./grid-groupby-summary-styling-sample.component.css'],
    templateUrl: './grid-groupby-summary-styling-sample.component.html'
})
export class GridGroupBySummaryStylingSampleComponent {
    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;
    public data;
    public expr: ISortingExpression[];
    public customSummary = CustomSummary;
    public summaryPositions;
    public summaryPosition: GridSummaryPosition = GridSummaryPosition.bottom;
    public summaryCalcModes;
    public summaryCalculationMode: GridSummaryCalculationMode = GridSummaryCalculationMode.rootAndChildLevels;
    public selectionMode = 'multiple';

    constructor() {
        this.data = INVOICE_DATA;
        this.expr = [
            { dir: SortingDirection.Asc, fieldName: 'ShipCountry', ignoreCase: false,
              strategy: DefaultSortingStrategy.instance() }
        ];

        this.summaryPositions = [
            {
                label: GridSummaryPosition.top,
                selected: this.summaryPosition === GridSummaryPosition.top,
                togglable: true
            },
            {
                label: GridSummaryPosition.bottom,
                selected: this.summaryPosition === GridSummaryPosition.bottom,
                togglable: true
            }
        ];

        this.summaryCalcModes = [
            {
                label: 'Root Level Only',
                selected: this.summaryCalculationMode === GridSummaryCalculationMode.rootLevelOnly,
                togglable: true,
                value: GridSummaryCalculationMode.rootLevelOnly
            },
            {
                label: 'Child Levels Only',
                selected: this.summaryCalculationMode === GridSummaryCalculationMode.childLevelsOnly,
                togglable: true,
                value: GridSummaryCalculationMode.childLevelsOnly
            },
            {
                label: 'Root And Child Levels',
                selected: this.summaryCalculationMode === GridSummaryCalculationMode.rootAndChildLevels,
                togglable: true,
                value: GridSummaryCalculationMode.rootAndChildLevels
            }
        ];
    }

    public selectSummaryPosition(event) {
        this.summaryPosition = this.summaryPositions[event.index].label;
        this.grid1.summaryPosition = this.summaryPosition;
    }

    public selectSummaryCalcMode(event) {
        this.summaryCalculationMode = this.summaryCalcModes[event.index].value;
        this.grid1.summaryCalculationMode = this.summaryCalculationMode;
    }

    public formatDate(val: Date) {
        return new Intl.DateTimeFormat('en-US').format(val);
    }

    public formatCurrency(value: number) {
        return '$' + value.toFixed(2);
    }

    public isDate(value: any) {
        if (value instanceof Date) {
            return true;
        } else {
            return false;
        }
    }

}
