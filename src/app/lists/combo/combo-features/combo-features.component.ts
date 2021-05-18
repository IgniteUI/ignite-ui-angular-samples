import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxComboComponent } from 'igniteui-angular';
import { localData } from './local-data';

@Component({
    selector: 'app-combo',
    styleUrls: ['./combo-features.component.css'],
    templateUrl: './combo-features.component.html'
})
export class ComboFeaturesComponent implements OnInit{
    @ViewChild('combo', { read: IgxComboComponent, static: true }) public combo: IgxComboComponent;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    public GROUP_KEY = 'region';
    public lData: any[];
    public filterable = true;
    public showSearchCaseIcon = false;
    public customValues = true;
    public disabled = false;

    public ngOnInit() {
        this.lData = localData;
    }

    public handleAddition(event) { }

    public enableGroups(event) {
        this.combo.groupKey = event.checked ? this.GROUP_KEY : '';
    }
}
