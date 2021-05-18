import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxDateSummaryOperand, IgxSummaryResult, IgxSummaryOperand, IgxTreeGridComponent } from 'igniteui-angular';
import { FOODS_DATA } from '../data/foods';

@Component({
    selector: 'app-tree-grid-summary-formatter',
    styleUrls: ['./tree-grid-summary-formatter.component.css'],
    templateUrl: 'tree-grid-summary-formatter.component.html'
})

export class TreeGridSummaryFormatterComponent implements OnInit {
    @ViewChild('treegrid1', { read: IgxTreeGridComponent, static: true })
    public treegrid1: IgxTreeGridComponent;

    public data: any[];

    public ngOnInit(): void {
        this.data = FOODS_DATA();
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
