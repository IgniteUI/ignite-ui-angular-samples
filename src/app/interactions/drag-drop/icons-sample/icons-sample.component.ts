import { Component } from '@angular/core';

@Component({
    selector: 'app-icons-sample',
    styleUrls: ['./icons-sample.component.css'],
    templateUrl: './icons-sample.component.html'
})

export class IconsSampleComponent {
    public dragIconId: number;
    public dropTileId: number;
    public icons = [
        {
            id: 0, url: 'assets/images/drag-drop/profile.png'
        },
        {
            id: 1, url: 'assets/images/drag-drop/calendar.png'
        },
        {
            id: 2, url: 'assets/images/drag-drop/mail.png'
        },
        {
            id: 3, url: 'assets/images/drag-drop/photos.png'
        },
        {
            id: 4, url: 'assets/images/drag-drop/videos.png'
        },
        {
            id: 5, url: 'assets/images/drag-drop/cloud.png'
        },
        {
            id: 6, url: 'assets/images/drag-drop/map.png'
        },
        {
            id: 7, url: 'assets/images/drag-drop/contacts.png'
        },
        {
            id: 8, url: 'assets/images/drag-drop/chat.png'
        }
    ];

    public onIconDropped(ev) {
        ev.drag.dropFinished();
    }

    public onEnterHandler(ev): void {
        this.dropTileId = parseInt(ev.owner.element.nativeElement.id, 10);
        // the event gets raised immediately, but we want to swap only when we drag over another icon
        if (this.dragIconId === this.dropTileId) {
            return;
        }
        const dragIndex = this.icons.findIndex((iconObj) => iconObj.id === this.dragIconId);
        const dropIndex = this.icons.findIndex((iconObj) => iconObj.id === this.dropTileId);
        this.swapIcons(dragIndex, dropIndex);
    }

    public dragStartHandler(id: string): void {
        this.dragIconId = parseInt(id, 10);
    }

    public dragEndHandler(dragRef: HTMLElement) {
        dragRef.style.visibility = 'visible';
    }

    public ghostCreateHandler(dragRef: HTMLElement) {
        dragRef.style.visibility = 'hidden';
    }

    private swapIcons(dragIndex: number, dropIndex: number) {
        const tempObj = this.icons[dragIndex];
        this.icons.splice(dragIndex, 1);
        this.icons.splice(dropIndex, 0, tempObj);
    }
}
