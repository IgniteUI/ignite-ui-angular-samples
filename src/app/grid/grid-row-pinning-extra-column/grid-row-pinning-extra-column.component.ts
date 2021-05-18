import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {
    ColumnPinningPosition,
    IgxGridComponent,
    IgxIconService,
    IPinningConfig,
    RowType,
    RowPinningPosition
} from 'igniteui-angular';
import { DATA } from '../../data/customers';
import { icons } from '../services/svgIcons';

const FILTERING_ICONS_FONT_SET = 'filtering-icons';

@Component({
    selector: 'app-grid-row-pinning-extra-column',
    templateUrl: 'grid-row-pinning-extra-column.component.html',
    styleUrls: ['./grid-row-pinning-extra-column.component.css']
})

export class GridRowPinningExtraColumnSampleComponent implements AfterViewInit {
    @ViewChild('grid', {read: IgxGridComponent, static: true})
    public grid: IgxGridComponent;
    public data: any[];
    public pinningConfig: IPinningConfig = { rows: RowPinningPosition.Top, columns: ColumnPinningPosition.End };

    constructor(private iconService: IgxIconService) {
        this.data = DATA;
    }

    public togglePinning(row: RowType, event) {
        event.preventDefault();
        if (row.pinned) {
            row.unpin();
        } else {
            row.pin();
        }
    }

    public changePinningPosition() {
        if (this.pinningConfig.rows === RowPinningPosition.Bottom) {
            this.pinningConfig = { columns: this.pinningConfig.columns, rows: RowPinningPosition.Top };
        } else {
            this.pinningConfig = { columns: this.pinningConfig.columns, rows: RowPinningPosition.Bottom };
        }
    }

    public ngAfterViewInit() {
        const pinnedIcons = icons.filter(icon => icon.name === 'pin' || icon.name === 'unpin');
        pinnedIcons.forEach(icon => {
            if (!this.iconService.isSvgIconCached(icon.name, FILTERING_ICONS_FONT_SET)) {
                this.iconService.addSvgIconFromText(icon.name, icon.value, FILTERING_ICONS_FONT_SET);
            }
        });
    }
}
