import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    ElementRef,
    QueryList,
    ViewChild,
    ViewChildren,
    ViewEncapsulation } from "@angular/core";
import {
    IgxDialogComponent,
    IgxDropEnterEventArgs,
    IgxDropEventArgs,
    IgxDropLeaveEventArgs,
    IgxGridComponent
} from "igniteui-angular";

class ColumnConfig {
    public key: string;
    public width: string;
    public colStart: number;
    public rowStart: number;
    public colSpan: number;
    public rowSpan: number;
    public selected: boolean;
    public hovered: boolean;
}

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "app-grid-multi-row-layout-configuration-sample",
    styleUrls: ["./grid-multi-row-layout-configuration.component.scss"],
    templateUrl: "./grid-multi-row-layout-configuration.component.html"
})
export class GridMultiRowLayoutConfigurationComponent implements AfterViewInit {

    public get layoutRowStyle() {
        let style = "";
        this.collection.forEach(() => {
            if (this.rowsHeight.indexOf("px") !== -1 ||
                this.rowsHeight.indexOf("%") !== -1 ||
                isNaN(parseInt(this.rowsHeight, 10))) {
                style += " " + this.rowsHeight;
            } else {
                style += " " + parseInt(this.rowsHeight, 10) + "px";
            }
        });
        return style;
    }

    public get layoutColsStyle() {
        let style = "";
        this.collection[0].forEach((col) => {
            for (let i = 0; i < col.colSpan; i++) {
                if (this.colsWidth.indexOf("px") !== -1 ||
                    this.colsWidth.indexOf("%") !== -1 ||
                    isNaN(parseInt(this.colsWidth, 10))) {
                    style += " " + this.colsWidth;
                } else {
                    style += " " + parseInt(this.colsWidth, 10) + "px";
                }
            }
        });
        return style;
    }

    @ViewChild("jsonDialog", { read: IgxDialogComponent })
    public jsonDialog: IgxDialogComponent;

    @ViewChild("textArea", { read: ElementRef })
    public textArea: ElementRef;

    @ViewChild("grid", { read: IgxGridComponent })
    public grid: IgxGridComponent;

    @ViewChildren("gridCell", { read: ElementRef })
    public gridCells: QueryList<ElementRef>;

    @ViewChild("resizeIndicator", { read: ElementRef })
    public resizeIndicator: ElementRef;

    public rowsCount = 3;
    public colsCount = 6;
    public rowsHeight = "32px";
    public colsWidth = "136px";
    public collection: ColumnConfig[][] = [];
    public gridCollection = [];
    public renderGrid = false;
    public jsonCollection = "";
    public cellSelected;
    public resizeVisible = false;
    public resizeTop;
    public resizeLeft;
    public resizeWidth = 0;
    public resizeHeight = 0;

    public columnsList = [
        { key: "ContactName", field: "Contact name"},
        { key: "ContactTitle", field: "Contact title"},
        { key: "CompanyName", field: "Company name"},
        { key: "Country", field: "Country"},
        { key: "Phone", field: "Phone"},
        { key: "City", field: "City"},
        { key: "Address", field: "Address"}
    ];
    public columnsConfiguration;

