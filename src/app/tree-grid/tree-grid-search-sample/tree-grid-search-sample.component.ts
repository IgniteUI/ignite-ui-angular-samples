import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxTreeGridComponent} from 'igniteui-angular';
import { generateEmployeeFlatData } from '../data/employees-flat';

@Component({
    selector: 'app-tree-grid-search-sample',
    styleUrls: ['./tree-grid-search-sample.component.css'],
    templateUrl: './tree-grid-search-sample.component.html'
})
export class TreeGridSearchSampleComponent implements OnInit {

    @ViewChild('treeGrid1', { static: true }) public treeGrid: IgxTreeGridComponent;
    public data: any[];
    public searchText = '';
    public caseSensitive = false;
    public exactMatch = false;

    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();
    }

    public clearSearch() {
        this.searchText = '';
        this.treeGrid.clearSearch();
    }

    public searchKeyDown(ev) {
        if (ev.key === 'Enter' || ev.key === 'ArrowDown' || ev.key === 'ArrowRight') {
            ev.preventDefault();
            this.treeGrid.findNext(this.searchText, this.caseSensitive, this.exactMatch);
        } else if (ev.key === 'ArrowUp' || ev.key === 'ArrowLeft') {
            ev.preventDefault();
            this.treeGrid.findPrev(this.searchText, this.caseSensitive, this.exactMatch);
        }
    }

    public updateSearch() {
        this.caseSensitive = !this.caseSensitive;
        this.treeGrid.findNext(this.searchText, this.caseSensitive, this.exactMatch);
    }

    public updateExactSearch() {
        this.exactMatch = !this.exactMatch;
        this.treeGrid.findNext(this.searchText, this.caseSensitive, this.exactMatch);
    }
}
