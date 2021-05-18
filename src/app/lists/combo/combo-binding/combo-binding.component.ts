import { Component, ViewChild } from '@angular/core';
import { IgxComboComponent } from 'igniteui-angular';
import { CITIES, ICity } from './cities';

@Component({
    selector: 'app-combo-binding',
    templateUrl: 'combo-binding.component.html',
    styleUrls: ['combo-binding.component.css']
})
export class ComboBindingComponent {
    @ViewChild('noValueKey', { read: IgxComboComponent })
    public comboNoValueKey: IgxComboComponent;

    public cities: ICity[] = CITIES;
    public selectedNoValueKey: ICity[] = [this.cities[4], this.cities[0]];

    public selectFavorites() {
        const selectedItems: ICity[] = this.cities.filter((e: ICity) => ['UK01', 'BG01', 'JP01', 'DE01'].indexOf(e.id) > -1);
        this.comboNoValueKey.selectItems(selectedItems);
    }
}
