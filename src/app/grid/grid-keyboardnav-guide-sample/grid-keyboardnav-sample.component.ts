import { animate, state, style, transition, trigger } from "@angular/animations";
import { ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  IgxGridComponent,
  IgxListComponent,
  IgxOverlayService,
  SortingDirection
} from "igniteui-angular";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { DATA } from "../../data/customers";

enum GridSection {
    THEAD = "igx-grid__thead-wrapper",
    TBODY = "igx-grid__tbody-content",
    FOOTER = "igx-grid__tfoot"
}

class Item {
    public title: string;
    public subTitle: string;
    public completed: boolean;

    public constructor(title: string, subTitle: string, completed: boolean) {
        this.title = title;
        this.subTitle = subTitle;
        this.completed = completed;
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

    public selectItem(idx: number) {
        this._collection[idx].completed = true;
    }

    public deselectItem(idx: number) {
      this._collection[idx].completed = false;
    }
}

const theadKeyCombinations = [
    new Item("space", "select column", false),
    new Item("ctrl + arrow up/down", "sorts the column asc/desc", false),
    new Item("shift + alt + arrow left/right", "group/ungroup the active column", false),
    new Item("alt + arrow left/right/up/down", "expand/collapse active multi column header", false),
    new Item("ctrl + shift + l", "opens the excel style filtering", false),
    new Item("alt + l", "opens the advanced filtering", false)
];

const tbodyKeyCombinations: Item[] = [
    new Item("enter", "enter in edit mode", false),
    new Item("alt + arrow left/up", "collapse master datils row", false),
    new Item("alt + arrow right/down", "expand master datils row", false),
    new Item("ctrl + alt + arrow right/left", "group/ungroup the active column", false),
    new Item("ctrl + Home/End", "navigates to the upper-left/bottom-right cell", false)
];

const summaryCombinations: Item[] = [
  new Item("ArrowLeft", "navigates one summary cell right", false),
  new Item("ArrowRight", "navigates one summary cell left", false),
  new Item("ctrl + Home", "navigates to the first summary cell", false),
  new Item("ctrl + End", "navigates to the last summary cell", false)
];

@Component({
    selector: "grid-keyboardnav",
    templateUrl: "./grid-keyboardnav-sample.component.html",
    styleUrls: ["grid-keyboardnav-sample.component.scss"],
    animations: [
      trigger("toggle", [
        state("selected", style({
          color: "#4eb862"
        })),
        state("deselected", style({
          color: "black"
        })),
        transition("deselected => selected", [
          animate(".3s")
        ]),
        transition("selected => deselected", [
          animate(".3s")
        ])
      ]),
      trigger("load", [
        transition(":enter", [
            style({ opacity: 0 }),
            animate(".3s", style({ opacity: 1 }))
          ])
      ])
    ]
})
export class GridKeyboardnavGuide implements OnInit, OnDestroy {

    @ViewChild(IgxGridComponent, { static: true})
    public grid: IgxGridComponent;

    @ViewChild(IgxListComponent, { static: true})
    public listref: IgxListComponent;

    public get keyboardCollection() {
        return this._keyboardHandler.collection;
    }

    private _destroyer = new Subject();
    private _keyboardHandler = new KeyboardHandler([], GridSection.THEAD);

    public constructor(private cdr: ChangeDetectorRef, private _overlay: IgxOverlayService) {}

    @HostListener("keyup.tab", ["$event"])
    @HostListener("keyup.shift.tab", ["$event"])
    public onTab(evt) {
      const gridSection = evt.srcElement.className;
      this.changeKeyboardCollection(gridSection);
    }

    @HostListener("click", ["$event"])
    public onClick() {
      const gridSection = document.activeElement.className;
      this.changeKeyboardCollection(gridSection);
    }

    @HostListener("keydown.ArrowLeft")
    public onArrowLeft() {
      if (this._keyboardHandler.gridSection === GridSection.FOOTER) {
        this._keyboardHandler.selectItem(0);
      }
    }

    @HostListener("keydown.ArrowRight")
    public onArrowRight() {
      if (this._keyboardHandler.gridSection === GridSection.FOOTER) {
        this._keyboardHandler.selectItem(1);
      }
    }

