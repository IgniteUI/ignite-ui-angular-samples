import { ChangeDetectorRef, Component, Input, Renderer2 } from '@angular/core';

@Component({
    selector: 'app-email-sample',
    templateUrl: './email-sample.component.html',
    styleUrls: ['./email-sample.component.css']
})

export class EmailSampleComponent {

    @Input()
    public ghostTemplate: any;
    public hasChecked = false;
    public draggedElements = 0;

    public folders: any[] = [
        { icon: 'inbox', text: 'Inbox', dropChannel: 'inbox'},
        { icon: 'star_rate', text: 'Starred', dropChannel: 'starred'},
        { icon: 'error', text: 'Important', dropChannel: 'important'},
        { icon: 'send', text: 'Sent', dropChannel: 'sent'},
        { icon: 'label', text: 'Personal', dropChannel: 'personal'},
        { icon: 'label', text: 'Work', dropChannel: 'work'},
        { icon: 'label', text: 'Finances', dropChannel: 'finances'}
    ];

    public emails: any[] = [
        { sender: 'Ivan Cornejo', title: 'We have exciting news', checked: false},
        { sender: 'Amish Shiravadakar', title: 'RE: Document Libraries status', checked: false},
        { sender: 'Elsi Hansdottir', title: 'SEO Keywords', checked: false},
        { sender: 'Benito Noboa', title: 'Last Chance: Win an Amazon Gift Card', checked: false}
    ];

    constructor(
        private cdr: ChangeDetectorRef,
        private renderer: Renderer2
    ) { }

    public toggleCheck(email: any, checkbox: any): void {
        this.emails.forEach(x => x.checked = false);
        email.checked = true;
        checkbox.checked = true;
    }

    public toggleCheckbox(email: any): void {
        email.checked = !email.checked;
    }

    public stopEventPropagation(event: any): void {
        event.stopPropagation();
    }

    public dropElement(event: any): void {
        this.emails = this.emails.filter(x => x.checked !== true);
        event.dragData = {};
        event.cancel = true;
        this.leaveDropZone(event);
    }

    public enterDropZone(event: any): void {
        this.renderer.addClass(event.owner.element.nativeElement, 'drag-enter');
    }

    public leaveDropZone(event: any): void {
        this.renderer.removeClass(event.owner.element.nativeElement, 'drag-enter');
    }

    public onDragStart(event: any): void {
        this.aggressiveToggle(event);
        this.draggedElements = this.emails.filter(x => x.checked === true).length;
    }

    public onGhostCreated(): void {
        this.cdr.detectChanges();
    }

    private aggressiveToggle(event: any): void {
        const checkbox = event.owner.element.nativeElement.parentElement.querySelector('igx-checkbox');
        event.owner.data.checked = true;
        if (!this.nativeCheckboxChecked(checkbox)) {
            checkbox.click();
        }
    }

    private nativeCheckboxChecked(nativeElement: any): boolean {
        return nativeElement.classList.contains('igx-checkbox--checked');
    }

}
