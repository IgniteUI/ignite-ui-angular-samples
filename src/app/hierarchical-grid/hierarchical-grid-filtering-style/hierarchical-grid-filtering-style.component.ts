import { Component, OnInit } from '@angular/core';
import { SINGERS } from '../data';

@Component({
  selector: 'app-hierarchical-grid-filtering-style',
  styleUrls: ['./hierarchical-grid-filtering-style.component.css'],
  templateUrl: './hierarchical-grid-filtering-style.component.html'
})
export class HierarchicalGridFilteringStyleComponent implements OnInit {
    public localdata;

    constructor() {
        this.localdata = SINGERS;
    }

    public ngOnInit(): void {
    }
}
