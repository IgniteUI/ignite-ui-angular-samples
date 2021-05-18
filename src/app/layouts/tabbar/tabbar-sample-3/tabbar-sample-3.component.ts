/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISelectionEventArgs } from 'igniteui-angular';

@Component({
    selector: 'app-tabbar-sample-3',
    styleUrls: ['tabbar-sample-3.component.css'],
    templateUrl: './components/tabbar-sample-3.component.html'
})
export class TabbarSample3Component implements OnInit {
    public urlLocations = [
        '',
        '/arrivals',
        '/departures',
        '/canceled'
    ];

    constructor(private router: Router) { }

    public get currentDocumentLocation() {
        return this.router.url;
    }

    public ngOnInit() {
        let currentAddress: string = this.router.url;

        if (currentAddress && currentAddress[currentAddress.length - 1] === '/') {
            currentAddress = currentAddress.substring(0, currentAddress.length - 1);
        }

        for (let i = 0; i < this.urlLocations.length; i++) {
            this.urlLocations[i] = currentAddress + this.urlLocations[i];
        }
    }

    public handleSelection(eventArgs: ISelectionEventArgs): void {
        this.router.navigateByUrl(eventArgs.newSelection.value);
    }
}

@Component({
    template: `
        <br>
        <igx-grid igxPreventDocumentScroll [data]='data'>
            <igx-column [field]=''Flight'' width='100'></igx-column>
            <igx-column [field]=''From'' width='120'></igx-column>
            <igx-column [field]=''Time'' width='100'></igx-column>
            <igx-column [field]=''Status'' width='120'></igx-column>
        </igx-grid>
    `
})
export class BottomNavRoutingView1Component {
    public data = [
        { Flight: 'LH1702', From: 'Munich', Time: '12:25', Status: 'Landed'},
        { Flight: 'W64332', From: 'Dortmund', Time: '12:25', Status: 'Expected'},
        { Flight: 'W64428', From: 'Tel Aviv', Time: '12:40', Status: 'Expected'},
        { Flight: 'OS795', From: 'Vienna', Time: '12:45', Status: 'Expected'},
        { Flight: 'UA9832', From: 'Vienna', Time: '12:45', Status: 'Expected'}
    ];
}

@Component({
    template: `
        <br>
        <igx-grid igxPreventDocumentScroll [data]='data'>
            <igx-column [field]=''Flight'' width='100'></igx-column>
            <igx-column [field]=''From'' width='120'></igx-column>
            <igx-column [field]=''Time'' width='100'></igx-column>
            <igx-column [field]=''Status'' width='120'></igx-column>
        </igx-grid>
    `
})
export class BottomNavRoutingView2Component {
    public data = [
        { Flight: 'SU2061', From: 'Moscow', Time: '12:25', Status: 'Boarding'},
        { Flight: 'FB1363', From: 'Moscow', Time: '12:25', Status: 'Boarding'},
        { Flight: 'FB491', From: 'Zurich', Time: '12:30', Status: 'Taxing'},
        { Flight: 'FR6043', From: 'Munich', Time: '12:40', Status: 'Boarding'},
        { Flight: 'W64329', From: 'Frankfurt', Time: '12:55', Status: 'Expected'},
        { Flight: 'QR228', From: 'Doha', Time: '13:00', Status: 'Check-in'}
    ];
}

@Component({
    template: `
        <br>
        <igx-grid igxPreventDocumentScroll [data]='data'>
            <igx-column [field]=''Flight'' width='100'></igx-column>
            <igx-column [field]=''From'' width='120'></igx-column>
            <igx-column [field]=''Time'' width='100'></igx-column>
            <igx-column [field]=''Status'' width='120'></igx-column>
        </igx-grid>
    `
})
export class BottomNavRoutingView3Component {
    public data = [
        { Flight: 'FB1363', From: 'Moscow', Time: '12:25', Status: 'Cancelled'},
        { Flight: 'FB491', From: 'Zurich', Time: '12:30', Status: 'Cancelled'},
        { Flight: 'FB437', From: 'Frankfurt', Time: '12:45', Status: 'Cancelled'}
    ];
}
