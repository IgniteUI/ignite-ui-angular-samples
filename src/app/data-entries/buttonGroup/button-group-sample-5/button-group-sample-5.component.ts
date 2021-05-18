import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-button-group-sample-5',
    styleUrls: ['./button-group-sample-5.component.css'],
    templateUrl: './button-group-sample-5.component.html'
})
export class ButtonGroupSample5Component implements OnInit {

    public rippleColor = 'grey';

    public displayDensity = 'comfortable';
    public displayDensities;

    public ngOnInit() {
        this.displayDensities = [
            { label: 'compact', selected: this.displayDensity === 'compact', togglable: true },
            { label: 'cosy', selected: this.displayDensity === 'cosy', togglable: true },
            { label: 'comfortable', selected: this.displayDensity === 'comfortable', togglable: true }
        ];
    }

    public selectDensity(event) {
        this.displayDensity = this.displayDensities[event.index].label;
    }

}
