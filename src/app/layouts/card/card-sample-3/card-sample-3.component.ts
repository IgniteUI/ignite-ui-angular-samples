import { Component } from '@angular/core';
import { Card } from '../card.blueprint';

@Component({
    selector: 'app-card-sample-3',
    styleUrls: ['./card-sample-3.component.css'],
    templateUrl: './card-sample-3.component.html'
})
export class CardSample3Component {
    public horizontal = true;

    public card = new Card({
        avatarUrl: 'assets/images/card/avatars/mellow_d.jpg',
        buttons: ['play album'],
        content: `Far far away, behind the word mountains,
        far from the countries Vokalia and Consonantia,
        there live the blind texts.`,
        imageUrl: 'assets/images/card/media/here_media.jpg',
        subtitle: 'by Mellow D',
        title: 'HERE'
    });
}
