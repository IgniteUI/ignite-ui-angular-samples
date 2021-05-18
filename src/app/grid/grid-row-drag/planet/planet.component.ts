import { ChangeDetectorRef, Component, HostBinding, HostListener, Input, ViewChild } from '@angular/core';
import { IgxDialogComponent } from 'igniteui-angular';
import { IPlanet } from '../data';

@Component({
    selector: 'app-planet',
    styleUrls: ['./planet.component.css'],
    templateUrl: 'planet.component.html'
})

export class PlanetComponent {

    @ViewChild('info', { read: IgxDialogComponent, static: true })
    public info: IgxDialogComponent;

    @Input()
    public data: IPlanet;


    @HostBinding('class')
    public class = 'planet-area';

    constructor(public cdr: ChangeDetectorRef) { }

    @HostListener('click')
    public onClick() {
        this.info.open();
    }


    // eslint-disable-next-line @typescript-eslint/member-ordering
    private _moonCount = 0;

    public get name(): string {
        return this.data.name;
    }

    public get moonsCount(): number {
        return this._moonCount;
    }

    public set moonsCount(count: number) {
        this._moonCount = count;
        if (count === this.data.moons.length) {
            this.info.open();
        }
    }

    public get size(): number {
        return this.data.size * 10;
    }

    public moonClasses(moonIndex) {
        return `moon ${((moonIndex < this.moonsCount) ? 'moon-selected' : '')}`;
    }

    public get description() {
        if (this.moonsCount < this.data.moons.length) {
            return `Drag and drop here all the ${this.name} moons, listed in the grid.`;
        } else {
            return this.data.description;
        }
    }
}
