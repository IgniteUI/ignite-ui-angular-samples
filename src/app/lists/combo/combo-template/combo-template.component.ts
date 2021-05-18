import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { localData } from './local-data';

@Component({
    selector: 'app-combo-template',
    styleUrls: ['./combo-template.component.css'],
    templateUrl: './combo-template.component.html'
})
export class ComboTemplateComponent implements OnInit {
    public lData: any[];

    constructor(public cdr: ChangeDetectorRef) {}

    public ngOnInit() {
        this.lData = localData;
    }
}
