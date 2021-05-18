import { Component, ViewChild, ViewEncapsulation, OnInit , AfterViewInit} from '@angular/core';
import { IgxColumnComponent, IgxGridComponent, IgxIconService } from 'igniteui-angular';
import { icons } from '../services/svgIcons';

import { DATA } from '../../data/customers';

const FILTERING_ICONS_FONT_SET = 'filtering-icons';
@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [],
    selector: 'app-grid-sample',
    styleUrls: ['grid-pinning.component.css'],
    templateUrl: 'grid-pinning.component.html'

})

export class PinningSampleComponent implements OnInit, AfterViewInit {
    @ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;

    public data: any[];
    public columns: any[];

    constructor(private iconService: IgxIconService) {
    }

    public ngOnInit(): void {
        this.columns = [
            { field: 'ID', header: 'ID', width: 100, hidden: true },
            { field: 'CompanyName', header: 'Company Name', width: 300 },
            { field: 'ContactName', header: 'Contact Name', width: 200, pinned: true },
            { field: 'ContactTitle', header: 'Contact Title', width: 200, pinned: true },
            { field: 'Address', header: 'Address', width: 300 },
            { field: 'City', header: 'City', width: 120 },
            { field: 'Region', header: 'Region', width: 120 },
            { field: 'PostalCode', header: 'Postal Code', width: 150 },
            { field: 'Phone', header: 'Phone', width: 150 },
            { field: 'Fax', header: 'Fax', width: 150 }
        ];
        this.data = DATA;
    }

    public ngAfterViewInit() {
        const pinnedIcons = icons.filter(icon => icon.name === 'pin' || icon.name === 'unpin');
        pinnedIcons.forEach(icon => {
            if (!this.iconService.isSvgIconCached(icon.name, FILTERING_ICONS_FONT_SET)) {
                this.iconService.addSvgIconFromText(icon.name, icon.value, FILTERING_ICONS_FONT_SET);
            }
        });
    }

    public toggleColumn(col: IgxColumnComponent) {
        col.pinned ? col.unpin() : col.pin();
    }
}
