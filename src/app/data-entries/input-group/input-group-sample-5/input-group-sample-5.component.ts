import { Component } from '@angular/core';
import { BaseInputGroupSampleComponent } from '../base-input.component';
import { IGX_INPUT_GROUP_TYPE } from 'igniteui-angular';

@Component({
    selector: 'app-input-group-sample-5',
    styleUrls: ['./input-group-sample-5.component.css'],
    templateUrl: './input-group-sample-5.component.html',
    providers: [{ provide: IGX_INPUT_GROUP_TYPE, useValue: 'box' }]
})
export class InputGroupSample5Component extends BaseInputGroupSampleComponent { }
