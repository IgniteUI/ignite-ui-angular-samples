import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxDialogComponent } from "igniteui-angular";

@Component({
    selector: "drag-drop-sample",
    styleUrls: ["./drag-drop.component.scss"],
    templateUrl: "./drag-drop.component.html"
})

export class DragAndDropSampleComponent implements OnInit {
    public tiles = [];
    public puzzleBoard;
    public readonly boardEdgeLength: number = 3;
    public readonly successfullMessage: string = "You have successfully solved the puzzle.";

    @ViewChild("alert")
    public dialog: IgxDialogComponent;

    private tilesArr = [
        {
            id: 0, url: "assets/images/drag-drop/infragistics-logo00.jpeg"
        },
        {
            id: 1, url: "assets/images/drag-drop/infragistics-logo01.jpeg"
        },
        {
            id: 2, url: "assets/images/drag-drop/infragistics-logo02.jpeg"
        },
        {
            id: 3, url: "assets/images/drag-drop/infragistics-logo10.jpeg"
        },
        {
            id: 4, url: "assets/images/drag-drop/infragistics-logo11.jpeg"
        },
        {
            id: 5, url: "assets/images/drag-drop/infragistics-logo12.jpeg"
        },
        {
            id: 6, url: "assets/images/drag-drop/infragistics-logo20.jpeg"
        },
        {
            id: 7, url: "assets/images/drag-drop/infragistics-logo21.jpeg"
        },
        {
            id: 8, url: "assets/images/drag-drop/infragistics-logo22.jpeg"
        }
    ];

    constructor() {
    }

    public ngOnInit() {
        this.puzzleBoard = [];
        this.shuffleArray();
    }

    public onTileDropped(ev) {
        const dropId = parseInt((ev.owner.element.nativeElement.id).slice(-1), 10);
        const dragId = parseInt((ev.drag.element.nativeElement.id).slice(-1), 10);
        const firstPartRow = this.findIndexOfDrag(dragId).row;
        const firstPartColl = this.findIndexOfDrag(dragId).coll;
        const secondPartRow = Math.floor(dropId / this.boardEdgeLength);
        const secondPartColl = dropId % this.boardEdgeLength;
        this.swapTiles(firstPartRow, firstPartColl, secondPartRow, secondPartColl);
        ev.cancel = true;
        ev.drag.dropFinished();
        if (this.checkForCompletedPuzzle()) {
            setTimeout(() => {
                this.showMessage();
            }, 100);
        }
    }

    private showMessage() {
        this.dialog.open();
    }

    private swapTiles(firstPartRow: number, firstPartColl:number, secondPartRow: number, secondPartColl: number) {
        [this.puzzleBoard[firstPartRow][firstPartColl], this.puzzleBoard[secondPartRow][secondPartColl]] =
        [this.puzzleBoard[secondPartRow][secondPartColl], this.puzzleBoard[firstPartRow][firstPartColl]];

        [this.tiles[firstPartRow][firstPartColl], this.tiles[secondPartRow][secondPartColl]] =
        [this.tiles[secondPartRow][secondPartColl], this.tiles[firstPartRow][firstPartColl]];
    }

    private findIndexOfDrag(dragId: number) {
        for (let i = 0; i < this.boardEdgeLength; i++) {
            for (let j = 0; j < this.boardEdgeLength; j++) {
                if (this.puzzleBoard[i][j] === dragId) {
                    return { row: i, coll: j };
                }
            }
        }
    }

    private checkForCompletedPuzzle(): boolean  {
        for (let i = 0; i < this.boardEdgeLength; i++) {
            for (let j = 0; j < this.boardEdgeLength; j++) {
                if (this.puzzleBoard[i][j] !== (i * this.boardEdgeLength + j)) {
                    return false;
                }
            }
        }

        return true;
    }

    private shuffleArray(): void {
        for (let i = this.tilesArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.tilesArr[i], this.tilesArr[j]] = [this.tilesArr[j], this.tilesArr[i]];
        }

        for (let i = 0; i < this.boardEdgeLength; i++) {
            this.tiles.push([]);
            this.puzzleBoard.push([]);
            for (let j = 0; j < this.boardEdgeLength; j++) {
                this.tiles[i].push(this.tilesArr[i * this.boardEdgeLength + j]);
                this.puzzleBoard[i].push(this.tilesArr[i * this.boardEdgeLength + j].id);
            }
        }
    }

    private getBorderClasses(row, coll) {
        let classes = "";
        if (row === 0 || row === this.boardEdgeLength - 1) {
            classes += "top_bottom_edge ";
        }

        if (coll === 0 || coll === this.boardEdgeLength - 1) {
            classes += "left_right_edge";
        }

        return classes;
    }
}
