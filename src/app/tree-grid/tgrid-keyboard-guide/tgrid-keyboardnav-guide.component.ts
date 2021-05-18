/* eslint-disable @angular-eslint/component-class-suffix */
/* eslint-disable @typescript-eslint/naming-convention */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    IgxColumnComponent,
    IgxColumnGroupComponent,
    IgxGridCellComponent,
    IgxListComponent,
    IgxOverlayService,
    IgxTreeGridComponent,
    IActiveNodeChangeEventArgs
} from 'igniteui-angular';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';

// eslint-disable-next-line no-shadow
enum GridSection {
    THEAD = 'igx-grid__thead-wrapper',
    TBODY = 'igx-grid__tbody-content',
    FOOTER = 'igx-grid__tfoot'
}

// eslint-disable-next-line no-shadow
enum ItemAction {
    Filterable,
    Sortable,
    Selectable,
    Groupable,
    Collapsible,
    Expandable,
    Editable,
    Always
}

// eslint-disable-next-line no-shadow
enum ElementTags {
    GROUPBY_ROW = 'IGX-GRID-GROUPBY-ROW',
    COLUMN_GROUP = 'IGX-COLUMN-GROUP'
}

class Item {
    public title: string;
    public subTitle: string;
    public action: ItemAction;
    public active = false;

    private _completed: boolean;

    public constructor(title: string, subTitle: string, completed: boolean, ítemAction?: ItemAction) {
        this.title = title;
        this.subTitle = subTitle;
        this.completed = completed;
        this.action = ítemAction;

        if (ítemAction === ItemAction.Always) {
            this.active = true;
        }
    }

    public set completed(value: boolean) {
        if (this.active || (!value && !this.completed)) {
            this._completed = value;
        }
    }

    public get completed() {
        return this._completed;
    }
}
class KeyboardHandler {
    private _collection: Item[];
    private _section: GridSection;

    public constructor(colleciton: Item[], section: GridSection) {
        this._collection = colleciton;
        this._section = section;
    }

    public set collection(collection: Item[]) {
        this._collection = collection;
    }

    public get collection() {
        return this._collection;
    }

    public set gridSection(section: GridSection) {
        this._section = section;
    }

    public get gridSection() {
        return this._section;
    }

    public enableActionItems(action: ItemAction[]) {
        this.resetCollection();
        action.forEach(element => {
            this._collection
                .filter(e => e.action === element)
                .map(e => e.active = true);
        });
    }

    public resetCollection() {
        this._collection.forEach(e => {
            if (e.action !== ItemAction.Always) {
                e.active = false;
            }
        });
    }

    public selectItem(idx: number) {
        if (!this._collection.length) {
            return;
        }

        this._collection[idx].completed = true;
    }

    public deselectItem(idx: number) {
        if (!this._collection.length) {
            return;
        }
        this._collection[idx].completed = false;
    }
}

const theadKeyCombinations = [
    new Item('space key', 'select column', false, ItemAction.Selectable),
    new Item('ctrl + arrow up/down', 'sorts the column asc/desc', false, ItemAction.Sortable),
    new Item('alt + arrow left/right/up/down', 'expand/collapse active multi column header',
        false,
        ItemAction.Collapsible),
    new Item('ctrl + shift + l', 'opens the excel style filtering', false, ItemAction.Filterable),
    new Item('alt + l', 'opens the advanced filtering', false, ItemAction.Filterable)
];

const tbodyKeyCombinations: Item[] = [
    new Item('enter', 'enter in edit mode', false, ItemAction.Editable),
    new Item('alt + arrow left/up', 'collapse row', false, ItemAction.Collapsible),
    new Item('alt + arrow right/down', 'expand row', false, ItemAction.Collapsible),
    new Item('ctrl + Home/End', 'navigates to the upper-left/bottom-right cell', false, ItemAction.Always)
];

