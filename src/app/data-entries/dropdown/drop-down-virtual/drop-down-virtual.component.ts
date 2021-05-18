import { Component } from '@angular/core';

// tslint:disable:object-literal-sort-keys
// tslint:disable-next-line:interface-name
interface DataItem {
    id: string;
    name: string;
    header: boolean;
    disabled: boolean;
}

@Component({
  selector: 'app-drop-down-virtual',
  templateUrl: './drop-down-virtual.component.html',
  styleUrls: ['./drop-down-virtual.component.css']
})
export class DropDownVirtualComponent {
  public items: DataItem[];
  public itemHeight = 48;
  public itemsMaxHeight = 240;

  constructor() {
    const itemsCollection: DataItem[] = [];
    for (let i = 0; i < 50; i++) {
        const series = (i * 10).toString();
        itemsCollection.push({
            id: series,
            name: `${series} Series`,
            header: true,
            disabled: false
        });
        for (let j = 0; j < 10; j++) {
            itemsCollection.push({
                id: `${series}_${j}`,
                name: `Series ${series}, ${i * 10 + j} Model`,
                header: false,
                disabled: j % 9 === 0
            });
        }
    }
    this.items = itemsCollection;
  }
}
