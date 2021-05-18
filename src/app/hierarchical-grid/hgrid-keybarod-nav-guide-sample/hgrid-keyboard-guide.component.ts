/* eslint-disable @angular-eslint/component-class-suffix */
/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-shadow */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    IgxColumnComponent,
    IgxColumnGroupComponent,
    IgxGridCellComponent,
    IgxHierarchicalGridComponent,
    IgxListComponent
} from 'igniteui-angular';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CUSTOMERS } from '../data';

enum GridSection {
    THEAD = 'igx-grid__thead-wrapper',
    TBODY = 'igx-grid__tbody-content',
    FOOTER = 'igx-grid__tfoot'
}

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

    public constructor(title: string, subTitle: string, completed: boolean, itemAction?: ItemAction) {
        this.title = title;
        this.subTitle = subTitle;
        this.completed = completed;
        this.action = itemAction;

        if (itemAction === ItemAction.Always) {
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
        this._collection[idx].completed = true;
    }

    public deselectItem(idx: number) {
        this._collection[idx].completed = false;
    }
}

const theadKeyCombinations = [
    new Item('space key', 'select column', false, ItemAction.Selectable),
    new Item('ctrl + arrow up/down', 'sorts the column asc/desc', false, ItemAction.Sortable),
    new Item('alt + arrow left/right/up/down', 'expand/collapse active multi column header',
        false,
        ItemAction.Collapsible),
    new Item('alt + l', 'opens the advanced filtering', false, ItemAction.Filterable),
    new Item('ctrl + shift + l', 'opens the excel style filtering', false, ItemAction.Filterable)
];

const tbodyKeyCombinations: Item[] = [
    new Item('enter', 'enter in edit mode', false, ItemAction.Editable),
    new Item('alt + arrow left/up', 'collapse row island row', false, ItemAction.Collapsible),
    new Item('alt + arrow right/down', 'expand row island row', false, ItemAction.Collapsible),
    new Item('ctrl + Home/End', 'navigates to the upper-left/bottom-right cell', false, ItemAction.Always)
];

const summaryCombinations: Item[] = [
    new Item('ArrowLeft', 'navigates one summary cell right', false, ItemAction.Always),
    new Item('ArrowRight', 'navigates one summary cell left', false, ItemAction.Always),
    new Item('Home', 'navigates to the first summary cell', false, ItemAction.Always),
    new Item('End', 'navigates to the last summary cell', false, ItemAction.Always)
];

