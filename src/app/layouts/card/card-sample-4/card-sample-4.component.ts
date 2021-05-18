import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxExpansionPanelComponent, IgxIconService } from 'igniteui-angular';

import {
    Card,
    IWeatherDetails,
    IWeatherList,
    weatherDetailsFactory,
    weatherListFactory
} from '../card.blueprint';

@Component({
    selector: 'app-card-sample-4',
    styleUrls: ['./card-sample-4.component.css'],
    templateUrl: './card-sample-4.component.html'
})
export class CardSample4Component implements OnInit {
    @ViewChild(IgxExpansionPanelComponent, { static: true })
    public panel: IgxExpansionPanelComponent;

    public cards: Card[];
    public details: IWeatherDetails[];
    public days: IWeatherList[];

    constructor(private iconService: IgxIconService) {
        this.iconService.addSvgIcon('rain', 'assets/images/card/icons/rain.svg', 'weather-icons');
        this.iconService.addSvgIcon('breeze', 'assets/images/card/icons/breeze.svg', 'weather-icons');
    }

    public toggleDetails() {
        this.panel.toggle();
    }

    public ngOnInit() {
        this.cards = [
            new Card({
                buttons: ['RESERVE'],
                chips: ['5:30', '7:30', '8:00', '9:00'],
                content: `Small plates, salads & sandwiches setting with 12 indoor seats plus patio seating.`,
                imageUrl: 'assets/images/card/media/cafe.jpg',
                subtitle: '$ - Italian, Cafe',
                title: 'Café Badilico'
            }),
            new Card({
                buttons: ['Details'],
                content: '37',
                imageUrl: 'assets/images/card/media/weather.png',
                subtitle: 'Mon 12:30 PM, Mostly sunny',
                title: 'Sofia - Bulgaria',
                unit: '°C'
            })
        ];

        this.details = [
            weatherDetailsFactory({
                icon: 'rain',
                label: 'Participation',
                value: '12%'
            }),
            weatherDetailsFactory({
                icon: 'breeze',
                label: 'Wind',
                value: '23 km/h'
            })
        ];

        this.days = [
            weatherListFactory({
                day: 'Tuesday',
                icon: 'wb_cloudy',
                tempHeight: '18°',
                tempLow: '11°'
            }),
            weatherListFactory({
                day: 'Wednesday',
                icon: 'wb_cloudy',
                tempHeight: '16°',
                tempLow: '10°'
            }),
            weatherListFactory({
                day: 'Thursday',
                icon: 'wb_sunny',
                isSunny: 'true',
                tempHeight: '22°',
                tempLow: '12°'
            }),
            weatherListFactory({
                day: 'Friday',
                icon: 'wb_cloudy',
                tempHeight: '28°',
                tempLow: '17°'
            }),
            weatherListFactory({
                day: 'Saturday',
                icon: 'wb_cloudy',
                tempHeight: '21°',
                tempLow: '16°'
            }),
            weatherListFactory({
                day: 'Sunday',
                icon: 'wb_sunny',
                isSunny: 'true',
                tempHeight: '29°',
                tempLow: '20°'
            })
        ];
    }
}
