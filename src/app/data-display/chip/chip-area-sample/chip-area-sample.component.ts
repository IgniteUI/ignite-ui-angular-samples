import { ChangeDetectorRef, Component } from '@angular/core';
import { IBaseChipEventArgs, IChipsAreaReorderEventArgs } from 'igniteui-angular';

@Component({
    selector: 'app-chip-area-sample',
    styleUrls: ['./chip-area-sample.component.css'],
    templateUrl: './chip-area-sample.component.html'
})

export class ChipAreaSampleComponent {
    public chipList = [
        {
            id: '770-504-2217',
            name: 'Terrance Orta',
            photo: 'assets/images/men/27.jpg'
        },
        {
            id: '423-676-2869',
            name: 'Richard Mahoney',
            photo: 'assets/images/men/13.jpg'
        },
        {
            id: '859-496-2817',
            name: 'Donna Price',
            photo: 'assets/images/women/50.jpg'
        }
    ];


    constructor(public changeDetectionRef: ChangeDetectorRef) { }

    public chipRemoved(event: IBaseChipEventArgs) {
        this.chipList = this.chipList.filter((item) => item.id !== event.owner.id);
        this.changeDetectionRef.detectChanges();
    }

    public chipsOrderChanged(event: IChipsAreaReorderEventArgs) {
        const newChipList = [];
        for (const chip of event.chipsArray) {
            const chipItem = this.chipList.filter((item) => item.id === chip.id)[0];
            newChipList.push(chipItem);
        }
        this.chipList = newChipList;
    }
}
