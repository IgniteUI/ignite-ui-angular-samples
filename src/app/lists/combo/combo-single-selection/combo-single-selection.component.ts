import { Component, OnInit } from '@angular/core';
import { IComboSelectionChangeEventArgs } from 'igniteui-angular';
import { localData } from './local-data';

@Component({
    selector: 'app-combo-single-selection',
    styleUrls: ['./combo-single-selection.component.css'],
    templateUrl: './combo-single-selection.component.html'
})

export class ComboSingleSelectionComponent implements OnInit {
    public lData: any[];

    public ngOnInit() {
        this.lData = localData;
    }

    public singleSelection(event: IComboSelectionChangeEventArgs) {
      if (event.added.length) {
        event.newSelection = event.added;
      }
    }
}
