import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IComboSelectionChangeEventArgs, IgxToastComponent } from 'igniteui-angular';
import { getHeroWeaponsData, IHeroWeapon } from '../../../data/heroData';

@Component({
    selector: 'app-combo',
    styleUrls: ['./combo-styling.component.css'],
    templateUrl: './combo-styling.component.html'
})
export class ComboStylingComponent implements OnInit {
    @ViewChild('loadToast', { read: IgxToastComponent, static: true })
    public loadToast: IgxToastComponent;

    public weaponsData: IHeroWeapon[] = [];

    constructor(public elem: ElementRef) {
    }

    public ngOnInit() {
        this.weaponsData = getHeroWeaponsData();
    }

    public setWeaponsLimit(event: IComboSelectionChangeEventArgs) {
        this.loadToast.position = 'middle';
        // this.loadToast.autoHide = true;

        if (event.newSelection.length > 2) {
            event.cancel = true;
            this.loadToast.open('Choose only two items');
        }
    }
}
