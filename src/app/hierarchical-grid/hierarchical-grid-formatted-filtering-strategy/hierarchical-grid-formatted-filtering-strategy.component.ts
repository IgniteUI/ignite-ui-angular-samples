import { Component, ViewChild } from '@angular/core';
import { IgxHierarchicalGridComponent, FormattedValuesFilteringStrategy } from 'igniteui-angular';
import { SINGERS } from '../data';

@Component({
    selector: 'app-hierarchical-grid-formatted-filtering-strategy',
    styleUrls: ['./hierarchical-grid-formatted-filtering-strategy.component.css'],
    templateUrl: 'hierarchical-grid-formatted-filtering-strategy.component.html'
})

export class HGridFormattedFilteringStrategyComponent {

    @ViewChild('hierarchicalGrid', { static: true })
    public hierarchicalGrid: IgxHierarchicalGridComponent;

    public localdata;
    public filterStrategy = new FormattedValuesFilteringStrategy();

    constructor() {
        this.localdata = SINGERS;
    }

    public decadeFormatter = (value: number) => Math.floor(value / 10) * 10 + 's';
}
