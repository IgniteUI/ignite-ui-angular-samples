import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IgxDialogComponent, IgxGridComponent, IgxSummaryResult, IgxNumberSummaryOperand, IgxToastComponent } from 'igniteui-angular';
import { DATA, LOCATIONS } from './data';
import { Product } from './product';

class NumberSummary {
    public operate(data: any[]): IgxSummaryResult[] {
      const result = [];
      result.push({
          key: 'max',
          label: 'Max',
          summaryResult:  IgxNumberSummaryOperand.max(data)
        });
      result.push({
          key: 'sum',
          label: 'Sum',
          summaryResult: IgxNumberSummaryOperand.sum(data)
        });
      result.push({
          key: 'avg',
          label: 'Avg',
          summaryResult: IgxNumberSummaryOperand.average(data)
          });
      return result;
    }
  }
@Component({
    selector: 'app-grid-editing-sample',
    styleUrls: ['./grid-editing-sample.component.css'],
    templateUrl: './grid-editing-sample.component.html'
})
export class GridEditingSampleComponent implements OnInit, AfterViewInit {

    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;
    @ViewChild('dialogAdd', { read: IgxDialogComponent, static: true })
    public dialog: IgxDialogComponent;
    @ViewChild('toast', { read: IgxToastComponent, static: false })
    public toast: IgxToastComponent;
    public data;
    public locations;
    public product;
    public customOverlaySettings;
    public id;
    public position = 'middle';
    public numSummary = NumberSummary;

    public ngOnInit() {
        this.data = DATA.map((e) => {
            const index = Math.floor(Math.random() * LOCATIONS.length);
            const count = Math.floor(Math.random() * 3) + 1;
            e.Locations = [...LOCATIONS].splice(index, count);
            return e;
        });
        this.id = this.data.length;
        this.product = new Product(this.id);
        this.locations = LOCATIONS;
    }

    public ngAfterViewInit() {
        this.customOverlaySettings = {
            outlet: this.grid1.outlet
        };
    }

    public removeRow(rowIndex) {
       const row = this.grid1.getRowByIndex(rowIndex);
       row.delete();
    }

    public addRow() {
        const id = this.product.ProductID;
        this.grid1.addRow(this.product);
        this.grid1.cdr.detectChanges();
        this.cancel();
        this.grid1.page = this.grid1.totalPages - 1;
        this.grid1.cdr.detectChanges();
        let row;
        requestAnimationFrame(() => {
            const index = this.grid1.filteredSortedData ? this.grid1.filteredSortedData.map(rec => rec['ProductID']).indexOf(id) :
                (row = this.grid1.getRowByKey(id) ? row.index : undefined);
            this.grid1.navigateTo(index, -1);
        });
    }

    public cancel() {
        this.dialog.close();
        this.id++;
        this.product = new Product(this.id);
    }

    // eslint-disable-next-line @typescript-eslint/member-delimiter-style
    public parseArray(arr: { shop: string, lastInventory: string}[]): string {
        return  (arr || []).map((e) => e.shop).join(', ');
    }

    public show(args) {
        const message = `The product: {name: ${args.data.ProductName}, ID ${args.data.ProductID} } has been removed!`;
        this.toast.open(message);
    }
}
