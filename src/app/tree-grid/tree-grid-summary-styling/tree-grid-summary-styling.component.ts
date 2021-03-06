import { Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { IgxColumnComponent, IgxTreeGridComponent } from 'igniteui-angular';
import { FOODS_DATA } from '../data/foods';

@Component({
  selector: 'app-tree-grid-summary-styling',
  styleUrls: ['./tree-grid-summary-styling.component.scss'],
  templateUrl: './tree-grid-summary-styling.component.html'
})
export class TreeGridSummaryStylingComponent implements OnInit {

  @ViewChild('treegrid1', { read: IgxTreeGridComponent, static: true })
  public grid1: IgxTreeGridComponent;
  public data;

  constructor() {
    this.data = FOODS_DATA();
  }

  public ngOnInit() {
  }

  public toggleSummary(column: IgxColumnComponent) {
    column.hasSummary = !column.hasSummary;
  }
}