@Component({
    selector: 'grid-keyboardnav',
    templateUrl: './hgrid-keyboard-guide.component.html',
    styleUrls: ['hgrid-keyboard-guide.component.css'],
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
export class HGridKeyboardnavGuide implements OnInit, OnDestroy {

    @ViewChild(IgxHierarchicalGridComponent, { static: true })
    public hGrid: IgxHierarchicalGridComponent;

    @ViewChild(IgxListComponent, { static: true })
    public listref: IgxListComponent;

    public get keyboardCollection() {
        return this.keyboardHandler.collection;
    }

    public get headerList() {
        return this.keyboardHandler.gridSection === GridSection.THEAD ?
            'HEADER COMBINATIONS' : this.keyboardHandler.gridSection === GridSection.TBODY ?
            'BODY COMBITNATIONS' : this.keyboardHandler.gridSection === GridSection.FOOTER ?
            'SUMMARY COMBINATIONS' : '';
    }

    public gridTarget: GridUnderManagement;

    private _destroyer = new Subject<boolean>();
    private keyboardHandler = new KeyboardHandler([], GridSection.THEAD);

    public constructor(
        private cdr: ChangeDetectorRef) { }

    public onActiveNodeChange(evt) {
        if (this.hGrid.crudService.cell) {
            return;
        }
        const grid = evt.owner || this.hGrid;
        const gridSection = evt.row < 0 ? GridSection.THEAD : evt.row === grid.dataView.length ? GridSection.FOOTER : GridSection.TBODY;
        this.changeKeyboardCollection(gridSection);
        this.gridTarget.toggleHeaderCombinations(evt);
        this.gridTarget.toggleBodyCombinations(evt);
    }

    public ngOnInit() {
        this.hGrid.data = CUSTOMERS;
        for (const item of this.hGrid.data) {
            const names = item.CompanyName.split(' ');
            item.FirstName = names[0];
            item.LastName = names[names.length - 1];
            item.FullAddress = `${item.Address}, ${item.City}, ${item.Country}`;
            item.PersonelDetails = `${item.ContactTitle}: ${item.ContactName}`;
            item.CompanysAnnualProfit = (100000 + (Math.random() * Math.floor(1000000))).toFixed(0);
        }

        this.gridTarget = new GridUnderManagement(this.hGrid, this.keyboardHandler, this._destroyer, this.cdr);
        this.gridTarget.subscribe();

        this.listref.itemClicked.pipe(takeUntil(this._destroyer))
            .subscribe((args) => {
                args.event.stopPropagation();
            });
    }

    public ngOnDestroy() {
        this._destroyer.next();
    }

    public expandChange() {
        if (!this.keyboardHandler.collection.length) {
            return;
        }

        this.keyboardHandler.selectItem(2);
    }

    public onCheckChange(evt, idx) {
        evt.checked ? this.keyboardHandler.selectItem(idx) : this.keyboardHandler.deselectItem(idx);
    }

    public changeKeyboardCollection(gridSection: GridSection) {
        switch (gridSection) {
            case GridSection.THEAD:
                this.keyboardHandler.collection = theadKeyCombinations;
                break;
            case GridSection.TBODY:
                this.keyboardHandler.collection = tbodyKeyCombinations;
                break;
            case GridSection.FOOTER:
                this.keyboardHandler.collection = summaryCombinations;
                break;
            default:
                this.keyboardHandler.collection = [];
                return;
        }
        this.keyboardHandler.gridSection = gridSection;
    }

    public onGridCreated(evt) {
        fromEvent(evt.grid.elementRef.nativeElement, 'click').pipe(takeUntil(this._destroyer))
            .subscribe(() => {
                this.gridTarget = new GridUnderManagement(evt.grid, this.keyboardHandler, this._destroyer, this.cdr);
                this.gridTarget.subscribe();
            });

        fromEvent(evt.grid.elementRef.nativeElement, 'focus').pipe(takeUntil(this._destroyer))
            .subscribe(() => {
                this.gridTarget = new GridUnderManagement(evt.grid, this.keyboardHandler, this._destroyer, this.cdr);
                this.gridTarget.subscribe();
            });

        fromEvent((evt.grid as IgxHierarchicalGridComponent).tbody.nativeElement, 'focus')
            .pipe(takeUntil(this._destroyer)).subscribe(() => {
                this.gridTarget = new GridUnderManagement(evt.grid, this.keyboardHandler, this._destroyer, this.cdr);
                this.gridTarget.subscribe();
            });
    }

    public gridKeydown(evt) {
        const key = evt.key.toLowerCase();
        if (this.keyboardHandler.gridSection === GridSection.FOOTER) {
            switch (key) {
                case 'end':
                    this.keyboardHandler.selectItem(3);
                    break;
                case 'home':
                    this.keyboardHandler.selectItem(2);
                    break;
                case 'arrowleft':
                    this.keyboardHandler.selectItem(0);
                    break;
                case 'arrowright':
                    this.keyboardHandler.selectItem(1);
                    break;
                default:
                    break;
            }
            return;
        }
        const activeNode = this.gridTarget.hGrid.navigation.activeNode;
        if (this.keyboardHandler.gridSection === GridSection.THEAD) {
            if (key === 'l' && evt.altKey) {
                this.keyboardHandler.selectItem(3);
                return;
            }
            const col = this.gridTarget.hGrid.visibleColumns.find
                (c => c.visibleIndex === activeNode.column && c.level === activeNode.level);
            if (key === 'l' && evt.ctrlKey && evt.shiftKey && col && !col.columnGroup && col.filterable) {
                this.keyboardHandler.selectItem(4);
            }

            if ((key === 'arrowup' || key === 'arrowdown') && evt.ctrlKey && col && !col.columnGroup && col.sortable) {
                this.keyboardHandler.selectItem(1);
            }
        }

        if (this.keyboardHandler.gridSection === GridSection.TBODY) {
            if (key === 'enter') {
                const cell = this.gridTarget.hGrid.getCellByColumnVisibleIndex(activeNode.row, activeNode.column);
                if (cell && cell.column.editable && cell.editMode) {
                    this.keyboardHandler.selectItem(0);
                }
            }
            if ((evt.code === 'End' || evt.code === 'Home') && evt.ctrlKey) {
                this.keyboardHandler.selectItem(3);
            }
        }
    }
}

export class GridUnderManagement {
    public hGrid: IgxHierarchicalGridComponent;
    public destroyer = new Subject();
    public keyboardHandler: KeyboardHandler;
    public cdr: ChangeDetectorRef;

    constructor(hGrid: IgxHierarchicalGridComponent, keyboardHandler: KeyboardHandler,
                destroyer: Subject<boolean>, cdr: ChangeDetectorRef) {
        this.hGrid = hGrid;
        this.keyboardHandler = keyboardHandler;
        this.destroyer = destroyer;
        this.cdr = cdr;
    }

    public subscribe() {
        this.hGrid.columnSelected.pipe(takeUntil(this.destroyer))
            .subscribe((args) => {
                const evt = args.event;
                if (evt.type === 'keydown') {
                    this.keyboardHandler.selectItem(0);
                }
            });

        this.hGrid.rowToggle.pipe(takeUntil(this.destroyer))
            .subscribe((args) => {
                const evt = args.event as KeyboardEvent;
                if (!evt || evt.type !== 'keydown') {
                    return;
                }

                return evt.code === 'ArrowLeft' || evt.code === 'ArrowUp' ? this.keyboardHandler.selectItem(1) :
                    this.keyboardHandler.selectItem(2);
            });
    }

    public toggleHeaderCombinations(activeNode) {
        if (this.keyboardHandler.gridSection !== GridSection.THEAD || activeNode.column === undefined || activeNode.level === undefined) {
            return;
        }
        const grid = activeNode.owner || this.hGrid;
        const currColumn = grid.columnList
            .find(c => c.visibleIndex === activeNode.column && c.level === activeNode.level);

        const actions = this.extractColumnActions(currColumn);
        this.keyboardHandler.enableActionItems(actions);
    }

    public toggleBodyCombinations(activeNode) {
        const grid = activeNode.owner || this.hGrid;
        const rowRef = grid.gridAPI.get_row_by_index(activeNode.row);
        if (this.keyboardHandler.gridSection !== GridSection.TBODY || !rowRef) {
            return;
        }

        if (rowRef.nativeElement.tagName === ElementTags.GROUPBY_ROW) {
            this.keyboardHandler.enableActionItems([ItemAction.Expandable]);
        } else {
            const cell = grid.gridAPI.get_cell_by_visible_index(activeNode.row, activeNode.column);
            this.toggleCellCombinations(cell);
        }

    }

    public toggleCellCombinations(cell?: IgxGridCellComponent) {
        if (this.keyboardHandler.gridSection !== GridSection.TBODY || !cell) {
            return;
        }

        const actions = this.extractCellActions(cell);
        this.keyboardHandler.enableActionItems(actions);
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

        res.push(ItemAction.Collapsible);
        return res;
    }
}
