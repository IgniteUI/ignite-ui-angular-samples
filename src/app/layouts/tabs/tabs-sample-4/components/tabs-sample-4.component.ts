import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-tabs-sample-4',
    styleUrls: ['./tabs-sample-4.component.css'],
    templateUrl: './tabs-sample-4.component.html'
})
export class TabsSample4Component implements OnInit {
    public path: string;

    constructor(private router: Router) { }

    public ngOnInit() {
        this.path = this.router.url;

        this.router.events.pipe(
            filter(e => e instanceof NavigationEnd)
        ).subscribe(args => this.path = args['url']);
    }
}
