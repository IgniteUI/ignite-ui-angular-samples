import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-radio-group-sample',
    styleUrls: ['./radio-group-sample.component.css'],
    templateUrl: './radio-group-sample.component.html'
})
export class RadioGroupSampleComponent {
    public fruitsForm: FormGroup;
    public fruits = ['Apple', 'Mango', 'Banana', 'Orange'];
    public newModel: FruitData;
    public model: FruitData;

    constructor(private _formBuilder: FormBuilder) {
        // Simulate getting data from external service
        this.model = {
            favFruit: this.fruits[0],
            fullName: 'John Doe'
        };

        this.createForm();
    }

    public onSubmit() {
        if (this.fruitsForm.valid) {
            // simulate new model creation and send the new data to external service
            this.newModel = {
                favFruit: this.fruitsForm.value.favoriteFruit,
                fullName: this.fruitsForm.value.fullName
            };
        } else {
            this.newModel = null;
        }
    }

    public onReset() {
        this.fruitsForm.patchValue({
            favoriteFruit: this.model.favFruit,
            fullName: this.model.fullName
        });
        this.newModel = null;
    }

    private createForm() {
        this.fruitsForm = this._formBuilder.group({
            favoriteFruit: ['', Validators.required],
            fullName: ''
        });

        this.fruitsForm.setValue({
            favoriteFruit: this.model.favFruit,
            fullName: this.model.fullName
        });
    }
}

export class FruitData {
    public fullName: string;
    public favFruit: string;
}
