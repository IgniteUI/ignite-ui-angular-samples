import { Component, Input, OnInit} from '@angular/core';
import { IgxIconModule, SortingDirection } from 'igniteui-angular';

@Component({
  selector: 'app-tree-grid-contextmenu',
  styleUrls: ['./tree-grid-contextmenu.component.css'],
  templateUrl: './tree-grid-contextmenu.component.html'
})
export class TreeGridContextmenuComponent implements OnInit {

    @Input()
    public x = 0;

    @Input()
    public y = 0;

    @Input()
    public cell;

    constructor() { }

    public sort(eventArgs) {
        this.cell.grid.sort({fieldName: this.cell.column.field, dir: SortingDirection.Asc, ignoreCase: true});
    }

    public clearSort(eventArgs) {
        this.cell.grid.clearSort(this.cell.column.field);
    }

    public clearAll(eventArgs) {
        this.cell.grid.clearSort();
    }

    public ngOnInit() {
    }
}
