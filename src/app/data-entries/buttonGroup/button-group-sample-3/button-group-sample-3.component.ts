import { Component, OnInit } from '@angular/core';

interface IButton {
    ripple?: string;
    label?: string;
    disabled?: boolean;
    togglable?: boolean;
    selected?: boolean;
    color?: string;
    icon?: string;
}

class ToggleButton {
    private ripple: string;
    private label: string;
    private disabled: boolean;
    private togglable: boolean;
    private selected: boolean;
    private color: string;
    private icon: string;

    constructor(obj?: IButton) {
        this.ripple = obj.ripple || 'gray';
        this.label = obj.label;
        this.selected = obj.selected || false;
        this.togglable = obj.togglable || true;
        this.disabled = obj.disabled || false;
        this.color = obj.color;
        this.icon = obj.icon;
    }
}

@Component({
    selector: 'app-button-group-sample-3',
    styleUrls: ['./button-group-sample-3.component.css'],
    templateUrl: './button-group-sample-3.component.html'
})
export class ButtonGroupSample3Component implements OnInit {
    public bordersButtons: ToggleButton[];

    public ngOnInit() {
        this.bordersButtons = [
            new ToggleButton({
                icon: 'border_top',
                selected: true
            }),
            new ToggleButton({
                icon: 'border_right',
                selected: false
            }),
            new ToggleButton({
                icon: 'border_bottom',
                selected: false
            }),
            new ToggleButton({
                icon: 'border_left',
                selected: false
            })
        ];
    }
}
