import { Component, ViewChild } from '@angular/core';
import { DisplayDensity } from 'igniteui-angular';

@Component({
  selector: 'app-action-strip-paragraph',
  styleUrls: ['./action-strip-paragraph.component.css'],
  templateUrl: './action-strip-paragraph.component.html'
})
export class ActionStripParagraphComponent {
    @ViewChild('myParagraph') public paragraph;
    public result: string;
    public isVisible = false;
    public isBold = false;
    public isItalic = false;
    public isUnderlined = false;
    public displayDensity = DisplayDensity.comfortable;

    public makeTextBold() {
        if (!this.isBold) {
            this.paragraph.nativeElement.classList.add('font-bold');
            this.isBold = true;
        } else {
            this.paragraph.nativeElement.classList.remove('font-bold');
            this.isBold = false;
        }
    }

    public makeTextItalic() {
        if (!this.isItalic) {
            this.paragraph.nativeElement.classList.add('font-italic');
            this.isItalic = true;
        } else {
            this.paragraph.nativeElement.classList.remove('font-italic');
            this.isItalic = false;
        }
    }

    public makeTextUnderlined() {
        if (!this.isUnderlined) {
            this.paragraph.nativeElement.classList.add('font-underlined');
            this.isUnderlined = true;
        } else {
            this.paragraph.nativeElement.classList.remove('font-underlined');
            this.isUnderlined = false;
        }
    }
}
