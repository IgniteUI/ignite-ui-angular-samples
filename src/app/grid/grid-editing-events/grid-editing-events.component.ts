import { Component, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { IGridEditEventArgs, IgxGridComponent, IgxToastComponent } from 'igniteui-angular';
import { DATA } from '../../data/nwindData';

@Component({
    selector: 'app-grid-editing-event',
    templateUrl: 'grid-editing-events.component.html',
    styleUrls: ['grid-editing-events.component.css']
})
export class GridEditingEventsComponent implements OnInit {
    @ViewChild(IgxToastComponent, { read: IgxToastComponent, static: true })
    public toast: IgxToastComponent;

    @ViewChild('myTemplate', { read: NgModel })
    public myTemplate: NgModel;

    public products: any[];
    public balance = 7800;
    public orderBalance: number;


    public ngOnInit() {
        this.products = DATA.map(e => {
            if (!e.UnitPrice) {
                e.UnitPrice = 1;
            }
            e.Ordered = Math.floor(Math.random() * e.UnitsInStock);
            return e;
        });
        this.toast.position = 'middle';
    }

    public handleCellEdit(event: IGridEditEventArgs) {
        const column = event.column;
        if (column.field === 'Ordered') {
            const rowData = event.rowData;
            if (!rowData) {
                return;
            }
            if (event.newValue > rowData.UnitsInStock) {
                event.cancel = true;
                this.toast.open();
            }
        }
    }
}