    public data = [
        // tslint:disable:max-line-length
        { ID: "ALFKI", CompanyName: "Alfreds Futterkiste", ContactName: "Maria Anders", ContactTitle: "Sales Representative", Address: "Obere Str. 57", City: "Berlin", Region: null, PostalCode: "12209", Country: "Germany", Phone: "030-0074321", Fax: "030-0076545" },
        { ID: "ANATR", CompanyName: "Ana Trujillo Emparedados y helados", ContactName: "Ana Trujillo", ContactTitle: "Owner", Address: "Avda. de la Constitución 2222", City: "México D.F.", Region: null, PostalCode: "05021", Country: "Mexico", Phone: "(5) 555-4729", Fax: "(5) 555-3745" },
        { ID: "ANTON", CompanyName: "Antonio Moreno Taquería", ContactName: "Antonio Moreno", ContactTitle: "Owner", Address: "Mataderos 2312", City: "México D.F.", Region: null, PostalCode: "05023", Country: "Mexico", Phone: "(5) 555-3932", Fax: null },
        { ID: "AROUT", CompanyName: "Around the Horn", ContactName: "Thomas Hardy", ContactTitle: "Sales Representative", Address: "120 Hanover Sq.", City: "London", Region: null, PostalCode: "WA1 1DP", Country: "UK", Phone: "(171) 555-7788", Fax: "(171) 555-6750" },
        { ID: "BERGS", CompanyName: "Berglunds snabbköp", ContactName: "Christina Berglund", ContactTitle: "Order Administrator", Address: "Berguvsvägen 8", City: "Luleå", Region: null, PostalCode: "S-958 22", Country: "Sweden", Phone: "0921-12 34 65", Fax: "0921-12 34 67" },
        { ID: "BLAUS", CompanyName: "Blauer See Delikatessen", ContactName: "Hanna Moos", ContactTitle: "Sales Representative", Address: "Forsterstr. 57", City: "Mannheim", Region: null, PostalCode: "68306", Country: "Germany", Phone: "0621-08460", Fax: "0621-08924" },
        { ID: "BLONP", CompanyName: "Blondesddsl père et fils", ContactName: "Frédérique Citeaux", ContactTitle: "Marketing Manager", Address: "24, place Kléber", City: "Strasbourg", Region: null, PostalCode: "67000", Country: "France", Phone: "88.60.15.31", Fax: "88.60.15.32" },
        { ID: "BOLID", CompanyName: "Bólido Comidas preparadas", ContactName: "Martín Sommer", ContactTitle: "Owner", Address: "C/ Araquil, 67", City: "Madrid", Region: null, PostalCode: "28023", Country: "Spain", Phone: "(91) 555 22 82", Fax: "(91) 555 91 99" },
        { ID: "BONAP", CompanyName: "Bon app'", ContactName: "Laurence Lebihan", ContactTitle: "Owner", Address: "12, rue des Bouchers", City: "Marseille", Region: null, PostalCode: "13008", Country: "France", Phone: "91.24.45.40", Fax: "91.24.45.41" },
        { ID: "BOTTM", CompanyName: "Bottom-Dollar Markets", ContactName: "Elizabeth Lincoln", ContactTitle: "Accounting Manager", Address: "23 Tsawassen Blvd.", City: "Tsawassen", Region: "BC", PostalCode: "T2F 8M4", Country: "Canada", Phone: "(604) 555-4729", Fax: "(604) 555-3745" },
        { ID: "BSBEV", CompanyName: "B's Beverages", ContactName: "Victoria Ashworth", ContactTitle: "Sales Representative", Address: "Fauntleroy Circus", City: "London", Region: null, PostalCode: "EC2 5NT", Country: "UK", Phone: "(171) 555-1212", Fax: null },
        { ID: "CACTU", CompanyName: "Cactus Comidas para llevar", ContactName: "Patricio Simpson", ContactTitle: "Sales Agent", Address: "Cerrito 333", City: "Buenos Aires", Region: null, PostalCode: "1010", Country: "Argentina", Phone: "(1) 135-5555", Fax: "(1) 135-4892" },
        { ID: "CENTC", CompanyName: "Centro comercial Moctezuma", ContactName: "Francisco Chang", ContactTitle: "Marketing Manager", Address: "Sierras de Granada 9993", City: "México D.F.", Region: null, PostalCode: "05022", Country: "Mexico", Phone: "(5) 555-3392", Fax: "(5) 555-7293" },
        { ID: "CHOPS", CompanyName: "Chop-suey Chinese", ContactName: "Yang Wang", ContactTitle: "Owner", Address: "Hauptstr. 29", City: "Bern", Region: null, PostalCode: "3012", Country: "Switzerland", Phone: "0452-076545", Fax: null },
        { ID: "COMMI", CompanyName: "Comércio Mineiro", ContactName: "Pedro Afonso", ContactTitle: "Sales Associate", Address: "Av. dos Lusíadas, 23", City: "Sao Paulo", Region: "SP", PostalCode: "05432-043", Country: "Brazil", Phone: "(11) 555-7647", Fax: null },
        { ID: "CONSH", CompanyName: "Consolidated Holdings", ContactName: "Elizabeth Brown", ContactTitle: "Sales Representative", Address: "Berkeley Gardens 12 Brewery", City: "London", Region: null, PostalCode: "WX1 6LT", Country: "UK", Phone: "(171) 555-2282", Fax: "(171) 555-9199" },
        { ID: "DRACD", CompanyName: "Drachenblut Delikatessen", ContactName: "Sven Ottlieb", ContactTitle: "Order Administrator", Address: "Walserweg 21", City: "Aachen", Region: null, PostalCode: "52066", Country: "Germany", Phone: "0241-039123", Fax: "0241-059428" },
        { ID: "DUMON", CompanyName: "Du monde entier", ContactName: "Janine Labrune", ContactTitle: "Owner", Address: "67, rue des Cinquante Otages", City: "Nantes", Region: null, PostalCode: "44000", Country: "France", Phone: "40.67.88.88", Fax: "40.67.89.89" },
        { ID: "EASTC", CompanyName: "Eastern Connection", ContactName: "Ann Devon", ContactTitle: "Sales Agent", Address: "35 King George", City: "London", Region: null, PostalCode: "WX3 6FW", Country: "UK", Phone: "(171) 555-0297", Fax: "(171) 555-3373" },
        { ID: "ERNSH", CompanyName: "Ernst Handel", ContactName: "Roland Mendel", ContactTitle: "Sales Manager", Address: "Kirchgasse 6", City: "Graz", Region: null, PostalCode: "8010", Country: "Austria", Phone: "7675-3425", Fax: "7675-3426" },
        { ID: "FAMIA", CompanyName: "Familia Arquibaldo", ContactName: "Aria Cruz", ContactTitle: "Marketing Assistant", Address: "Rua Orós, 92", City: "Sao Paulo", Region: "SP", PostalCode: "05442-030", Country: "Brazil", Phone: "(11) 555-9857", Fax: null },
        { ID: "FISSA", CompanyName: "FISSA Fabrica Inter. Salchichas S.A.", ContactName: "Diego Roel", ContactTitle: "Accounting Manager", Address: "C/ Moralzarzal, 86", City: "Madrid", Region: null, PostalCode: "28034", Country: "Spain", Phone: "(91) 555 94 44", Fax: "(91) 555 55 93" },
        { ID: "FOLIG", CompanyName: "Folies gourmandes", ContactName: "Martine Rancé", ContactTitle: "Assistant Sales Agent", Address: "184, chaussée de Tournai", City: "Lille", Region: null, PostalCode: "59000", Country: "France", Phone: "20.16.10.16", Fax: "20.16.10.17" },
        { ID: "FOLKO", CompanyName: "Folk och fä HB", ContactName: "Maria Larsson", ContactTitle: "Owner", Address: "Åkergatan 24", City: "Bräcke", Region: null, PostalCode: "S-844 67", Country: "Sweden", Phone: "0695-34 67 21", Fax: null },
        { ID: "FRANK", CompanyName: "Frankenversand", ContactName: "Peter Franken", ContactTitle: "Marketing Manager", Address: "Berliner Platz 43", City: "München", Region: null, PostalCode: "80805", Country: "Germany", Phone: "089-0877310", Fax: "089-0877451" },
        { ID: "FRANR", CompanyName: "France restauration", ContactName: "Carine Schmitt", ContactTitle: "Marketing Manager", Address: "54, rue Royale", City: "Nantes", Region: null, PostalCode: "44000", Country: "France", Phone: "40.32.21.21", Fax: "40.32.21.20" },
        { ID: "FRANS", CompanyName: "Franchi S.p.A.", ContactName: "Paolo Accorti", ContactTitle: "Sales Representative", Address: "Via Monte Bianco 34", City: "Torino", Region: null, PostalCode: "10100", Country: "Italy", Phone: "011-4988260", Fax: "011-4988261" }
    ];

