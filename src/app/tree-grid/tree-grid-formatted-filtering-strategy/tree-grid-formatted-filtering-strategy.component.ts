import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxTreeGridComponent, TreeGridFormattedValuesFilteringStrategy } from 'igniteui-angular';
import { FOODS_DATA } from '../data/foods';

@Component({
    selector: 'app-tree-grid-formatted-filtering-strategy',
    styleUrls: ['./tree-grid-formatted-filtering-strategy.component.css'],
    templateUrl: 'tree-grid-formatted-filtering-strategy.component.html'
})

export class TreeGridFormattedFilteringStrategyComponent implements OnInit {
    @ViewChild('treegrid1', { read: IgxTreeGridComponent, static: true })
    public treegrid1: IgxTreeGridComponent;

    public data: any[];
    public filterStrategy = new TreeGridFormattedValuesFilteringStrategy();

    public ngOnInit(): void {
        this.data = FOODS_DATA();
    }

    public formatPrice(value: number) {
        return value ? value < 15 ? 'low' : value > 50 ? 'high' : 'medium' : '';
    }
}
