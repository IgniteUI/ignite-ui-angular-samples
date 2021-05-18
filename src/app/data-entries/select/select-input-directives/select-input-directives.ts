import { Component, ViewChild } from '@angular/core';
import { IgxSelectComponent } from 'igniteui-angular';

@Component({
    selector: 'app-select-input-directives',
    styleUrls: ['select-input-directives.css'],
    templateUrl: 'select-input-directives.html'
})

export class SelectInputDirectivesComponent {
    @ViewChild(IgxSelectComponent, { static: true })
    public igxSelect: IgxSelectComponent;
    public selected = '';

    public items: string[] = ['Orange', 'Apple', 'Banana', 'Mango'];

    public clearSelection(event: MouseEvent) {
        this.selected = '';
        // prevent the drop-down container from opening
        event.stopPropagation();
    }
}