    private dragStarted = false;
    private dragStartX;
    private dragStartY;

    private curResizedCell;
    private colSpanIncrease = 0;
    private rowSpanIncrease = 0;
    private resizeInitialWidth = 0;
    private resizeInitialHeight = 0;
    // tslint:enable:max-line-length

    constructor(public cdr: ChangeDetectorRef) {
        this.updateCollectionSize();
    }

    public ngAfterViewInit() {
        // this.grid.groupBy({ fieldName: 'Country', dir: 1, ignoreCase: false });
    }

    public updateCollectionSize() {
        const newCollection = [];
        for (let rowIndex = 0; rowIndex < this.rowsCount; rowIndex++) {
            const row = [];
            for (let colIndex = 0; colIndex < this.colsCount; colIndex++) {
                if (this.collection[rowIndex] && this.collection[rowIndex][colIndex]) {
                    row.push(this.collection[rowIndex][colIndex]);
                } else {
                    row.push({
                        colSpan: 1,
                        colStart: colIndex + 1,
                        key: "",
                        rowSpan: 1,
                        rowStart: rowIndex + 1,
                        width: ""
                    });
                }
            }

            newCollection.push(row);
        }
        this.collection = newCollection;
    }

    public updateCollectionLayout() {
        for (const record of this.collection) {
            let column = record[0];
            for (let colIndex = 1; colIndex < record.length; colIndex++) {
                if (record[colIndex].key === column.key &&
                        record[colIndex].key !== "") {
                    column.colSpan += record[colIndex].colSpan;
                    record.splice(colIndex, 1);
                    colIndex--;
                } else {
                    column = record[colIndex];
                }
            }
        }
    }

