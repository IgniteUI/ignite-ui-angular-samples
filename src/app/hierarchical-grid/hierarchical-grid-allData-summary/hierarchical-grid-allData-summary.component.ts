import {  Component, OnInit, ViewChild } from '@angular/core';
import { IgxHierarchicalGridComponent,
    IgxNumberSummaryOperand,
    IgxSummaryOperand,
    IgxSummaryResult } from 'igniteui-angular';
import { SINGERS } from '../data';

class CustomNumberSummary {

    public operate(data?: any[]): IgxSummaryResult[] {
        const result = new IgxNumberSummaryOperand().operate(data);
        result.pop();
        result.pop();
        return result;
    }
}

class GrammySummary {

    public operate(data?: any[], allData = [], fieldName = ''): IgxSummaryResult[] {
        const result = [];
        result.push({
            key: 'nominatedSingers',
            label: 'Nominated Singers',
            summaryResult: allData.filter((rec) =>  rec['GrammyNominations'] > 0).length
        });
        result.push({
            key: 'singersWithAwards',
            label: 'Singers with Awards',
            summaryResult: allData.filter((rec) =>  rec['GrammyAwards'] > 0).length
        });
        result.push({
            key: 'nominations',
            label: 'Total Nominations',
            summaryResult: IgxNumberSummaryOperand.sum(allData.map(r => r['GrammyNominations']))
        });
        result.push({
            key: 'awards',
            label: 'Total Awards',
            summaryResult: IgxNumberSummaryOperand.sum(allData.map(r => r['GrammyAwards']))
        });
        return result;
    }
}

@Component({
    selector: 'app-hierarchical-grid-all-data-summary',
    styleUrls: ['./hierarchical-grid-allData-summary.component.css'],
    templateUrl: 'hierarchical-grid-allData-summary.component.html'
})

export class HGridAllDataSummaryComponent implements OnInit {
    @ViewChild('hierarchicalGrid', { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;
    public localdata;
    public grammySummary = GrammySummary;
    public numberSummary = CustomNumberSummary;

    constructor() {}

    public ngOnInit(): void {
        this.localdata = SINGERS;
    }
}
