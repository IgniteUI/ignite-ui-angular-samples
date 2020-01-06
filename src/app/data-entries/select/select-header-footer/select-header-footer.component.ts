import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from "@angular/core";
@Component({
    selector: "select-header-footer",
    styleUrls: ["select-header-footer.component.scss"],
    templateUrl: "select-header-footer.component.html",
    encapsulation: ViewEncapsulation.None
})
export class SelectHeaderFooterComponent implements OnInit {
    public flightCount: number;
    public trainCount: number;
    public boatCount: number;
    public selected: string;
    public newSelection: string;
    public fruits: Array<{ type: string, delivery: string }>;

    public fruitsDS: Array<{ type: string, delivery: string }> = [
            { type: "Apple", delivery: "boat" },
            { type: "Banana", delivery: "flight"},
            { type: "Blackberry", delivery: "train"},
            { type: "Blueberry", delivery: "train"},
            { type: "Coconut", delivery: "flight"},
            { type: "Cherry", delivery: "boat"},
            { type: "Grape", delivery: "train"},
            { type: "Japanese plum", delivery: "flight"},
            { type: "Pineapple", delivery: "flight"},
            { type: "Melon", delivery: "flight"},
            { type: "Orange", delivery: "boat" },
            { type: "Pear", delivery: "train"},
            { type: "Peach", delivery: "boat"},
            { type: "Pineapple", delivery: "flight"},
            { type: "Pomegranate", delivery: "flight"},
            { type: "Watermelon", delivery: "train"}
        ];

    constructor(public cdr: ChangeDetectorRef) {
    }

    public ngOnInit() {
        this.flightCount = this.fruitsDS.filter(items => items.delivery === "flight").length;
        this.trainCount = this.fruitsDS.filter(items => items.delivery === "train").length;
        this.boatCount = this.fruitsDS.filter(items => items.delivery === "boat").length;
        this.fruits = this.fruitsDS;
    }

    public filter(value) {
        this.newSelection = value;
        if (this.newSelection === this.selected) {
            this.fruits = this.fruitsDS;
            this.selected = "allData";
            this.cdr.detectChanges();
            return;
        }
        this.selected = value;
        this.fruits = this.fruitsDS.filter(fruit => fruit.delivery === value);
        this.cdr.detectChanges();
    }
}
