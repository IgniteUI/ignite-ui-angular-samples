import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';
import { DATA } from '../../data/company-data';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-grid-mrl-custom-navigation-sample',
    styleUrls: ['./grid-mrl-custom-navigation.component.css'],
    templateUrl: './grid-mrl-custom-navigation.component.html'
})
export class GridMRLCustomNavigationComponent {
    @ViewChild(IgxGridComponent, { read: IgxGridComponent, static : true })
    public grid: IgxGridComponent;

    public sourceData = DATA;

    public customNavigation(args) {
        const target = args.target;
        if (args.event.key.toLowerCase() === 'enter') {
            args.event.preventDefault();
            args.cancel = true;
            const rowIndex = target.rowIndex === undefined ? target.index : target.rowIndex;
            this.grid.navigateTo(args.event.shiftKey ? rowIndex - 1 : rowIndex + 1, target.visibleColumnIndex,
                 (obj) => {
                    obj.target.activate();
                });
        }
    }
}
