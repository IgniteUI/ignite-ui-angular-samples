import { DOCUMENT } from '@angular/common';
import { Component, Inject, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
// import { IgxListComponent } from 'igniteui-angular';
import { ContactsService } from './services/contacts.service';
import { IMessage, MessagesService } from './services/messages.service';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-list-chat-sample',
    styleUrls: ['./list-chat-sample.component.css'],
    templateUrl: './list-chat-sample.component.html'
})
export class ListChatSampleComponent {
    @ViewChild('myMessage', { static: true })
    public myMessageTemplate: TemplateRef<any>;
    @ViewChild('othersMessage', { static: true })
    public othersMessageTemplate: TemplateRef<any>;

    public message: string;

    // @ViewChild('list')
    // public listComponent: IgxListComponent;

    private myId = 4;

    constructor(public messagesService: MessagesService, public contactsService: ContactsService,
                @Inject(DOCUMENT) private document: any) { }

    public getMessageTemplate(message: IMessage): TemplateRef<any> {
        if (message.authorId === this.myId) {
            return this.myMessageTemplate;
        }

        return this.othersMessageTemplate;
    }

    public isFirstMessage(messageIndex: number): boolean {
        if (messageIndex === 0) {
            return true;
        }

        const messages = this.messagesService.getMessages();
        if (messageIndex >= messages.length) {
            return false;
        }

        const currentMessage = messages[messageIndex];
        const previousMessage = messages[messageIndex - 1];

        return currentMessage.authorId !== previousMessage.authorId;
    }

    public onMessageKeypress(event) {
        if (event.key === 'Enter') {
            this.sendMessage();
        }
    }

    public onSendButtonClick() {
        this.sendMessage();
    }

    private sendMessage() {
        this.addMessage(this.message);
        this.message = null;

        this.scrollToBottom();
    }

    private addMessage(message: string) {
        if (message) {
            const messageInstance: IMessage = {
                authorId: this.myId,
                message,
                timestamp: new Date(Date.now())
            };
            this.messagesService.addMessage(messageInstance);
        }
    }

    private scrollToBottom(): void {
        try {
            const listElement = this.document.querySelector('igx-list');
            if (listElement) {
                listElement.scrollTop = listElement.scrollHeight;
            }

            // this.listComponent.element.nativeElement.scrollTop =
            // this.listComponent.element.nativeElement.scrollHeight;
        } catch (err) { }
    }
}
