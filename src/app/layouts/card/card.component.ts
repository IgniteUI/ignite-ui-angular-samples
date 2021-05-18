import { Component } from '@angular/core';
import { Card } from './card.blueprint';

@Component({
    selector: 'app-card',
    styleUrls: ['./card.component.css'],
    templateUrl: './card.component.html'
})
export class CardComponent {
    public card = new Card({
        buttons: ['read more'],
        content: `New York City comprises 5 boroughs sitting where the
                  Hudson River meets the Atlantic Ocean. At its core is Manhattan,
                  a densely populated borough that’s among the world’s major commercial,
                  financial and cultural centers.`,
        icons: ['favorite', 'share'],
        imageUrl: 'assets/images/card/media/ny.jpg',
        subtitle: 'City in New York',
        title: 'New York City'
    });
}