    public rowCountChanged(event) {
        this.rowsCount = parseInt(event.target.value, 10);
        this.updateCollectionSize();
    }

    public rowHeightChanged(event) {
        this.rowsHeight = event.target.value;
        this.cdr.detectChanges();
    }

    public colCountChanged(event) {
        this.colsCount = parseInt(event.target.value, 10);
        this.updateCollectionSize();
    }

    public colWidthChanged(event) {
        this.colsWidth = event.target.value;
    }

    public onColEnter(event: IgxDropEnterEventArgs, rowIndex, colIndex) {
        this.collection[rowIndex][colIndex].hovered = true;
    }

    public onColLeave(event: IgxDropLeaveEventArgs, rowIndex, colIndex) {
        this.collection[rowIndex][colIndex].hovered = false;
    }

    public onColDropped(event: IgxDropEventArgs, rowIndex, colIndex) {
        event.cancel = true;
        this.collection[rowIndex][colIndex].key = event.drag.data.key;
        this.updateCollectionLayout();
    }

    public flattenCollection() {
        const result = [];
        this.collection.forEach((row) => {
            row.forEach((col) => {
                const newCol = { ...col };
                delete newCol.width;
                delete newCol.hovered;
                delete newCol.selected;

                result.push(newCol);
            });
        });

        return result;
    }

    public getColumnLayoutTemplate() {
        const flatCollection = this.flattenCollection();
        let columnLayout = "<igx-column-layout>";
        flatCollection.map((row) => {
            const column =
                '\n    <igx-column [rowStart]="' + row.rowStart + '"' +
                ' [rowEnd]="' + (row.rowStart + row.rowSpan) + '"' +
                ' [colStart]="' + row.colStart + '"' +
                ' [colEnd]="' + (row.colStart + row.colSpan) + '"' +
                ' field="' + row.key + '">' +
                "\n    </igx-column>";
            columnLayout += column;
        });

        columnLayout += "\n</igx-column-layout>";

        this.jsonCollection = columnLayout;
        this.jsonDialog.open();
    }

