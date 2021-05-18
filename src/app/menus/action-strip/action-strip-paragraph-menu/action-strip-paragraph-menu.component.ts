import { Component, ViewChild } from '@angular/core';
import { DisplayDensity, IgxActionStripComponent } from 'igniteui-angular';

@Component({
  selector: 'app-action-strip-paragraph-menu',
  styleUrls: ['./action-strip-paragraph-menu.component.css'],
  templateUrl: './action-strip-paragraph-menu.component.html'
})
export class ActionStripParagraphMenuComponent {
    @ViewChild('actionStrip') public actionStrip: IgxActionStripComponent;
    @ViewChild('myParagraph') public paragraph;
    public result: string;
    public isVisible = false;
    public textLeft = false;
    public textCenter = false;
    public textRight = false;
    public displayDensity = DisplayDensity.comfortable;

    public onMouseLeave(event?) {
        if (!event) {
            return;
        }
        if (event.relatedTarget &&
            event.relatedTarget.nodeName.toLowerCase() !== 'igx-drop-down-item' &&
            event.relatedTarget.className.indexOf('menu-button') === -1) {
            this.actionStrip.hide();
        }
    }

    public alignTextLeft() {
        this.paragraph.nativeElement.classList.add('text-align-left');
        this.paragraph.nativeElement.classList.remove('text-align-center');
        this.paragraph.nativeElement.classList.remove('text-align-right');
    }

    public alignTextCenter() {
        this.paragraph.nativeElement.classList.remove('text-align-left');
        this.paragraph.nativeElement.classList.add('text-align-center');
        this.paragraph.nativeElement.classList.remove('text-align-right');
    }

    public alignTextRight() {
        this.paragraph.nativeElement.classList.remove('text-align-left');
        this.paragraph.nativeElement.classList.remove('text-align-center');
        this.paragraph.nativeElement.classList.add('text-align-right');
    }
}
