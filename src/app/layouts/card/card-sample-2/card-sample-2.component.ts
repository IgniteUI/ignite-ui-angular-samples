import { Component } from '@angular/core';
import { Card } from '../card.blueprint';

@Component({
    selector: 'app-card-sample-2',
    styleUrls: ['./card-sample-2.component.css'],
    templateUrl: './card-sample-2.component.html'
})
export class CardSample2Component {
    public card = new Card({
        content: `As I have always said: I write what’s real and what’s true,
        even if it means throwing myself under the bus.`,
        icons: ['skip_previous', 'play_arrow', 'skip_next'],
        imageUrl: 'assets/images/card/media/ROZES-Under-the-Grave.jpg',
        subtitle: 'Under the Grave (2016)',
        title: 'Rozes'
    });

    public horizontal = true;
}
