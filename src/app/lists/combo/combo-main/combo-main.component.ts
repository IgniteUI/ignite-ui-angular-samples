import { Component, OnInit } from '@angular/core';
import { localData } from './local-data';

@Component({
    selector: 'app-combo-main',
    styleUrls: ['./combo-main.component.css'],
    templateUrl: './combo-main.component.html'
})

export class ComboMainComponent implements OnInit {
    public lData: any[];

    public ngOnInit() {
        this.lData = localData;
    }
}
