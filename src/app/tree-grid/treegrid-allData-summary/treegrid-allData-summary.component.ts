import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxSummaryOperand, IgxSummaryResult, IgxTreeGridComponent  } from 'igniteui-angular';
import { generateEmployeeFlatData } from '../data/employees-flat';

class PTOSummary {

    public operate(data?: any[], allData = [], fieldName = ''): IgxSummaryResult[] {
      const result = [];
      result.push({
        key: 'totalOnPTO', label: 'Employees On PTO',
        summaryResult:  IgxSummaryOperand.count(allData.filter((rec) =>  rec['OnPTO']).map(r => r[fieldName]))
      });
      result.push({
        key: 'devs', label: 'Developers',
        summaryResult: IgxSummaryOperand.count(
        allData.filter((rec) =>  rec[fieldName].includes('Developer') && rec['OnPTO']).map(r => r[fieldName]))
        });
      result.push({
        key: 'tl', label: 'Team Leads',
        summaryResult: IgxSummaryOperand.count(
        allData.filter((rec) =>  rec[fieldName].includes('Team Lead') && rec['OnPTO']).map(r => r[fieldName]))
        });
      result.push({
        key: 'managers', label: 'Managers/Directors',
        summaryResult: IgxSummaryOperand.count(
        allData.filter((rec) =>
            (rec[fieldName].includes('Manager') || rec[fieldName].includes('Director')) && rec['OnPTO'])
            .map(r => r[fieldName]))
        });
      result.push({
        key: 'ceo', label: 'CEO/President',
        summaryResult: IgxSummaryOperand.count(
        allData.filter((rec) =>
            (rec[fieldName].includes('CEO') || rec[fieldName].includes('President')) && rec['OnPTO'])
            .map(r => r[fieldName]))
        });
      return result;
    }
}

@Component({
  selector: 'app-treegrid-all-data-summary-sample',
  styleUrls: ['./treegrid-allData-summary.component.css'],
  templateUrl: './treegrid-allData-summary.component.html'
})
export class TreeGridAllDataSummaryComponent implements OnInit {

  @ViewChild('treegrid1', { read: IgxTreeGridComponent, static: true })
  public grid1: IgxTreeGridComponent;
  public data;
  public d;
  public ptoSummary = PTOSummary;

  constructor() { }

  public ngOnInit() {
    this.data = generateEmployeeFlatData();
    this.data.forEach(rec => rec.Title = rec.Title.includes('Localiza') ? 'Software Developer' : rec.Title);
  }
}
