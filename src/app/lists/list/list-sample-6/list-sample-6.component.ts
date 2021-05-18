import { Component, ViewChild } from '@angular/core';
import { IgxListComponent } from 'igniteui-angular';

@Component({
  selector: 'app-list-sample-6',
  styleUrls: ['./list-sample-6.component.css'],
  templateUrl: './list-sample-6.component.html'
})
export class ListSample6Component {

    @ViewChild('fruitList', { static: true })
    public fruitList: IgxListComponent;

    public fruitsData: string[] = [];

    constructor() { }

    public loadFruits() {
        this.fruitList.isLoading = true;
        setTimeout(() => {
            const availableFruits: string[] = ['banana', 'orange', 'apple', 'strawberry', 'pear'];
            availableFruits.forEach((fruit) => { this.fruitsData.push(fruit); });
            this.fruitList.isLoading = false;
        }, 1000);
    }

}
