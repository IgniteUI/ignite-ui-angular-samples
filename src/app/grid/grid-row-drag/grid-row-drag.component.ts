/* eslint-disable @typescript-eslint/naming-convention */
import { Component, ViewChildren } from '@angular/core';
import { moonData, planetData } from './data';
import { PlanetComponent as PlanetComponent } from './planet/planet.component';

// eslint-disable-next-line no-shadow
enum HoverClassList {
    ALLOW = 'allow-drop',
    DENY = 'deny-drop'
}

@Component({
    selector: 'app-grid-row-drag-sample',
    styleUrls: ['./grid-row-drag.component.css'],
    templateUrl: 'grid-row-drag.component.html'
})

export class GridDragSampleComponent {
    @ViewChildren(PlanetComponent) public planets: PlanetComponent[];
    public moonData: any[];
    public planetData: any[];

    constructor() {
        this.moonData = moonData;
        this.planetData = planetData;
    }

    public onRowDragStart(args) {
        if (args.dragData.isSelected) {
            args.cancel = true;
        }
    }

    public onRowDragEnd(args) {
        args.animation = true;
    }

    public onEnter(args, planet: PlanetComponent) {
        args.drag.ghostElement.classList.add(
            this.isDropAllowed(args.dragData.rowData.name, planet.name) ? HoverClassList.ALLOW : HoverClassList.DENY);
    }

    public onLeave(args) {
        const dragGhost: HTMLElement =  args.drag.ghostElement;

        if (dragGhost) {
            dragGhost.classList.remove(HoverClassList.ALLOW);
            dragGhost.classList.remove(HoverClassList.DENY);
        }
    }

    public onDrop(args, planet: PlanetComponent) {
        const row: any = args.dragData;
        if (this.isDropAllowed(row.rowData.name, planet.name)) {
            row.rowData.planet = planet.name;
            row.grid.selectRows([row.rowID]);

            planet.moonsCount++;
        }
    }

    private isDropAllowed(dragMoonName: string, dropPlanetName: string): boolean {
        return this.planetData.filter((p) => p.name === dropPlanetName)[0].moons.includes(dragMoonName);
    }
}
