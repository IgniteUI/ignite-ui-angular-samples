import { ChangeDetectorRef, Component } from '@angular/core';
import { IBaseChipEventArgs } from 'igniteui-angular';

@Component({
    selector: 'app-chip-simple',
    styleUrls: ['./chip-simple.component.css'],
    templateUrl: './chip-simple.component.html'
})

export class ChipSimpleComponent {
    public chipList = [
        {
           text: 'Country',
           id: '1',
           icon: 'place'
        },
        {
            text: 'City',
            id: '2',
            icon: 'location_city'
        },
        {
            text: 'Town',
            id: '3',
            icon: 'store'
        },
        {
            text: 'First Name',
            id: '4',
            icon: 'person_pin'
        }
    ];

    constructor(public changeDetectionRef: ChangeDetectorRef) { }


    public chipRemoved(event: IBaseChipEventArgs) {
        this.chipList = this.chipList.filter((item) => item.id !== event.owner.id);
        this.changeDetectionRef.detectChanges();
    }
}
