import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import { ColumnPinningPosition, IgxColumnComponent, IgxGridComponent, IPinningConfig } from 'igniteui-angular';
import { data } from '../../data/athletesData';
import { athletesData } from '../services/data';

@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [],
    selector: 'app-grid-sample',
    styleUrls: ['grid-right-pinning.component.css'],
    templateUrl: 'grid-right-pinning.component.html'
})

export class RightPinningSampleComponent implements OnInit{
    @ViewChild('grid1', { static: true })
    public grid1: IgxGridComponent;

    public data: any[];
    public athletesData: any[];
    public columns: any[];
    public pinningConfig: IPinningConfig = { columns: ColumnPinningPosition.End };
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    private _columnsPinned: boolean = true;

    public ngOnInit(): void {
        this.data = athletesData;
        this.athletesData = data;
        let i = 0;
        this.data.forEach((x) => {
            x.FirstPlaces = Math.floor(Math.random() * Math.floor(3));
            x.SecondPlaces = Math.floor(Math.random() * Math.floor(4));
            x.ThirdPlaces = Math.floor(Math.random() * Math.floor(5));
            x.RegistrationDate = this.generateReadableDate(x.Registered);
            x.Birthday = this.generateReadableDate(this.athletesData[i].birthday);
            x.Sponsor = this.athletesData[i].company;
            x.Agent = this.athletesData[i].name;
            x.AgentContact = this.athletesData[i].email;
            x.AgentPhone = this.athletesData[i].work_phone;
            i++;
        });
    }

    public toggleColumn(col: IgxColumnComponent): void {
        col.pinned ? col.unpin() : col.pin();
    }

    public get columnsPinned(): boolean {
        return this._columnsPinned;
    }

    public set columnsPinned(pinned) {
        this._columnsPinned = !this._columnsPinned;
    }

    private generateReadableDate(timestamp: string): Date {
        let dateObj = new Date(timestamp);
        if (isNaN(dateObj.getTime())) {
            dateObj = new Date(timestamp.split(' ')[0]);
        }
        return dateObj;
    }

}
