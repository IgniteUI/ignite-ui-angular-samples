import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';
import { DATA } from '../../data/customers';

@Component({
    selector: 'app-gird-column-group-selection',
    templateUrl: './column-group-selection-sample.component.html',
    styleUrls: ['./column-group-selection-sample.component.css']
})
export class GridColumnGroupSelectionComponent implements OnInit, AfterViewInit {
    @ViewChild(IgxGridComponent)
    public grid: IgxGridComponent;

    public data: any[];

    constructor(private cdr: ChangeDetectorRef){}

    public ngOnInit() {
        this.data = DATA;
    }

    public ngAfterViewInit() {
        this.grid.selectColumns(['City', 'PostalCode']);
        this.cdr.detectChanges();
    }
}
