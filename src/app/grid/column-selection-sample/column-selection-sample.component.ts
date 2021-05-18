import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent, IgxSelectComponent } from 'igniteui-angular';
import { DATA } from '../../data/customers';

@Component({
    selector: 'app-grid-column-selection',
    templateUrl: './column-selection-sample.component.html',
    styleUrls: ['./column-selection-sample.component.css']
})
export class GridColumnSelectionComponent implements OnInit, AfterViewInit {
    @ViewChild(IgxGridComponent)
    public grid: IgxGridComponent;
    public data: any[];
    public columnSelectionType = 'single';

    constructor(private cdr: ChangeDetectorRef) {}

    public ngOnInit() {
        this.data = DATA;
    }

    public ngAfterViewInit() {
        this.grid.getColumnByName('CompanyName').selected = true;
        this.cdr.detectChanges();
    }
}
