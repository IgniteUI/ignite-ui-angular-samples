import { AfterViewInit, Component, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { IgxColumnComponent, IgxGridComponent } from 'igniteui-angular';
import { DATA } from '../services/financialData';

@Component({
    selector: 'app-grid-moving-styled-sample',
    styleUrls: ['./grid-moving-styled-sample.component.css'],
    templateUrl: './grid-moving-styled-sample.component.html'
})

export class GridMovingStyledSampleComponent {
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