    public renderJson() {
        const flatCollection = this.flattenCollection();
        const mappedCollection = flatCollection.map((row) => {
            return {
                colEnd: row.colStart + row.colSpan,
                colStart: row.colStart,
                key: row.key,
                rowEnd: row.rowStart + row.rowSpan,
                rowStart: row.rowStart
            };
        });
        this.jsonCollection = JSON.stringify(mappedCollection);
        this.jsonDialog.open();
    }

    public copyToClipboard() {
        this.textArea.nativeElement.select();
        document.execCommand("copy");
    }

    public clickCell(cellRef, rowIndex, colIndex) {
        this.cellSelected = this.collection[rowIndex][colIndex];
        this.cellSelected.selected = true;

        this.resizeTop = cellRef.offsetTop;
        this.resizeLeft = cellRef.offsetLeft;
        this.resizeHeight = cellRef.offsetHeight;
        this.resizeWidth = cellRef.offsetWidth;
        this.resizeInitialHeight = this.resizeHeight;
        this.resizeInitialWidth = this.resizeWidth;
        this.resizeVisible = true;
    }

    public onBlur(event, rowIndex, colIndex) {
        this.cellSelected = null;
        this.collection[rowIndex][colIndex].selected = false;
        this.resizeVisible = false;
    }

    public pointerDownResize(event, rowIndex, colIndex) {
        this.dragStarted = true;
        this.dragStartX = event.pageX;
        this.dragStartY = event.pageY;
        this.curResizedCell = this.collection[rowIndex][colIndex];

        event.target.setPointerCapture(event.pointerId);
    }

    public pointerMoveResizeLeft(event, cellRef, rowIndex, colIndex) {
        if (this.dragStarted) {
            const curDistance = this.dragStartX - event.pageX;
            const minIncrease = -this.curResizedCell.colSpan;
            const maxIncrease = colIndex;
            this.colSpanIncrease = Math.min(Math.round(curDistance / parseInt(this.colsWidth, 10)), maxIncrease);
            this.colSpanIncrease = Math.max(this.colSpanIncrease, minIncrease);
            this.resizeWidth = this.resizeInitialWidth + this.colSpanIncrease * parseInt(this.colsWidth, 10);
            this.resizeLeft = cellRef.offsetLeft - this.colSpanIncrease * parseInt(this.colsWidth, 10);
        }
    }

    public pointerMoveResizeRight(event, cellRef, rowIndex, colIndex) {
        if (this.dragStarted) {
            const curDistance = event.pageX - this.dragStartX;
            const maxIncrease = this.colsCount - (colIndex + this.curResizedCell.colSpan);
            this.colSpanIncrease = Math.min(Math.round(curDistance / parseInt(this.colsWidth, 10)), maxIncrease);
            this.resizeWidth = this.resizeInitialWidth + this.colSpanIncrease * parseInt(this.colsWidth, 10);
        }
    }

