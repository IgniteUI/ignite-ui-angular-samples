import { Component, OnInit, ViewChild } from '@angular/core';
import {
    IgxGridComponent,
    IgxNumberSummaryOperand,
    IgxSummaryResult } from 'igniteui-angular';
import { DATA } from '../../data/nwindData';

class DiscontinuedSummary {


  public operate(data?: any[], allData = [], fieldName = ''): IgxSummaryResult[] {
    const result = [];
    result.push({
        key: 'products',
        label: 'Producs',
        summaryResult: data.length
      });
    result.push({
        key: 'total',
        label: 'Total Items',
        summaryResult: IgxNumberSummaryOperand.sum(data)
      });
    result.push({
        key: 'discontinued',
        label: 'Discontinued Producs',
        summaryResult: allData.map(r => r['Discontinued']).filter((rec) =>  rec).length
        });
    result.push({
      key: 'totalDiscontinued',
      label: 'Total Discontinued Items',
      summaryResult: IgxNumberSummaryOperand.sum(allData.filter((rec) =>  rec['Discontinued']).map(r => r[fieldName]))
    });
    return result;
  }
}
@Component({
  selector: 'app-grid-all-data-summary',
  styleUrls: ['./grid-allData-summary.component.css'],
  templateUrl: './grid-allData-summary.component.html'
})
export class GridAllDataSummaryComponent implements OnInit {

  @ViewChild('grid1', { read: IgxGridComponent, static: true })
  public grid1: IgxGridComponent;
  public discontinuedSummary = DiscontinuedSummary;
  public data;

  constructor() {
    this.data = DATA;
   }

  public ngOnInit() {
  }

}
