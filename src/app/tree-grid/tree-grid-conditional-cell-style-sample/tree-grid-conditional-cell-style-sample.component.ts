import { Component, OnInit } from '@angular/core';
import { FOODS_DATA } from '../data/foods';

@Component({
    selector: 'app-tree-grid-conditional-cell-style-sample',
    styleUrls: ['./tree-grid-conditional-cell-style-sample.component.css'],
    templateUrl: './tree-grid-conditional-cell-style-sample.component.html'
})

export class TreeGridConditionalCellStyleComponent implements OnInit {
    public data: any[];
    public allergenItems = ['Grandmas Boysenberry Spread', 'Mishi Kobe Niku', 'Carnarvon Tigers', 'Ikura'];

    public ngOnInit() {
        this.data = FOODS_DATA();
    }

    public formatDate(val: Date) {
        return new Intl.DateTimeFormat('en-US').format(val);
    }

    private upPriceCondition = (rowData: any, columnKey: any): boolean => rowData[columnKey] > 25;

    private downPriceCondition = (rowData: any, columnKey: any): boolean => rowData[columnKey] <= 25;

    private allergenCondition = (rowData: any, columnKey: any): boolean => this.allergenItems.indexOf(rowData[columnKey]) >= 0;


    // eslint-disable-next-line @typescript-eslint/member-ordering
    public priceClasses = {
        downPrice: this.downPriceCondition,
        upPrice: this.upPriceCondition
    };


    // eslint-disable-next-line @typescript-eslint/member-ordering
    public allergenClasses = {
        'allergens allergensFont': this.allergenCondition
    };
}
