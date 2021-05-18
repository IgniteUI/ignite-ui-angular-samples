import { Component } from '@angular/core';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';

@Component({
  selector: 'app-tree-grid-multi-column-headers-styling',
  styleUrls: ['./tree-grid-multi-column-headers-styling.component.css'],
  templateUrl: './tree-grid-multi-column-headers-styling.component.html'
})
export class TreeGridMultiColumnHeadersStylingComponent {

    public data = generateEmployeeDetailedFlatData();
}
