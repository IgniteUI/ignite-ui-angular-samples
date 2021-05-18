import { Component, Pipe, PipeTransform } from '@angular/core';
import { ConnectedPositioningStrategy, VerticalAlignment } from 'igniteui-angular';
@Component({
    selector: 'app-movie-availability',
    styleUrls: ['./movie.component.css'],
    templateUrl: './movie.component.html'
})
export class MovieComponent {
    public cinemaSelected;

    public settings = {
        positionStrategy: new ConnectedPositioningStrategy({
            closeAnimation: null,
            openAnimation: null,
            verticalDirection: VerticalAlignment.Top,
            verticalStartPoint: VerticalAlignment.Top
        })
    };

    public towns = [
        {
          name: 'New York',
          cinemas: [
            'Regal Cinemas',
            'Village East Cinema',
            'Roxy Cinema',
            'The Paris Theatre'
        ]},
        {
            name: 'Los Angeles',
            cinemas: [
                'Arc Light',
                'Pacific Cinerama Dome',
                'New Beverly Cinema',
                'Downtown Independent'
        ]},
        {
            name: 'Seattle',
            cinemas: [
                'Central Cinema',
                'Grand Illusion Cinema',
                'Ark Lodge Cinemas',
                'Skyway Outdoor Cinema'
        ]}
    ];
}

@Pipe({ name: 'startsWith' })
export class AutocompletePipeStartsWith2 implements PipeTransform {
    public transform(collection: any[], term = '') {
        return collection.filter((item) => item.toString().toLowerCase().startsWith(term.toString().toLowerCase()));
    }
}
