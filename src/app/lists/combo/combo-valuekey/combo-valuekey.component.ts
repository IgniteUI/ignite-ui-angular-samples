import { Component, ViewChild } from '@angular/core';
import { IgxComboComponent } from 'igniteui-angular';
import { CITIES, ICity } from './cities';

@Component({
    selector: 'app-combo-valuekey',
    templateUrl: 'combo-valuekey.component.html',
    styleUrls: ['combo-valuekey.component.css']
})
export class ComboValueKeyComponent {
    @ViewChild('withValueKey', { read: IgxComboComponent })
    public comboValueKey: IgxComboComponent;

    public cities: ICity[] = CITIES;
    public selectedValueKey: string[] = ['UK01', 'BG01'];

    public selectFavorites() {
        this.comboValueKey.selectItems(['UK01', 'BG01', 'JP01', 'DE01']);
    }
}
