import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {
    ColumnPinningPosition,
    IgxIconService,
    IgxTreeGridComponent,
    IPinningConfig,
    RowPinningPosition,
    RowType
} from 'igniteui-angular';
import { icons } from '../../grid/services/svgIcons';
import { generateEmployeeFlatData, IEmployee } from '../data/employees-flat';

const FILTERING_ICONS_FONT_SET = 'filtering-icons';

@Component({
    selector: 'app-tree-grid-row-pinning-extra-column',
    styleUrls: ['tree-grid-row-pinning-extra-column.component.css'],
    templateUrl: 'tree-grid-row-pinning-extra-column.component.html'
})
export class TreeGridRowPinningExtraColumnSampleComponent implements OnInit, AfterViewInit {

    @ViewChild('treeGrid', { static: true }) public treeGrid1: IgxTreeGridComponent;
    public data: IEmployee[];
    public columns: any[];
    public pinningConfig: IPinningConfig = { rows: RowPinningPosition.Top, columns: ColumnPinningPosition.End };

    constructor(private iconService: IgxIconService) { }

    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();

        this.columns = [
            { field: 'Name', label: 'Full Name', dataType: 'string' },
            { field: 'Age', label: 'Age', dataType: 'number' },
            { field: 'Title', label: 'Title', dataType: 'string' },
            { field: 'HireDate', label: 'Hire Date', dataType: 'date' }
        ];
    }

    public ngAfterViewInit() {
        const pinnedIcons = icons.filter(icon => icon.name === 'pin' || icon.name === 'unpin');
        pinnedIcons.forEach(icon => {
            if (!this.iconService.isSvgIconCached(icon.name, FILTERING_ICONS_FONT_SET)) {
                this.iconService.addSvgIconFromText(icon.name, icon.value, FILTERING_ICONS_FONT_SET);
            }
        });
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
}
