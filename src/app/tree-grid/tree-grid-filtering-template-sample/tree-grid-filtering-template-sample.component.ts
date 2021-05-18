import { Component, OnInit, ViewChild } from '@angular/core';
import {
    GridColumnDataType,
    IgxColumnComponent,
    IgxDateFilteringOperand,
    IgxNumberFilteringOperand,
    IgxStringFilteringOperand,
    IgxTreeGridComponent
} from 'igniteui-angular';
import { FOODS_DATA } from '../data/foods';

@Component({
    selector: 'app-tree-grid-filtering-template-sample',
    styleUrls: ['./tree-grid-filtering-template-sample.component.css'],
    templateUrl: 'tree-grid-filtering-template-sample.component.html'
})

export class TreeGridFilteringTemplateSampleComponent implements OnInit {
    @ViewChild('treegrid1', { read: IgxTreeGridComponent, static: true })
    public treegrid1: IgxTreeGridComponent;

    public data: any[];
    public displayDateFormat = 'M/d/y';

    private _filterValues = new Map<IgxColumnComponent, any>();

    constructor() {
    }
    public ngOnInit(): void {
        this.data = FOODS_DATA();
    }

    public formatDate(val: Date) {
        return new Intl.DateTimeFormat('en-US').format(val);
    }

    public formatCurrency(val: string) {
        return parseInt(val, 10).toFixed(2);
    }

    public getFilterValue(column: IgxColumnComponent): any {
        return this._filterValues.has(column) ? this._filterValues.get(column) : null;
    }

    public onInput(input: any, column: IgxColumnComponent) {
        this._filterValues.set(column, input.value);

        if (input.value === '') {
            this.treegrid1.clearFilter(column.field);
            return;
        }

        let operand = null;
        switch (column.dataType) {
            case GridColumnDataType.Number:
                operand = IgxNumberFilteringOperand.instance().condition('equals');
                break;
            default:
                operand = IgxStringFilteringOperand.instance().condition('contains');
        }
        this.treegrid1.filter(column.field,
            this.transformValue(input.value, column), operand, column.filteringIgnoreCase);
    }

    public clearInput(column: IgxColumnComponent) {
        this._filterValues.delete(column);
        this.treegrid1.clearFilter(column.field);
    }

    public onKeyDown(event: KeyboardEvent) {
        event.stopImmediatePropagation();
    }

    public onClick(inputGroup) {
        if (!inputGroup.isFocused) {
            inputGroup.input.focus();
        }
    }

    public onDateSelected(event, column: IgxColumnComponent) {
        if (!event) {
            this.clearInput(column);
            return;
        }

        this._filterValues.set(column, event);
        this.treegrid1.filter(column.field, event, IgxDateFilteringOperand.instance().condition('equals'),
            column.filteringIgnoreCase);
    }

    private transformValue(value: any, column: IgxColumnComponent): any {
        if (column.dataType === GridColumnDataType.Number) {
            value = parseFloat(value);
        }

        return value;
    }
}
