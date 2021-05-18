import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { IgxGridComponent, DefaultSortingStrategy } from 'igniteui-angular';
import { FinancialData } from '../services/financialData';
import  {generateRandomInteger, generateRandomFloat} from '../../data/utils';
@Component({
  selector: 'app-grid-sorting-indicators',
  templateUrl: './grid-sorting-indicators.component.html',
  styleUrls: ['./grid-sorting-indicators.component.css']
})
export class GridSortingIndicatorsComponent implements OnInit, AfterViewInit {

    @ViewChild('grid1', { static: true }) public grid: IgxGridComponent;
    public data;

    public ngOnInit(): void {
        const typeArr = ['Gold', 'Silver', 'Coal'];
        this.data = new FinancialData().generateData(1000).map(dataObj => {
                const type = typeArr[generateRandomInteger(0, 2)];
                switch (type) {
                    case 'Gold':
                        dataObj['Type'] = 'Gold';
                        dataObj['Price'] = generateRandomFloat(1261.78, 1302.76);
                        dataObj['Buy'] = generateRandomFloat(1261.78, 1280.73);
                        break;
                    case 'Silver':
                        dataObj['Type'] = 'Silver';
                        dataObj['Price'] = generateRandomFloat(17.12, 17.73);
                        dataObj['Buy'] = generateRandomFloat(17.12, 17.43);
                        break;
                    case 'Coal':
                        dataObj['Type'] = 'Coal';
                        dataObj['Price'] = generateRandomFloat(0.40, 0.42);
                        dataObj['Buy'] = generateRandomFloat(0.42, 0.46);
                        break;
                }
                return dataObj;
        });
    }

    public ngAfterViewInit() {
        const expressions = [];
        this.grid.columns.forEach(c => {
            const sortExpr =
            {
                dir: generateRandomInteger(1, 2), fieldName: c.field,
                ignoreCase: true, strategy: DefaultSortingStrategy.instance()
            };
            expressions.push(sortExpr);
        });
        this.grid.sortingExpressions = expressions;
        this.grid.cdr.detectChanges();
    }
    public formatCurrency(value: number) {
        return '$' + value.toFixed(2);
    }

}
