/* eslint-disable max-len */
import { Component, ViewChild } from '@angular/core';
import { IgxTextHighlightDirective } from 'igniteui-angular';

@Component({
    selector: 'app-text-highlight-style',
    styleUrls: ['./text-highlight-style.component.css'],
    templateUrl: './text-highlight-style.component.html'
})
export class TextHighlightStyleComponent {
    @ViewChild(IgxTextHighlightDirective, { read: IgxTextHighlightDirective, static: true })
    public highlight: IgxTextHighlightDirective;

    public html = `
    Use the search box to search for a certain string in this text.
    All the results will be highlighted in the same color with the exception of the
    the first occurrence of the string, which will have a different color in order to tell it apart.
    You can use the button in the searchbox to specify if the search will be case sensitive.
    You can move the active highlight by either pressing the buttons on the searchbox or by using the Enter or the arrow keys on your keyboard.
    `;


    public searchText = '';
    public matchCount = 0;
    public caseSensitive = false;
    public index = 0;

    public searchKeyDown(ev) {
        if (this.searchText) {
            if (ev.key === 'Enter' || ev.key === 'ArrowDown' || ev.key === 'ArrowRight') {
                ev.preventDefault();
                this.findNext();
            } else if (ev.key === 'ArrowUp' || ev.key === 'ArrowLeft') {
                ev.preventDefault();
                this.findPrev();
            }
        }
    }

    public onTextboxChange() {
        this.index = 0;
        this.find(0);
    }

    public updateSearch() {
        this.caseSensitive = !this.caseSensitive;
        this.find(0);
    }

    public clearSearch() {
        this.searchText = '';
        this.find(0);
    }

    public get canMoveHighlight() {
        return this.matchCount > 1;
    }

    public findNext() {
        this.find(1);
    }

    public findPrev() {
        this.find(-1);
    }

    private find(increment: number) {
        if (this.searchText) {
            this.matchCount = this.highlight.highlight(this.searchText, this.caseSensitive);
            this.index += increment;

            this.index = this.index < 0 ? this.matchCount - 1 : this.index;
            this.index = this.index > this.matchCount - 1 ? 0 : this.index;

            if (this.matchCount) {
                IgxTextHighlightDirective.setActiveHighlight('group1', {
                    index: this.index
                });
            }
        } else {
            this.highlight.clearHighlight();
        }
    }
}