    public ngOnInit() {
        this.grid.data = DATA;
        for (const item of this.grid.data) {
          const names = item.CompanyName.split(" ");
          item.FirstName = names[0];
          item.LastName = names[names.length - 1];
          item.FullAddress = `${item.Address}, ${item.City}, ${item.Country}`;
          item.PersonelDetails = `${item.ContactTitle}: ${item.ContactName}`;
          item.CompanysAnnualProfit = (100000 + (Math.random() * Math.floor(1000000))).toFixed(0);
        }

        this._overlay.onOpening.pipe(takeUntil(this._destroyer))
          .subscribe((args) => {
              if (args.componentRef === undefined) {
                return;
              }

              const componentType = args.componentRef.componentType.name;
              switch (componentType) {
                case "IgxGridExcelStyleFilteringComponent":
                    this._keyboardHandler.selectItem(4);
                    this.cdr.detectChanges();
                    break;
                case "IgxAdvancedFilteringDialogComponent":
                    this._keyboardHandler.selectItem(5);
                    break;
                default:
                    return;

              }
          });

        this.grid.groupingExpansionStateChange.pipe(takeUntil(this._destroyer))
          .subscribe(() => {
              if (this._keyboardHandler.gridSection === GridSection.TBODY) {
                this._keyboardHandler.selectItem(3);
              }
          });

        this.grid.onGroupingDone.pipe(takeUntil(this._destroyer))
          .subscribe(() => {
              this._keyboardHandler.selectItem(2);
          });

        this.grid.onColumnSelectionChange.pipe(takeUntil(this._destroyer))
          .subscribe((args) => {
              const evt = args.event;
              if (evt.type === "keydown") {
                this._keyboardHandler.selectItem(0);
              }
          });

        this.grid.onSortingDone.pipe(takeUntil(this._destroyer))
          .subscribe(() => {
              this._keyboardHandler.selectItem(1);
          });

        this.grid.onCellEditEnter.pipe(takeUntil(this._destroyer))
          .subscribe(() => {
            this._keyboardHandler.selectItem(0);
          });

        this.grid.onRowToggle.pipe(takeUntil(this._destroyer))
          .subscribe((args) => {
            const evt = args.event as KeyboardEvent;
            if (evt.type !== "keydown") {
              return;
            }

            return evt.code === "ArrowLeft" || evt.code === "ArrowUp" ? this._keyboardHandler.selectItem(1) :
              this._keyboardHandler.selectItem(2);
          });

        this.grid.groupingExpressions = [
            { fieldName: "ProductName", dir: SortingDirection.Asc }
        ];

        this.grid.onSelection.pipe(takeUntil(this._destroyer))
          .subscribe((args) => {
            this.handleDOMSelection(args.event);
          });

        this.grid.onGridKeydown.pipe(takeUntil(this._destroyer))
          .subscribe((args) => {
            const evt = args.event as KeyboardEvent;
            if (this._keyboardHandler.gridSection !== GridSection.FOOTER) {
              return;
            }

            return evt.key === "End" && evt.ctrlKey ? this._keyboardHandler.selectItem(3) :
              evt.key === "Home" && evt.ctrlKey ? this._keyboardHandler.selectItem(2) : false;
          });

        this.grid.onPagingDone.pipe(takeUntil(this._destroyer))
          .subscribe((args) => {
            console.log(args);
          });

        this.listref.onItemClicked.pipe(takeUntil(this._destroyer))
          .subscribe((args) => {
            args.event.stopPropagation();
          });
    }

    public ngOnDestroy() {
        this._destroyer.next();
    }

    public expandChange(evt) {
        this._keyboardHandler.selectItem(3);
    }

    public onCheckChange(evt, idx) {
      evt.checked ? this._keyboardHandler.selectItem(idx) : this._keyboardHandler.deselectItem(idx);
    }

    public changeKeyboardCollection(gridSection) {
        switch (gridSection) {
          case GridSection.THEAD:
            this._keyboardHandler.collection = theadKeyCombinations;
            this._keyboardHandler.gridSection = GridSection.THEAD;
            break;
          case GridSection.TBODY:
            this._keyboardHandler.collection = tbodyKeyCombinations;
            this._keyboardHandler.gridSection = GridSection.TBODY;
            break;
          case GridSection.FOOTER:
            this._keyboardHandler.collection = summaryCombinations;
            this._keyboardHandler.gridSection = GridSection.FOOTER;
            break;
          default:
            this._keyboardHandler.collection = [];
            return;
        }
    }

    public handleDOMSelection(evt) {
      const target = evt.target.className;
      switch (target) {
        case GridSection.TBODY :
          this.trackUpRightOrBottomLeftNav(evt, 4);
          break;
        case GridSection.FOOTER :
          this.trackUpRightOrBottomLeftNav(evt, 2);
          break;
        default:
          return;
      }

      this.cdr.detectChanges();
    }

    public trackUpRightOrBottomLeftNav(evt, idx) {
      if ((evt.code === "End" || evt.code === "Home") && evt.ctrlKey) {
        this._keyboardHandler.selectItem(idx);
      }
    }
}
