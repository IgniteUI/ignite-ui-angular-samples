import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxSnackbarComponent, IgxHierarchicalGridComponent } from 'igniteui-angular';
import { SINGERS } from '../data';

@Component({
    selector: 'app-hierarchical-grid-cell-selection',
    styleUrls: ['./hierarchical-grid-cellSelection.component.css'],
    templateUrl: 'hierarchical-grid-cellSelection.component.html'
})
export class HierarchicalGridCellSelectionComponent implements OnInit {
    @ViewChild('hgrid', { static: true }) public hGrid: IgxHierarchicalGridComponent;
    @ViewChild(IgxSnackbarComponent, { static: true }) public snackbar: IgxSnackbarComponent;
    public data: any[];
    public selectionMode = 'multiple';
    public selectionModeChild = 'single';
    public selectionModes = [];
    public selectionModesChildren = [];

    constructor() { }

    public ngOnInit(): void {
        this.data = SINGERS;
        this.selectionModes = [
            { label: 'none', selected: this.selectionMode === 'none', togglable: true },
            { label: 'single', selected: this.selectionMode === 'single', togglable: true },
            { label: 'multiple', selected: this.selectionMode === 'multiple', togglable: true }
        ];
        this.selectionModesChildren = [
            { label: 'none', selected: this.selectionModeChild === 'none', togglable: true },
            { label: 'single', selected: this.selectionModeChild === 'single', togglable: true },
            { label: 'multiple', selected: this.selectionModeChild === 'multiple', togglable: true }
        ];
        this.snackbar.autoHide = false;
        this.snackbar.open();
    }

    public selectCellSelectionMode(args) {
        this.selectionMode = this.selectionModes[args.index].label;
        this.snackbar.open();
    }

    public selectCellSelectionModeChildGrid(args) {
        this.selectionModeChild = this.selectionModes[args.index].label;
    }
}
