import { Component } from '@angular/core';
import { Card } from '../card.blueprint';

@Component({
    selector: 'app-igx-card-simple',
    styleUrls: ['./card-sample-1.component.css'],
    templateUrl: './card-sample-1.component.html'
})
export class CardSample1Component {
    public card = new Card({
        icons: ['skip_previous', 'play_arrow', 'skip_next'],
        imageUrl: 'assets/images/card/media/ROZES-Under-the-Grave.jpg',
        subtitle: 'Under the Grave (2016)',
        title: 'Rozes'
    });
}
