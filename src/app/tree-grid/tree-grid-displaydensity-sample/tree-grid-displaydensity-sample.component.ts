import { Component, OnInit, ViewChild } from '@angular/core';
import {
    IgxButtonGroupComponent, IgxNumberSummaryOperand, IgxSummaryOperand, IgxSummaryResult, IgxTreeGridComponent
} from 'igniteui-angular';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';

class CustomNumberSummary {

    public operate(data?: any[]): IgxSummaryResult[] {
        const result = new IgxSummaryOperand().operate(data);
        result.push({
            key: 'Min',
            label: 'Min',
            summaryResult: IgxNumberSummaryOperand.min(data)
        });
        result.push({
            key: 'max',
            label: 'Max',
            summaryResult: IgxNumberSummaryOperand.max(data)
        });
        return result;
    }
}

@Component({
    selector: 'app-tree-grid-displaydensity-sample',
    styleUrls: ['./tree-grid-displaydensity-sample.component.css'],
    templateUrl: './tree-grid-displaydensity-sample.component.html'
})
export class TreeGridDisplaydensitySampleComponent implements OnInit {

    @ViewChild('treeGrid', { read: IgxTreeGridComponent, static: true })
    public treeGrid: IgxTreeGridComponent;
    @ViewChild(IgxButtonGroupComponent, { static: true }) public buttonGroup: IgxButtonGroupComponent;
    public data;
    public density = 'compact';
    public displayDensities;
    public numberSummaries = CustomNumberSummary;

    public ngOnInit() {
        this.data = generateEmployeeDetailedFlatData();
        this.displayDensities = [
            {
                label: 'compact',
                selected: this.density === 'compact',
                togglable: true
            },
            {
                label: 'cosy',
                selected: this.density === 'cosy',
                togglable: true
            },
            {
                label: 'comfortable',
                selected: this.density === 'comfortable',
                togglable: true
            }
        ];
    }

    public selectDensity(event) {
        this.density = this.displayDensities[event.index].label;
        this.treeGrid.displayDensity = this.displayDensities[event.index].label;
        this.treeGrid.reflow();
    }
}
