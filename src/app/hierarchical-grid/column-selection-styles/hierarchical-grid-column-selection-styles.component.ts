import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { IgxHierarchicalGridComponent } from 'igniteui-angular';
import { SINGERS } from '../data';

@Component({
  selector: 'app-hierarchical-grid-column-selection-styles',
  templateUrl: './hierarchical-grid-column-selection-styles.component.html',
  styleUrls: ['./hierarchical-grid-column-selection-styles.component.css']
})
export class HGridColumnSelectionStylesComponent implements OnInit, AfterViewInit {
    @ViewChild(IgxHierarchicalGridComponent)
    public hGrid: IgxHierarchicalGridComponent;
    public data;

    constructor(private cdr: ChangeDetectorRef){}

    public formatter = (a) => a;

    public ngOnInit() {
        this.data = SINGERS;
    }

    public ngAfterViewInit() {
        this.hGrid.selectColumns(['Artist', 'GrammyNominations']);
        this.cdr.detectChanges();
    }

}
