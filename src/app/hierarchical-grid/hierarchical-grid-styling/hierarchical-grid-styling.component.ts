import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxColumnComponent, IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular';
import { SINGERS } from '../data';

@Component({
    selector: 'app-hierarchical-grid-styling',
    styleUrls: ['./hierarchical-grid-styling.component.css'],
    templateUrl: 'hierarchical-grid-styling.component.html'
})

export class HGridStylingComponent implements OnInit {
    @ViewChild('hierarchicalGrid', { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;
    public localdata;
    public col: IgxColumnComponent;
    public pWidth: string;
    public nWidth: string;

    constructor() {
        this.localdata = SINGERS;
    }

    public ngOnInit(): void {

    }

    public onResize(event) {
        this.col = event.column;
        this.pWidth = event.prevWidth;
        this.nWidth = event.newWidth;
    }

    public formatter = (a) => a;
}
