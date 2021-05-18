import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-buttons-display-density',
    styleUrls: ['./buttons-display-density.component.css'],
    templateUrl: './buttons-display-density.component.html'
})
export class ButtonsDisplayDensityComponent implements OnInit {
    public density = 'comfortable';
    public displayDensities;

    public ngOnInit(): void {
        this.displayDensities = [
            { label: 'comfortable', selected: this.density === 'comfortable', togglable: true },
            { label: 'cosy', selected: this.density === 'cosy', togglable: true },
            { label: 'compact', selected: this.density === 'compact', togglable: true }
        ];
    }

    public selectDensity(event) {
        this.density = this.displayDensities[event.index].label;
    }
}