    public pointerUpResizeRight(event, cellRef, rowIndex, colIndex) {
        this.dragStarted = false;
        this.resizeVisible = false;

        if (this.colSpanIncrease > 0) {
            for (let i = 0; i < this.colSpanIncrease; i++) {
                const nextCell = this.collection[rowIndex][colIndex + 1];
                if ((this.curResizedCell.colStart + this.curResizedCell.colSpan + i) !==
                        (nextCell.colStart || nextCell.rowSpan > 1)) {
                    this.colSpanIncrease = i;
                    break;
                }
                if (this.collection[rowIndex][colIndex + 1].colSpan > 1) {
                    this.collection[rowIndex][colIndex + 1].colStart++;
                    this.collection[rowIndex][colIndex + 1].colSpan--;
                } else {
                    this.collection[rowIndex].splice(colIndex + 1, 1);
                }
            }

            if (this.curResizedCell.rowSpan > 1) {
                for (let row = this.curResizedCell.rowStart;
                        row < this.curResizedCell.rowStart - 1 + this.curResizedCell.rowSpan;
                        row++) {
                    for (let spanIndex = 0; spanIndex < this.colSpanIncrease; spanIndex++) {
                        let borderCellIndex = 0;
                        const borderCell = this.collection[row].find((cell, index) => {
                            borderCellIndex = index;
                            return cell.colStart === this.curResizedCell.colStart +
                                this.curResizedCell.colSpan + spanIndex;
                        });
                        if (borderCell) {
                            if (borderCell.colSpan > 1) {
                                borderCell.colStart++;
                                borderCell.colSpan--;
                            } else {
                                this.collection[row].splice(borderCellIndex, 1);
                            }
                        }
                    }
                }
            }

            this.curResizedCell.colSpan += this.colSpanIncrease;
        } else if (this.colSpanIncrease < 0) {
            this.colSpanIncrease = -1 * Math.min(-1 * this.colSpanIncrease, this.curResizedCell.colSpan);
            const rowEndIndex = this.curResizedCell.rowStart - 1 + this.curResizedCell.rowSpan;

            for (let rowUpdateIndex = rowIndex; rowUpdateIndex < rowEndIndex; rowUpdateIndex++) {
                const firstHalf = [];
                for (const record of this.collection[rowUpdateIndex]) {
                    if (record.colStart <
                            this.curResizedCell.colStart + this.curResizedCell.colSpan) {
                        firstHalf.push(record);
                    } else {
                        break;
                    }
                }

                const secondHalf = this.collection[rowUpdateIndex].slice(firstHalf.length);
                for (let i = 0; i < -1 * this.colSpanIncrease; i++) {
                    secondHalf.unshift({
                        colSpan: 1,
                        colStart: this.curResizedCell.colStart + this.curResizedCell.colSpan - i - 1,
                        hovered: false,
                        key: "",
                        rowSpan: 1,
                        rowStart: rowUpdateIndex + 1,
                        selected: false,
                        width: ""
                    });
                }

                this.collection[rowUpdateIndex] = firstHalf.concat(secondHalf);

            }

            this.curResizedCell.colSpan -= -1 * this.colSpanIncrease;
            if (this.curResizedCell.colSpan === 0) {
                this.collection[rowIndex].splice(colIndex + this.curResizedCell.colSpan, 1);
            }
        }
        this.colSpanIncrease = 0;
    }

