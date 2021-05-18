import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-reactive-form',
    styleUrls: ['./reactive-forms.component.css'],
    templateUrl: './reactive-forms.component.html'
})
export class ReactiveFormsSampleComponent {
    public genres = [];
    public user: FormGroup;
    public minTime = '06:15:30';
    public maxTime = '09:15:30';
    public minDate = new Date();
    public maxDate = new Date(new Date(this.minDate.getFullYear(), this.minDate.getMonth(), this.minDate.getDate() + 14));


    constructor(fb: FormBuilder) {
        this.user = fb.group({
            date: ['', Validators.required],
            time: ['', Validators.required],
            email: ['', Validators.required],
            fullName: ['', Validators.required],
            genres: [''],
            movie: ['', Validators.required],
            phone: ['']
        });

        this.genres = [
            { type: 'Action', movies: ['The Matrix', 'Kill Bill: Vol.1', 'The Dark Knight Rises'] },
            { type: 'Adventure', movies: ['Interstellar', 'Inglourious Basterds', 'Inception'] },
            // tslint:disable-next-line:object-literal-sort-keys
            {
                type: 'Comedy', movies: ['Wild Tales', 'In Bruges', 'Three Billboards Outside Ebbing, Missouri',
                    'Untouchable', '3 idiots']
            },
            { type: 'Crime', movies: ['Training Day', 'Heat', 'American Gangster'] },
            { type: 'Drama', movies: ['Fight Club', 'A Beautiful Mind', 'Good Will Hunting', 'City of God'] },
            { type: 'Biography', movies: ['Amadeus', 'Bohemian Rhapsody'] },
            { type: 'Mystery', movies: ['The Prestige', 'Memento', 'Cloud Atlas'] },
            { type: 'Musical', movies: ['All That Jazz'] },
            { type: 'Romance', movies: ['Love Actually', 'In The Mood for Love'] },
            { type: 'Sci-Fi', movies: ['The Fifth Element'] },
            { type: 'Thriller', movies: ['The Usual Suspects'] },
            { type: 'Western', movies: ['Django Unchained'] }
        ];
    }

    public onSubmit() {
        console.log(this.user);
    }
}
