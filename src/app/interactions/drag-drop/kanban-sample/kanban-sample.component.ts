/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/naming-convention */
import { ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { IDropBaseEventArgs, IDropDroppedEventArgs } from 'igniteui-angular';

enum state {
    toDo = 'toDo',
    inProgress = 'inProgress',
    done = 'done'
}
interface IListItem {
    id: string;
    text: string;
    state: state;
}
@Component({
    selector: 'app-kanban-sample',
    templateUrl: './kanban-sample.component.html',
    styleUrls: ['./kanban-sample.component.css']
})
export class KanbanSampleComponent implements OnInit {
    @ViewChild('toDo')
    private toDo: ElementRef;

    @ViewChild('inProgress')
    private inProgress: ElementRef;

    @ViewChild('done')
    private done: ElementRef;

    public toDoList: IListItem[];
    public inProgressList: IListItem[];
    public doneList: IListItem[];
    private dragObj;
    private dummyObj;
    private lastDragEnterList: string;
    private currentList: string;

    constructor(private renderer: Renderer2, private cdr: ChangeDetectorRef) { }

    public ngOnInit(): void {
        this.toDoList = [
            { id: 'STR-000132', text: 'Implement chat bubble', state: state.toDo },
            { id: 'STR-000097', text: 'Implement sticky header', state: state.toDo },
            { id: 'STR-000191', text: 'Change trial days to credit', state: state.toDo }

        ];
        this.inProgressList = [
            { id: 'STR-000124', text: 'Implement fback widget', state: state.inProgress },
            { id: 'STR-000121', text: 'Add analytics', state: state.inProgress }
        ];
        this.doneList = [
            { id: 'STR-000129', text: 'Add SSL to account pages', state: state.done }
        ];
        this.dragObj = null;
        this.dummyObj = null;
        this.lastDragEnterList = '';
        this.currentList = '';
    }

    public onStateContainerEnter(event: IDropDroppedEventArgs) {
        // If we have entered another list container, we have to remove the 'dummy' object from the previous one
        if (this.currentList !== event.owner.element.nativeElement.id) {
            this[this.currentList] = this[this.currentList].filter((item) => item.id !== 'dummy');
            this.cdr.detectChanges();
            this.currentList = event.owner.element.nativeElement.id;
            this.dummyObj = null;
        }
        // Add the blue container hightlight when an item starts being dragged
        this.renderer.addClass(event.owner.element.nativeElement, 'active');
    }

    public onStateContainerLeave(event: IDropDroppedEventArgs) {
        // This event also gets raised when the user drags a task over another task tile.
        // That means we have to re-apply the 'active' class in the `onItemEnter` event handler
        this.renderer.removeClass(event.owner.element.nativeElement,  'active');
    }

    public dragStartHandler(event) {
        // We have to save the dragStartList so we could remove the dragged item from it later, when it gets dropped
        this.currentList = event.owner.element.nativeElement.dataset.state + 'List';
        this.lastDragEnterList = this.currentList;
        this.dragObj = this[this.currentList].filter((elem) => elem.id === event.owner.element.nativeElement.id)[0];
    }

    public dragEndHandler(event) {
        this.toDoList = this.toDoList.filter((x) => x.id !== 'dummy');
        this.inProgressList = this.inProgressList.filter((x) => x.id !== 'dummy');
        this.doneList = this.doneList.filter((x) => x.id !== 'dummy');
        if (this.dragObj) {
            this.dragObj.hide = false;
        }
    }

    public onItemEnter(event: IDropBaseEventArgs) {
        // Applying the container highlighting again
        const listContainer = event.owner.element.nativeElement.dataset.state;
        this.renderer.addClass(this[listContainer].nativeElement, 'active');

        const currentList = event.owner.element.nativeElement.dataset.state + 'List';
        const currentItemIndex = this[currentList].findIndex((item) => item.id === event.owner.element.nativeElement.id);
        // Checking if items in the same list are being reordered
        if (this.lastDragEnterList === currentList) {
            const draggedItemIndex = this[currentList].findIndex((item) => item.id === this.dragObj.id);
            this.swapTiles(draggedItemIndex, currentItemIndex, currentList);
        } else {
            // We need a hidden dummy object that would make an empty space for the dragged element in the list
            if (!this.dummyObj) {
                this.dummyObj = {id: 'dummy', text: '', state: event.owner.element.nativeElement.dataset.state};
                const newCurrentList = [
                    ...this[currentList].slice(0, currentItemIndex),
                    this.dummyObj,
                    ...this[currentList].slice(currentItemIndex)
                ];
                this[currentList] = newCurrentList;
                this.cdr.detectChanges();
            } else {
                const dummyObjIndex = this[currentList].findIndex((item) => item.id === 'dummy');
                if (dummyObjIndex !== -1) {
                    this.swapTiles(dummyObjIndex, currentItemIndex, currentList);
                }
            }
        }
    }

    public onItemLeave(event: IDropBaseEventArgs) {
        const listContainer = event.owner.element.nativeElement.dataset.state;
        this.renderer.removeClass(this[listContainer].nativeElement, 'active');
    }

    public onItemDropped(event: IDropDroppedEventArgs) {
        const dropListState = event.owner.element.nativeElement.id;
        const dragListState = event.drag.element.nativeElement.dataset.state + 'List';
        const dummyItemIndex = this[dropListState].findIndex((item) => item.id === 'dummy');
        if (dropListState !== dragListState) {
            // The state of the dragged object should be updated before inserting it in the dropped list
            this.dragObj.state = dropListState.substring(0, dropListState.length - 4);
            this[dragListState] = this[dragListState].filter((item) => item.id !== this.dragObj.id);
            // Check if there is a dummy item and replace it with the dragged one
            if (dummyItemIndex !== -1) {
                this[dropListState].splice(dummyItemIndex, 1, this.dragObj);
            } else {
                this[dropListState].push(this.dragObj);
            }
        }
        this.dragObj.hide = false;
        this.dragObj = null;
        // The default browser drag behavior should be cancelled
        event.cancel = true;
    }

    private swapTiles(currentIndex: number, targetIndex: number, itemList: string): void {
        const tempObj = this[itemList][currentIndex];
        this[itemList].splice(currentIndex, 1);
        this[itemList].splice(targetIndex, 0, tempObj);
        this.cdr.detectChanges();
    }
}