    public pointerUpResizeLeft(event, cellRef, targetRowIndex, targetColIndex) {
        this.dragStarted = false;
        this.resizeVisible = false;

        const curIndexFromEnd = this.collection[targetRowIndex].length - targetColIndex - 1;
        if (this.colSpanIncrease > 0) {
            // Handle first row
            for (let i = 0; i < this.colSpanIncrease; i++) {
                const curIndexFromStart = this.collection[targetRowIndex].length - curIndexFromEnd - 1;
                const prevCell = this.collection[targetRowIndex][curIndexFromStart - 1];
                if (prevCell.colStart + prevCell.colSpan + i !==
                    this.collection[targetRowIndex][curIndexFromStart].colStart ||
                    prevCell.rowSpan > 1) {
                    this.colSpanIncrease = i;
                    break;
                }
                if (prevCell.colSpan > 1) {
                    prevCell.colSpan--;
                } else {
                    this.collection[targetRowIndex].splice(curIndexFromStart - 1, 1);
                }
            }

            // Handle the rest if it spans more than one row
            if (this.curResizedCell.rowSpan > 1) {
                for (let rowIndex = this.curResizedCell.rowStart;
                        rowIndex < this.curResizedCell.rowStart - 1 + this.curResizedCell.rowSpan;
                        rowIndex++) {
                    let leftSibling;
                    let leftSiblingIndex = 0;
                    for (let m = 0; m < this.collection[rowIndex].length; m++) {
                        if (this.collection[rowIndex][m].colStart >=
                                this.curResizedCell.colStart + this.curResizedCell.colSpan) {
                            break;
                        }
                        leftSiblingIndex = m;
                        leftSibling = this.collection[rowIndex][m];
                    }

                    for (let spanIndex = 0; spanIndex < this.colSpanIncrease; spanIndex++) {
                        if (leftSibling.colSpan > 1) {
                            leftSibling.colSpan--;
                        } else {
                            this.collection[rowIndex].splice(leftSiblingIndex - spanIndex, 1);
                        }
                        leftSibling = this.collection[rowIndex][leftSiblingIndex - spanIndex - 1];
                    }
                }
            }

            this.curResizedCell.colStart -= this.colSpanIncrease;
            this.curResizedCell.colSpan += this.colSpanIncrease;
        } else if (this.colSpanIncrease < 0) {
            this.colSpanIncrease = -1 * Math.min(-1 * this.colSpanIncrease, this.curResizedCell.colSpan);
            const rowEndIndex = this.curResizedCell.rowStart - 1 + this.curResizedCell.rowSpan;
            for (let rowUpdateIndex = targetRowIndex; rowUpdateIndex < rowEndIndex; rowUpdateIndex++) {
                const firstHalf = [];
                for (const record of this.collection[rowUpdateIndex]) {
                    if (record.colStart < this.curResizedCell.colStart) {
                        firstHalf.push(record);
                    } else {
                        break;
                    }
                }

                const secondHalf = this.collection[rowUpdateIndex].slice(firstHalf.length);
                for (let i = 0; i < -1 * this.colSpanIncrease; i++) {
                    firstHalf.push({
                        colSpan: 1,
                        colStart: this.curResizedCell.colStart + i,
                        key: "",
                        rowSpan: 1,
                        rowStart: rowUpdateIndex + 1,
                        selected: false,
                        width: ""
                    });
                }

                if (rowUpdateIndex === targetRowIndex && this.curResizedCell.colSpan === 0) {
                    secondHalf.shift();
                }
                this.collection[rowUpdateIndex] = firstHalf.concat(secondHalf);
            }

            this.curResizedCell.colSpan -= -1 * this.colSpanIncrease;
            this.curResizedCell.colStart += -1 * this.colSpanIncrease;
        }
        this.colSpanIncrease = 0;
    }

    public pointerMoveResizeBottom(event, cellRef, rowIndex, colIndex) {
        if (this.dragStarted) {
            const curDistance = event.pageY - this.dragStartY;
            const maxIncrease = this.rowsCount - rowIndex - this.curResizedCell.rowSpan;
            this.rowSpanIncrease = Math.min(Math.round(curDistance / parseInt(this.rowsHeight, 10)), maxIncrease);
            this.resizeHeight = this.resizeInitialHeight + this.rowSpanIncrease * parseInt(this.rowsHeight, 10);
        }
    }

