import { Component, OnInit } from '@angular/core';
import { Card } from '../card.blueprint';

@Component({
  selector: 'app-card-styling-sample',
  templateUrl: './card-styling-sample.component.html',
  styleUrls: ['./card-styling-sample.component.css']
})
export class CardStylingSampleComponent {
    public card = new Card({
        content: `Hi! I'm Jane, photographer and filmmaker.
        Photography is a way of feeling, of touching,
        of loving. What you have caught on film is captured forever...
        it remembers little things, long after you have
        forgotten everything.`,
        icons: ['person', 'favorite', 'share'],
        imageUrl: 'https://images.unsplash.com/'
        + 'photo-1541516160071-4bb0c5af65ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        subtitle: 'Professional Photographer',
        title: 'Jane Doe'
    });
}
