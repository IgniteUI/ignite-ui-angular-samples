import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular';
import { SINGERS } from '../data';

@Component({
    selector: 'app-hierarchical-grid-custom-hiding',
    styleUrls: ['./hierarchical-grid-custom-hiding.component.css'],
    templateUrl: 'hierarchical-grid-custom-hiding.component.html'
})

export class HGridCostumHidingSampleComponent implements OnInit, AfterViewInit {
    @ViewChild('hierarchicalGrid', { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;
    public localdata;

    constructor(private cdr: ChangeDetectorRef) {}

    public ngOnInit(): void {
        this.localdata = SINGERS;
    }
    public ngAfterViewInit(): void {
        this.hierarchicalGrid.columnList.forEach((col) => col.width = '20%');
        this.cdr.detectChanges();
    }

    public formatter = (a) => a;

}
