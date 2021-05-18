/* eslint-disable @angular-eslint/component-class-suffix */
/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-shadow */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
    IgxColumnComponent,
    IgxColumnGroupComponent,
    IgxGridCellComponent,
    IgxGridComponent,
    IgxListComponent,
    SortingDirection,
    IActiveNodeChangeEventArgs
} from 'igniteui-angular';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DATA } from '../../data/customers';

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
    new Item('shift + alt + arrow left/right', 'group/ungroup the active column', false, ItemAction.Groupable),
    new Item('alt + arrow left/right/up/down', 'expand/collapse active multi column header',
        false, ItemAction.Collapsible),
    new Item('ctrl + shift + l', 'opens the excel style filtering', false, ItemAction.Filterable),
    new Item('alt + l', 'opens the advanced filtering', false, ItemAction.Filterable)
];

const tbodyKeyCombinations: Item[] = [
    new Item('enter', 'enter in edit mode', false, ItemAction.Editable),
    new Item('alt + arrow left/up', 'collapse master details row', false, ItemAction.Collapsible),
    new Item('alt + arrow right/down', 'expand master details row', false, ItemAction.Collapsible),
    new Item('alt + arrow right/left', 'expand/collapse the group row', false, ItemAction.Expandable),
    new Item('ctrl + Home/End', 'navigates to the upper-left/bottom-right cell', false, ItemAction.Always)
];

const summaryCombinations: Item[] = [
    new Item('ArrowLeft', 'navigates one summary cell left', false, ItemAction.Always),
    new Item('ArrowRight', 'navigates one summary cell right', false, ItemAction.Always),
    new Item('Home', 'navigates to the first summary cell', false, ItemAction.Always),
    new Item('End', 'navigates to the last summary cell', false, ItemAction.Always)
];

@Component({
    selector: 'grid-keyboardnav',
    templateUrl: './grid-keyboardnav-sample.component.html',
    styleUrls: ['grid-keyboardnav-sample.component.css'],
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
export class GridKeyboardnavGuide implements OnInit, OnDestroy {

    @ViewChild(IgxGridComponent, { static: true })
    public grid: IgxGridComponent;

    @ViewChild(IgxListComponent, { static: true })
    public listref: IgxListComponent;

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

    public constructor(private cdr: ChangeDetectorRef) { }


    public onActiveNodeChange(evt: IActiveNodeChangeEventArgs) {
        if (this.grid.crudService.cell) {
            return;
        }
        const gridSection = evt.row < 0 ? GridSection.THEAD : evt.row === this.grid.dataView.length ?
            GridSection.FOOTER : GridSection.TBODY;
        this.changeCombinationsCollection(gridSection);
        this.toggleHeaderCombinations(evt);
        this.toggleBodyCombinations(evt);
    }

    public ngOnInit() {
        this.grid.data = DATA;
        for (const item of this.grid.data) {
            const names = item.CompanyName.split(' ');
            item.FirstName = names[0];
            item.LastName = names[names.length - 1];
            item.FullAddress = `${item.Address}, ${item.City}, ${item.Country}`;
            item.PersonelDetails = `${item.ContactTitle}: ${item.ContactName}`;
            item.CompanysAnnualProfit = (100000 + (Math.random() * Math.floor(1000000))).toFixed(0);
        }

        this.grid.groupingExpansionStateChange.pipe(takeUntil(this._destroyer))
            .subscribe(() => {
                if (this._keyboardHandler.gridSection === GridSection.TBODY) {
                    this._keyboardHandler.selectItem(3);
                }
            });

        this.grid.columnSelected.pipe(takeUntil(this._destroyer))
            .subscribe((args) => {
                const evt = args.event;
                if (evt.type === 'keydown') {
                    this._keyboardHandler.selectItem(0);
                }
            });

        this.grid.rowToggle.pipe(takeUntil(this._destroyer))
            .subscribe((args) => {
                const evt = args.event as KeyboardEvent;
                if (evt.type !== 'keydown') {
                    return;
                }
                return evt.code === 'ArrowLeft' || evt.code === 'ArrowUp' ? this._keyboardHandler.selectItem(1) :
                    this._keyboardHandler.selectItem(2);
            });

        this.grid.groupingExpressions = [
            { fieldName: 'ProductName', dir: SortingDirection.Asc }
        ];


        this.listref.itemClicked.pipe(takeUntil(this._destroyer))
            .subscribe((args) => {
                args.event.stopPropagation();
            });

    }

    public ngOnDestroy() {
        this._destroyer.next();
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

        const activeNode = this.grid.navigation.activeNode;
        if (this._keyboardHandler.gridSection === GridSection.THEAD) {
            if (key === 'l' && evt.altKey) {
                this._keyboardHandler.selectItem(5);
                return;
            }
            const col = this.grid.visibleColumns.find
                (c => c.visibleIndex === activeNode.column && c.level === activeNode.level);
            if (key === 'l' && evt.ctrlKey && evt.shiftKey && col && !col.columnGroup && col.filterable) {
                this._keyboardHandler.selectItem(4);
            }

            if ((key === 'arrowleft' || key === 'arrowright') && evt.altKey && evt.shiftKey &&
                col && !col.columnGroup && col.groupable) {
                this._keyboardHandler.selectItem(2);
            }

            if ((key === 'arrowup' || key === 'arrowdown') && evt.ctrlKey) {
                if (col && !col.columnGroup && col.sortable) {
                    this._keyboardHandler.selectItem(1);
                }
            }
        }

        if (this._keyboardHandler.gridSection === GridSection.TBODY) {
            if (key === 'enter') {
                const cell = this.grid.getCellByColumnVisibleIndex(activeNode.row, activeNode.column);
                if (cell && cell.column.editable && cell.editMode) {
                    this._keyboardHandler.selectItem(0);
                }
            }
            if ((key === 'end' || key === 'home') && evt.ctrlKey) {
                this._keyboardHandler.selectItem(4);
                this.cdr.detectChanges();
            }
        }
    }

    public expandChange() {
        if (!this._keyboardHandler.collection.length) {
            return;
        }

        this._keyboardHandler.selectItem(3);
    }

    public onCheckChange(evt, idx) {
        evt.checked ? this._keyboardHandler.selectItem(idx) : this._keyboardHandler.deselectItem(idx);
    }

    public toggleHeaderCombinations(activeNode) {
        if (this._keyboardHandler.gridSection !== GridSection.THEAD) {
            return;
        }
        const currColumn = this.grid.columnList
            .find(c => c.visibleIndex === activeNode.column && c.level === activeNode.level);

        const actions = this.extractColumnActions(currColumn);
        this._keyboardHandler.enableActionItems(actions);
    }

    public toggleBodyCombinations(activeNode) {
        const rowRef = this.grid.gridAPI.get_row_by_index(activeNode.row);
        if (this._keyboardHandler.gridSection !== GridSection.TBODY || !rowRef) {
            return;
        }

        if (rowRef.nativeElement.tagName === ElementTags.GROUPBY_ROW) {
            this._keyboardHandler.enableActionItems([ItemAction.Expandable]);
        } else {
            const cell = this.grid.gridAPI.get_cell_by_visible_index(activeNode.row, activeNode.column);
            this.toggleCellCombinations(cell);
        }

    }

    public toggleCellCombinations(cell?: IgxGridCellComponent) {
        const actions = this.extractCellActions(cell);
        this._keyboardHandler.enableActionItems(actions);
    }

    public changeCombinationsCollection(gridSection: GridSection) {
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
