import { useAnimation } from '@angular/animations';
import { Component, ViewChild } from '@angular/core';

import {
    IgxExpansionPanelComponent,
    slideInLeft,
    slideOutRight
} from 'igniteui-angular';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-expansion-sample-5',
    styleUrls: ['./expansion-sample-5.component.css'],
    templateUrl: './expansion-sample-5.component.html'
})
export class ExpansionPanelSample5Component {

    @ViewChild(IgxExpansionPanelComponent, { static: true })
    public panel: IgxExpansionPanelComponent;

    public animationSettingsCustom = {
        closeAnimation: useAnimation(slideOutRight, {
                params: {
                    duration: '100ms',
                    toPosition: 'translateX(25px)'
            }
        }),
        openAnimation: useAnimation(slideInLeft, {
                params: {
                    duration: '500ms',
                    fromPosition: 'translateX(-15px)',
                    startOpacity: 0.1
                }
            })
    };

    public user = {
        email: '',
        fullName: '',
        phone: undefined
    };

    public collapsed() {
        return this.panel && this.panel.collapsed;
    }
}
