import { Component } from '@angular/core';

@Component({
    selector: 'app-checkbox-sample-3',
    styleUrls: ['./checkbox-sample-3.component.css'],
    templateUrl: './checkbox-sample-3.component.html'
})
export class CheckboxSample3Component {
    public tasks = [
        { done: true, description: 'Research' },
        { done: true, description: 'Implement' },
        { done: false, description: 'Test' }
    ];

    public get masterCheckbox() {
        return this.tasks.reduce(
            (acc, curr, idx, arr) => {
                acc.checked = acc.checked && curr.done;
                acc.done = curr.done ? acc.done + 1 : acc.done;
                acc.indeterminate = acc.done === arr.length ? false : !!acc.done;

                return acc;
            },
            {
                checked: true,
                done: 0,
                indeterminate: false
            }
        );
    }

    public toggleAll() {
        if (this.masterCheckbox.checked) {
            for (const task of this.tasks) {
                task.done = false;
            }
        } else {
            for (const task of this.tasks) {
                task.done = true;
            }
        }
    }
}
