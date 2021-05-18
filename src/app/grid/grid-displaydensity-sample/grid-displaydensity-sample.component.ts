import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxButtonGroupComponent, IgxGridComponent, IgxNumberSummaryOperand,
    IgxSummaryOperand, IgxSummaryResult } from 'igniteui-angular';
import { INVOICE_DATA } from '../../data/invoiceData';

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
  selector: 'app-grid-displaydensity-sample',
  styleUrls: ['./grid-displaydensity-sample.component.css'],
  templateUrl: './grid-displaydensity-sample.component.html'
})
export class GridDisplayDensitySampleComponent implements OnInit {

    @ViewChild('grid', { read: IgxGridComponent, static: true })
    public grid: IgxGridComponent;
    @ViewChild(IgxButtonGroupComponent, { static: true }) public buttonGroup: IgxButtonGroupComponent;
    public data;
    public density = 'compact';
    public displayDensities;
    public numberSummaries = CustomNumberSummary;

    public ngOnInit() {
        this.data = INVOICE_DATA;
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
        this.grid.displayDensity = this.displayDensities[event.index].label;
        this.grid.reflow();
    }

}
