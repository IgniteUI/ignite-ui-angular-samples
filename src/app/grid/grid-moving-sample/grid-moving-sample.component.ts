import { AfterViewInit, Component, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { IgxColumnComponent, IgxGridComponent } from 'igniteui-angular';
import { DATA } from '../services/financialData';

@Component({
    selector: 'app-grid-moving-sample',
    styleUrls: ['./grid-moving-sample.component.css'],
    templateUrl: './grid-moving-sample.component.html'
})

export class GridMovingSampleComponent {
    @ViewChild('dataGrid', { static: true }) public grid: IgxGridComponent;
    public data: any[];

    constructor() {
        this.data = DATA;
    }

    public formatNumber(value: number) {
        return value.toFixed(2);
    }

    public formatCurrency(value: number) {
        return '$' + value.toFixed(2);
    }

    public toggleColumnPinning(column: IgxColumnComponent) {
        column.pinned ? column.unpin() : column.pin();
    }
}
