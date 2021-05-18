import { Component } from '@angular/core';
import { SplitterType } from 'igniteui-angular';

@Component({
    selector: 'app-splitter-horizontal-sample',
    styleUrls: ['splitter-horizontal-sample.component.css'],
    templateUrl: 'splitter-horizontal-sample.component.html'
})
export class SplitterHorizontalSampleComponent {
    public type = SplitterType.Horizontal;
}
