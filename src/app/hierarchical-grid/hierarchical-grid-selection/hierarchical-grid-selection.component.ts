import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxSnackbarComponent } from 'igniteui-angular';
import { SINGERS } from '../data';

@Component({
    selector: 'app-hierarchical-grid-selection',
    styleUrls: ['./hierarchical-grid-selection.component.css'],
    templateUrl: 'hierarchical-grid-selection.component.html'
})

export class HGridSelectionSampleComponent implements OnInit {
    @ViewChild(IgxSnackbarComponent, { static: true }) public snackbar: IgxSnackbarComponent;
    public localdata;
    public selectionMode = 'multiple';
    public selectionModes = [];
    public hideRowSelectors = false;

    constructor() {
        this.localdata = SINGERS;
        this.selectionModes = [
            { label: 'none', selected: this.selectionMode === 'none', togglable: true },
            { label: 'single', selected: this.selectionMode === 'single', togglable: true },
            { label: 'multiple', selected: this.selectionMode === 'multiple', togglable: true }
        ];
    }
    public ngOnInit(): void {
        this.snackbar.autoHide = false;
        this.snackbar.open();
    }

    public selectCellSelectionMode(args) {
        this.selectionMode = this.selectionModes[args.index].label;
        this.snackbar.open();
    }

    public handleRowSelection(event) {
        const targetCell = event.cell;
    }

    public formatter = (a) => a;
}
