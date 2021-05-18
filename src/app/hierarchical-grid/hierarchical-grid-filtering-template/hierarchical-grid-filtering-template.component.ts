import { Component, OnInit, ViewChild } from '@angular/core';
import {
    GridColumnDataType,
    IgxColumnComponent,
    IgxDateFilteringOperand,
    IgxHierarchicalGridComponent,
    IgxNumberFilteringOperand,
    IgxStringFilteringOperand,
    OverlaySettings
} from 'igniteui-angular';
import { SINGERS } from '../data';

@Component({
    selector: 'app-hierarchical-grid-filtering-template',
    styleUrls: ['./hierarchical-grid-filtering-template.component.css'],
    templateUrl: 'hierarchical-grid-filtering-template.component.html'
})

export class HGridFilteringTemplateSampleComponent implements OnInit {
    @ViewChild('hierarchicalGrid', { static: true })
    public hierarchicalGrid: IgxHierarchicalGridComponent;

    public localdata;
    public overlaySettings: OverlaySettings;
    public displayDateFormat = 'MMM d, y';

    private _filterValues = new Map<IgxColumnComponent, any>();

    constructor() {
        this.localdata = SINGERS;
    }
    public ngOnInit(): void {
        this.overlaySettings = {
            outlet: this.hierarchicalGrid
        };
    }

    public formatter = (a) => a;

    public getFilterValue(column: IgxColumnComponent): any {
        return this._filterValues.has(column) ? this._filterValues.get(column) : null;
    }

    public onKeyDown(event: KeyboardEvent) {
        event.stopImmediatePropagation();
    }

    public onInput(input: any, column: IgxColumnComponent, grid: IgxHierarchicalGridComponent) {
        this._filterValues.set(column, input.value);

        if (input.value === '') {
            grid.clearFilter(column.field);
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
        grid.filter(column.field,
            this.transformValue(input.value, column), operand, column.filteringIgnoreCase);
    }

    public clearInput(column: IgxColumnComponent, grid: IgxHierarchicalGridComponent) {
        this._filterValues.delete(column);
        grid.clearFilter(column.field);
    }

    public onClick(inputGroup) {
        if (!inputGroup.isFocused) {
            inputGroup.input.focus();
        }
    }

    public onDateSelected(event, column: IgxColumnComponent, grid: IgxHierarchicalGridComponent) {
        if (!event) {
            this.clearInput(column, grid);
            return;
        }

        this._filterValues.set(column, event);
        grid.filter(column.field, event, IgxDateFilteringOperand.instance().condition('equals'),
            column.filteringIgnoreCase);
    }

    private transformValue(value: any, column: IgxColumnComponent): any {
        if (column.dataType === GridColumnDataType.Number) {
            value = parseFloat(value);
        }

        return value;
    }
}
