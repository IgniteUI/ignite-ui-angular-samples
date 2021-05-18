import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxDateSummaryOperand, IgxGridComponent, IgxSummaryOperand, IgxSummaryResult } from 'igniteui-angular';
import { DATA } from '../../data/nwindData';

@Component({
    selector: 'app-grid-summary-formatter',
    styleUrls: ['./grid-summary-formatter.component.css'],
    templateUrl: './grid-summary-formatter.component.html'
  })

  export class GridSummaryFormatterComponent implements OnInit {
    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;

    public data: any[];

    public ngOnInit(): void {
        this.data = DATA;
    }

    public dateSummaryFormat(summary: IgxSummaryResult, summaryOperand: IgxSummaryOperand): string {
        const result = summary.summaryResult;
        if (summaryOperand instanceof IgxDateSummaryOperand && summary.key !== 'count'
            && result !== null && result !== undefined) {
            const pipe = new DatePipe('en-US');
            return pipe.transform(result, 'MMM YYYY');
        }
        return result;
    }
  }
