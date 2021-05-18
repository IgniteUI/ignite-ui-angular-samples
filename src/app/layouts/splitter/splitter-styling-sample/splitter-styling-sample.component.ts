import { Component } from '@angular/core';
import { SplitterType } from 'igniteui-angular';

@Component({
    selector: 'app-splitter-styling-sample',
    styleUrls: ['splitter-styling-sample.component.css'],
    templateUrl: 'splitter-styling-sample.component.html'
})
export class SplitterStylingSampleComponent {
    public type = SplitterType.Horizontal;
}