    public pointerUpResizeBottom(event, cellRef, rowIndex, colIndex) {
        this.dragStarted = false;
        this.resizeVisible = false;

        if (this.rowSpanIncrease > 0) {
            for (let increaseIndex = 1; increaseIndex <= this.rowSpanIncrease; increaseIndex++) {
                // Cycle how many rows should the size of the cell increase, and edit them accordingly.
                const curRowIndex = rowIndex + (this.curResizedCell.rowSpan - 1) + increaseIndex;

                for (let j = this.collection[curRowIndex].length - 1; j >= 0; j--) {
                    // Cycle all cells backwards because when cell spans in
                    // the way it should be cut and cells on the right should be added.
                    const curCell = this.collection[curRowIndex][j];
                    const curCellStart = curCell.colStart;
                    let curCellEnd = curCell.colStart + curCell.colSpan;
                    const resizedCellStart = this.curResizedCell.colStart;
                    const resizedCellEnd = this.curResizedCell.colStart + this.curResizedCell.colSpan;

                    if (curCellStart < resizedCellEnd && curCellEnd > resizedCellEnd && curCell.rowSpan === 1) {
                        // If current cell spans the way of the resized
                        // down cell and the end is spanning more to the right,
                        // cut the current cell and add the needed cells after the resized cell ends.
                        const numNewCells = curCellEnd - resizedCellEnd;
                        for (let i = 0; i < numNewCells; i++) {
                            curCell.colSpan--;
                            curCellEnd--;
                            this.collection[curRowIndex].splice(j + 1, 0, {
                                colSpan: 1,
                                colStart: curCellEnd,
                                hovered: false,
                                key: "",
                                rowSpan: 1,
                                rowStart: curRowIndex + 1,
                                selected: false,
                                width: ""
                            });
                        }
                    } else if (curCellStart < resizedCellEnd && curCellEnd > resizedCellEnd && curCell.rowSpan > 1) {
                        // We only need to check the rowSpan because we start
                        // from top to bottom and top cells have the rowSpan
                        this.curResizedCell.rowSpan += increaseIndex - 1;
                        this.rowSpanIncrease = 0;
                        return;
                    }

                    if (curCellStart <= resizedCellEnd &&
                            curCellEnd >= resizedCellStart &&
                            curCellEnd <= resizedCellEnd) {
                        // If current cell is in the way of resized down cell decrease the size of the current cell.
                        curCell.colSpan -= (curCellEnd) - this.curResizedCell.colStart;
                    }

                    if (curCell.colSpan <= 0) {
                        // If the current cell span is <= 0 it should be removed.
                        this.collection[curRowIndex].splice(j, 1);
                    }
                }
            }

            this.curResizedCell.rowSpan += this.rowSpanIncrease;
        } else if (this.rowSpanIncrease < 0) {
            this.rowSpanIncrease = -1 * Math.min(-1 * this.rowSpanIncrease, this.curResizedCell.rowSpan);
            const startIndex = this.curResizedCell.rowStart + this.curResizedCell.rowSpan - 2;
            for (let i = startIndex; i > startIndex + this.rowSpanIncrease; i--) {
                let startCellIndex = 0;

                // Get first cell after current resized multirow cell
                for (let j = 0; j < this.collection[i].length; j++) {
                    if (this.collection[i][j].colStart > this.curResizedCell.colStart) {
                        startCellIndex = j - 1;
                        break;
                    }
                }

                for (let j = 0; j < this.curResizedCell.colSpan; j++) {
                    this.collection[i].splice(startCellIndex + 1 + j, 0, {
                        colSpan: 1,
                        colStart: this.curResizedCell.colStart + j,
                        hovered: false,
                        key: "",
                        rowSpan: 1,
                        rowStart: i + 1,
                        selected: false,
                        width: ""
                    });
                }
            }

            this.curResizedCell.rowSpan += this.rowSpanIncrease;
            if (this.curResizedCell.rowSpan === 0) {
                this.collection[rowIndex].splice(this.curResizedCell.colStart - 1 + this.curResizedCell.colSpan, 1);
            }
        }

        this.rowSpanIncrease = 0;
    }

    public onCellKey(event, rowIndex, colIndex) {
        if (event.key === "Delete") {
            for (let i = rowIndex; i < rowIndex + this.cellSelected.rowSpan; i++) {
                const rowFirstHalf = [];
                for (const record of this.collection[i]) {
                    if (record.colStart < this.cellSelected.colStart) {
                        rowFirstHalf.push(record);
                    } else {
                        break;
                    }
                }

                const rowSecondHalf = this.collection[i].slice(rowFirstHalf.length + (i === rowIndex ? 1 : 0));
                for (let j = 0; j < this.cellSelected.colSpan; j++) {
                    rowFirstHalf.push({
                        colSpan: 1,
                        colStart: this.cellSelected.colStart + j,
                        key: "",
                        rowSpan: 1,
                        rowStart: i + 1,
                        selected: false,
                        width: ""
                    });
                }
                this.collection[i] = rowFirstHalf.concat(rowSecondHalf);
            }

            this.cellSelected = null;
            this.resizeVisible = false;
        }
    }
}
