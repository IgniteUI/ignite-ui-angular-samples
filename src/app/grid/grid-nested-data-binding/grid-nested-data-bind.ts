import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {EMPLOYEE_DATA} from './nestedData';
@Component({
    selector: 'app-grid-nested-data-bind',
    styleUrls: ['./grid-nested-data-bind.css'],
    templateUrl: './grid-nested-data-bind.html'
})

export class GridNestedDataBindComponent implements OnInit{
    public data;
    constructor(private cdr: ChangeDetectorRef){}

    public ngOnInit() {
        this.data = EMPLOYEE_DATA;
        this.cdr.detectChanges();
    }
}