const summaryCombinations: Item[] = [
    new Item('ArrowLeft', 'navigates one summary cell right', false, ItemAction.Always),
    new Item('ArrowRight', 'navigates one summary cell left', false, ItemAction.Always),
    new Item('Home', 'navigates to the first summary cell', false, ItemAction.Always),
    new Item('End', 'navigates to the last summary cell', false, ItemAction.Always)
];

@Component({
    selector: 'app-grid-keyboardnav',
    templateUrl: './tgrid-keyboardnav-guide.component.html',
    styleUrls: ['tgrid-keyboardnav-guide.component.css'],
    animations: [
        trigger('toggle', [
            state('selected', style({
                color: '#4eb862'
            })),
            state('deselected', style({
                color: 'black'
            })),
            transition('deselected => selected', [
                animate('.3s')
            ]),
            transition('selected => deselected', [
                animate('.3s')
            ])
        ]),
        trigger('load', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate('.3s', style({ opacity: .4 }))
            ])
        ])
    ]
})
export class TGridKeyboardnavGuide implements OnInit, OnDestroy {
    @ViewChild(IgxTreeGridComponent, { static: true })
    public tgrid: IgxTreeGridComponent;

    @ViewChild(IgxListComponent, { static: true })
    public listref: IgxListComponent;
    public data;

    public get keyboardCollection() {
        return this._keyboardHandler.collection;
    }

    public get headerList() {
        return this._keyboardHandler.gridSection === GridSection.THEAD ?
            'HEADER COMBINATIONS' : this._keyboardHandler.gridSection === GridSection.TBODY ?
                'BODY COMBITNATIONS' : this._keyboardHandler.gridSection === GridSection.FOOTER ?
                    'SUMMARY COMBINATIONS' : '';
    }

    private _destroyer = new Subject();
    private _keyboardHandler = new KeyboardHandler([], GridSection.THEAD);

    public constructor(private cdr: ChangeDetectorRef, private _overlay: IgxOverlayService) { }

    public onActiveNodeChange(evt: IActiveNodeChangeEventArgs) {
        if (this.tgrid.crudService.cell) {
            return;
        }

        const gridSection = evt.row < 0 ? GridSection.THEAD : evt.row === this.tgrid.dataView.length ?
            GridSection.FOOTER : GridSection.TBODY;
        this.changeKeyboardCollection(gridSection);
        this.toggleHeaderCombinations(evt);
        this.toggleBodyCombinations(evt);
    }

    public ngOnInit() {
        this.data = generateEmployeeDetailedFlatData();

        this.tgrid.columnSelected.pipe(takeUntil(this._destroyer))
            .subscribe((args) => {
                const evt = args.event;
                if (evt.type === 'keydown') {
                    this._keyboardHandler.selectItem(0);
                }
            });

        this.tgrid.rowToggle.pipe(takeUntil(this._destroyer))
            .subscribe((args) => {
                const evt = args.event as KeyboardEvent;
                if (evt.type !== 'keydown') {
                    return;
                }

                return evt.code === 'ArrowLeft' || evt.code === 'ArrowUp' ? this._keyboardHandler.selectItem(1) :
                    this._keyboardHandler.selectItem(2);
            });

        this.listref.itemClicked.pipe(takeUntil(this._destroyer))
            .subscribe((args) => {
                args.event.stopPropagation();
            });
    }

    public ngOnDestroy() {
        this._destroyer.next();
    }

    public expandChange() {
        if (!this._keyboardHandler.collection.length) {
            return;
        }

        this._keyboardHandler.selectItem(2);
    }

    public onCheckChange(evt, idx) {
        evt.checked ? this._keyboardHandler.selectItem(idx) : this._keyboardHandler.deselectItem(idx);
    }

    public changeKeyboardCollection(gridSection: GridSection) {
        switch (gridSection) {
            case GridSection.THEAD:
                this._keyboardHandler.collection = theadKeyCombinations;
                break;
            case GridSection.TBODY:
                this._keyboardHandler.collection = tbodyKeyCombinations;
                break;
            case GridSection.FOOTER:
                this._keyboardHandler.collection = summaryCombinations;
                break;
            default:
                this._keyboardHandler.collection = [];
                return;
        }
        this._keyboardHandler.gridSection = gridSection;
    }

