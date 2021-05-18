import { Component, OnInit } from '@angular/core';
import { DATA } from '../../../data/animations-data';

@Component({
    selector: 'app-tree-basic-sample',
    templateUrl: './tree-basic-sample.component.html',
    styleUrls: ['./tree-basic-sample.component.css']
})
export class TreeBasicSampleComponent implements OnInit {
    public data = DATA;

    constructor() { }

    ngOnInit(): void {
    }

}
