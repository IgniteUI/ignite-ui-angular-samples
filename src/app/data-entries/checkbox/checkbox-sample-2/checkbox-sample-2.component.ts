import { Component } from '@angular/core';

@Component({
    selector: 'app-checkbox-sample-2',
    styleUrls: ['./checkbox-sample-2.component.css'],
    templateUrl: './checkbox-sample-2.component.html'
})
export class CheckboxSample2Component {
    public tasks = [
        { done: true, description: 'Research' },
        { done: true, description: 'Implement' },
        { done: false, description: 'Test' }
    ];
}
