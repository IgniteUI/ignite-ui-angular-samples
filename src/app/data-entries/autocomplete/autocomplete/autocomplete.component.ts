import { Component, Pipe, PipeTransform } from '@angular/core';

@Component({
    selector: 'app-autocomplete',
    styleUrls: ['./autocomplete.component.css'],
    templateUrl: './autocomplete.component.html'
})
export class AutocompleteBasicComponent {
    public towns = [];
    public townSelected;

    constructor() {
        this.towns = [
            'New York', 'Washington, D.C.', 'London', 'Berlin', 'Sofia', 'Rome', 'Kiev',
            'Copenhagen', 'Paris', 'Barcelona', 'Vienna', 'Athens', 'Dublin', 'Yerevan',
            'Oslo', 'Helsinki', 'Stockholm', 'Prague', 'Istanbul', 'El Paso', 'Florence', 'Moscow',
            'Jambol', 'Talin', 'Zlatna Panega', 'Queenstown', 'Gabrovo', 'Ugurchin', 'Xanthi'];
    }
}

@Pipe({ name: 'startsWith' })
export class AutocompletePipeStartsWith implements PipeTransform {
    public transform(collection: any[], term = '') {
        return collection.filter((item) => item.toString().toLowerCase().startsWith(term.toString().toLowerCase()));
    }
}
