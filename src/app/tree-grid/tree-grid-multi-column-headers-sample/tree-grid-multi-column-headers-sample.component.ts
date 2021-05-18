import { Component, ViewChild } from '@angular/core';
import { IgxTreeGridComponent} from 'igniteui-angular';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';

@Component({
  selector: 'app-tree-grid-multi-column-headers-sample',
  styleUrls: ['./tree-grid-multi-column-headers-sample.component.css'],
  templateUrl: './tree-grid-multi-column-headers-sample.component.html'
})
export class TreeGridMultiColumnHeadersSampleComponent {

    @ViewChild(IgxTreeGridComponent, { read: IgxTreeGridComponent, static: true })
    public treeGrid: IgxTreeGridComponent;
    public data = generateEmployeeDetailedFlatData();
    public selectionMode = 'none';

    public pinUnpinGroup() {
        const firstColumnGroup = this.treeGrid.columnList.filter((c) => c.header === 'General Information')[0];
        firstColumnGroup.pinned = !firstColumnGroup.pinned;
    }

    public showHideGroup() {
        const firstColumnGroup = this.treeGrid.columnList.filter((c) => c.header === 'General Information')[0];
        firstColumnGroup.hidden = !firstColumnGroup.hidden;
    }
}
