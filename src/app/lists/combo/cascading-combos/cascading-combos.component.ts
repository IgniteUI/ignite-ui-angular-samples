import { Component } from '@angular/core';
import { data } from './local-data';

@Component({
    selector: 'app-combo',
    styleUrls: ['./cascading-combos.component.css'],
    templateUrl: './cascading-combos.component.html'
})
export class CascadingCombosComponent {
    public location: { country: string; province: string; towns: string[] } = { country: '', province: '', towns: [] };
    public data = data;
    public countryData = [];
    public provinceData = [];
    public townData = [];

    constructor() {
        this.countryData = Object.keys(data);
    }

    public selectCountry(args) {
        this.provinceData = Object.keys(this.data[args.newSelection.value]);
        this.location.province = '';
        this.location.towns = [];
    }

    public selectProvince(args) {
        this.townData = this.data[this.location.country][args.newSelection.value];
        this.location.towns = [];
    }
}
