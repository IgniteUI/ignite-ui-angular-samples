import { Component, OnInit } from '@angular/core';
import { FOODS_DATA } from '../data/foods';

@Component({
  selector: 'app-tree-grid-filtering-style',
  styleUrls: ['./tree-grid-filtering-style.component.css'],
  templateUrl: './tree-grid-filtering-style.component.html'
})
export class TreeGridFilteringStyleComponent implements OnInit {
    public data: any[];

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
}
