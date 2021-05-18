import { Component, ViewChild } from '@angular/core';
import { IgxColumnGroupComponent, IgxTreeGridComponent } from 'igniteui-angular';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';

@Component({
  selector: 'app-tree-grid-multi-column-header-template-sample',
  styleUrls: ['./tree-grid-multi-column-header-template-sample.component.css'],
  templateUrl: './tree-grid-multi-column-header-template-sample.component.html'
})
export class TreeGridMultiColumnHeaderTemplateSampleComponent {

    @ViewChild(IgxTreeGridComponent, { read: IgxTreeGridComponent, static: true })
    public treeGrid: IgxTreeGridComponent;
    public data: any[] = generateEmployeeDetailedFlatData();
    public columnGroupStates = new Map<IgxColumnGroupComponent, boolean>();
    public selectionMode =  'none';
    constructor() {
        for (const item of this.data) {
            item.Location = `${item.Address}, ${item.City}, ${item.Country}`;
        }
    }

    public toggleColumnGroup(columnGroup: IgxColumnGroupComponent) {
        const columns = columnGroup.children.toArray();

        if (columnGroup.header === 'General Information') {
            const col = columns[1];
            col.hidden = !col.hidden;
        } else if (columnGroup.header === 'Address Information') {
            for (const col of columns) {
                col.hidden = !col.hidden;
            }
        }

        this.columnGroupStates.set(columnGroup, !this.columnGroupStates.get(columnGroup));
    }
}
