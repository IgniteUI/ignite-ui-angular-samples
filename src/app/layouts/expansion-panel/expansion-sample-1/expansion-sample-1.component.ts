import { Component, ViewChild } from '@angular/core';
import { IgxExpansionPanelComponent } from 'igniteui-angular';
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-expansion-sample-1',
    styleUrls: ['./expansion-sample-1.component.css'],
    templateUrl: './expansion-sample-1.component.html'
})
export class ExpansionPanelSample1Component {
    @ViewChild(IgxExpansionPanelComponent, { read: IgxExpansionPanelComponent, static: true })
    public panel: IgxExpansionPanelComponent;
}
