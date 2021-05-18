import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';

@Component({
  selector: 'app-column-group-selection',
  templateUrl: './column-group-selection.component.html',
  styleUrls: ['./column-group-selection.component.css']
})
export class TreeGridColumnGroupSelectionComponent implements OnInit {

   @ViewChild(IgxTreeGridComponent, { read: IgxTreeGridComponent, static: true })
   public treeGrid: IgxTreeGridComponent;
   public data;

   public ngOnInit(): void {
    this.data = generateEmployeeDetailedFlatData();
    this.treeGrid.selectColumns(['ID', 'Title', 'City']);

  }
}