    public gridKeydown(evt) {
        const key = evt.key.toLowerCase();
        if (key === 'tab') { return; }
        if (this._keyboardHandler.gridSection === GridSection.FOOTER) {
            switch (key) {
                case 'end':
                    this._keyboardHandler.selectItem(3);
                    break;
                case 'home':
                    this._keyboardHandler.selectItem(2);
                    break;
                case 'arrowleft':
                    this._keyboardHandler.selectItem(0);
                    break;
                case 'arrowright':
                    this._keyboardHandler.selectItem(1);
                    break;
                default:
                    break;
            }
            return;
        }
        const activeNode = this.tgrid.navigation.activeNode;
        if (this._keyboardHandler.gridSection === GridSection.THEAD) {
            if (key === 'l' && evt.altKey) {
                this._keyboardHandler.selectItem(4);
                return;
            }
            const col = this.tgrid.visibleColumns.find
                (c => c.visibleIndex === activeNode.column && c.level === activeNode.level);
            if (key === 'l' && evt.ctrlKey && evt.shiftKey && col && !col.columnGroup && col.filterable) {
                this._keyboardHandler.selectItem(3);
            }

            if ((key === 'arrowup' || key === 'arrowdown') && evt.ctrlKey && col && !col.columnGroup && col.sortable) {
                this._keyboardHandler.selectItem(1);
            }
        }

        if (this._keyboardHandler.gridSection === GridSection.TBODY) {
            if (key === 'enter') {
                const cell = this.tgrid.getCellByColumnVisibleIndex(activeNode.row, activeNode.column);
                if (cell && cell.column.editable && cell.editMode) {
                    this._keyboardHandler.selectItem(0);
                }
            }
            if ((evt.code === 'End' || evt.code === 'Home') && evt.ctrlKey) {
                this._keyboardHandler.selectItem(3);
                this.cdr.detectChanges();
            }
        }
    }

    public toggleHeaderCombinations(activeNode) {
        if (this._keyboardHandler.gridSection !== GridSection.THEAD) {
            return;
        }
        const currColumn = this.tgrid.columnList
            .find(c => c.visibleIndex === activeNode.column && c.level === activeNode.level);

        const actions = this.extractColumnActions(currColumn);
        this._keyboardHandler.enableActionItems(actions);
    }

    public toggleBodyCombinations(activeNode) {
        const rowRef = this.tgrid.gridAPI.get_row_by_index(activeNode.row);
        if (this._keyboardHandler.gridSection !== GridSection.TBODY || !rowRef) {
            return;
        }
        const cell = this.tgrid.gridAPI.get_cell_by_visible_index(activeNode.row, activeNode.column);
        this.toggleCellCombinations(cell);
    }

    public toggleCellCombinations(cell?: IgxGridCellComponent) {
        if (this._keyboardHandler.gridSection !== GridSection.TBODY) {
            return;
        }

        const actions = this.extractCellActions(cell);
        this._keyboardHandler.enableActionItems(actions);
    }

    public extractColumnActions(col: IgxColumnComponent | IgxColumnGroupComponent) {
        const res = [];
        if (col.sortable) {
            res.push(ItemAction.Sortable);
        }
        if (col.filterable && !col.columnGroup) {
            res.push(ItemAction.Filterable);
        }

        if (col.collapsible) {
            res.push(ItemAction.Collapsible);
        }

        if (col.groupable) {
            res.push(ItemAction.Groupable);
        }

        if (col.selectable) {
            res.push(ItemAction.Selectable);
        }

        return res;
    }

    public extractCellActions(cell: IgxGridCellComponent) {
        const res = [];
        if (cell.editable) {
            res.push(ItemAction.Editable);
        }
        if (cell.row.children && cell.row.children.length) {
            res.push(ItemAction.Collapsible);
        }
        return res;
    }
}
