import { Component, ViewChild } from '@angular/core';
import {
    IgxExpansionPanelComponent, IgxToastComponent
} from 'igniteui-angular';
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-expansion-sample-2',
    styleUrls: ['./expansion-sample-2.component.css'],
    templateUrl: './expansion-sample-2.component.html'
})
export class ExpansionPanelSample2Component {
    @ViewChild(IgxExpansionPanelComponent, { read: IgxExpansionPanelComponent, static: true })
    public panel: IgxExpansionPanelComponent;
    @ViewChild(IgxToastComponent, { read: IgxToastComponent, static: true })
    public eventToast: IgxToastComponent;
    public readMore = 'https://en.wikipedia.org/wiki/Hummingbird';
    public handleExpansion(evt?: {event: Event}) {
        this.eventToast.close();
        console.log('Expanded event thrown ', (evt ? 'with event: ' + evt.event : 'with no event'));
        this.eventToast.open('Expanded Event Fired!');
    }

    public handleCollapse(evt?: {event: Event}) {
        this.eventToast.close();
        console.log('Collapsed event thrown ', (evt ? 'with event: ' + evt.event : 'with no event'));
        this.eventToast.open('Collapsed Event Fired!');
    }
}
