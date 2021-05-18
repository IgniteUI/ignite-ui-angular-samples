import {
    Component,
    ElementRef,
    QueryList,
    ViewChild,
    ViewChildren
} from '@angular/core';
import {
    IDragBaseEventArgs,
    IDragMoveEventArgs,
    IgxDragDirective,
    IgxDragLocation
} from 'igniteui-angular';

@Component({
    selector: 'app-list-reorder-sample',
    templateUrl: './list-reorder-sample.component.html',
    styleUrls: ['./list-reorder-sample.component.css']
})
export class ListReorderSampleComponent {
    @ViewChildren('dragDirRef', { read: IgxDragDirective })
    public dragDirs: QueryList<IgxDragDirective>;

    @ViewChild('listContainer', { read: ElementRef })
    public listContainer: ElementRef;

    public employees = [
        { id: 0, name: 'Ivan Cornejo', title: 'Senior Product Owner' },
        { id: 1, name: 'Amish Shiravadakar', title: 'Business Tools Director' },
        { id: 2, name: 'Elsi Hansdottir', title: 'Financial Director' },
        { id: 3, name: 'Benito Noboa', title: 'Marketing Specialist' },
        { id: 4, name: 'Beth Murphy', title: 'Platform Lead for Web' }
    ];

    public newIndex = null;
    public animationDuration = 0.3;
    private listItemHeight = 55;

    public getDragDirectiveRef(id: number): IgxDragDirective {
        return this.dragDirs.find((item) => item.data.id === id);
    }

    public onDragStart(event: IDragBaseEventArgs, dragIndex: number) {
        // Record the current index as basis for moving up/down.
        this.newIndex = dragIndex;
        // Sets specific class when dragging.
        event.owner.data.dragged = true;
    }

    public onDragEnd(event: IDragBaseEventArgs, itemIndex: number) {
        if (this.newIndex !== null) {
            // When we have moved the dragged element up/down, animate it to its new location.
            const moveDown = this.newIndex > itemIndex;
            // If the new position is below add the height moved down, otherwise subtract it.
            const prefix = moveDown ? 1 : -1;
            // The height that the new position differs from the current. We know that each item is 55px height.
            const movedHeight = prefix * Math.abs(this.newIndex - itemIndex) * this.listItemHeight;
            const originLocation = event.owner.originLocation;
            event.owner.transitionTo(
                new IgxDragLocation(originLocation.pageX, originLocation.pageY + movedHeight),
                { duration: this.animationDuration }
            );
        } else {
            // Otherwise animate it to its original position, since it is unchanged.
            event.owner.transitionToOrigin({ duration: this.animationDuration });
        }
    }

    public onTransitioned(event: IDragBaseEventArgs, itemIndex: number) {
        // We can have other items transitioned when they move to free up space where the dragged element would be.
        if (event.owner.data.dragged && this.newIndex != null && this.newIndex !== itemIndex) {
            // If the element finished transitioning is the one were dragging,
            // We can update all elements their new position in the list.
            this.shiftElements(itemIndex, this.newIndex);
            event.owner.setLocation(event.owner.originLocation);
            this.newIndex = null;
        }
        // Disables the specific class when dragging.
        event.owner.data.dragged = false;
    }

    public onDragMove(event: IDragMoveEventArgs, itemIndex: number) {
        const containerPosY = this.listContainer.nativeElement.getBoundingClientRect().top;
        // Relative position of the dragged element to the list container.
        const relativePosY = event.nextPageY - containerPosY;

        let newIndex = Math.floor(relativePosY / this.listItemHeight);
        newIndex = newIndex < 0 ? 0 : (newIndex >= this.employees.length ? this.employees.length - 1 : newIndex);
        if (newIndex === this.newIndex) {
            // If the current new index is unchanged do nothing.
            return;
        }

        const movingDown = newIndex > itemIndex;
        if (movingDown && newIndex > this.newIndex ||
            (!movingDown && newIndex < this.newIndex && newIndex !== itemIndex)) {
            // If we are moving the dragged element down and the new index is bigger than the current
            // this means that the element we are stepping into is not shifted up and should be shifted.
            // Same if we moving the dragged element up and the new index is smaller than the current.
            const elementToMove = this.getDragDirectiveRef(this.employees[newIndex].id);
            const currentLocation = elementToMove.location;
            const prefix = movingDown ? -1 : 1;
            elementToMove.transitionTo(
                new IgxDragLocation(currentLocation.pageX, currentLocation.pageY + prefix * this.listItemHeight),
                { duration: this.animationDuration }
            );
        } else {
            // Otherwise if are moving up but the new index is still bigger than the current, this means that
            // the item we are stepping into is already shifted and should be returned to its original position.
            // Same if we are moving down and the new index is still smaller than the current.
            const elementToMove = this.getDragDirectiveRef(this.employees[this.newIndex].id);
            elementToMove.transitionToOrigin({ duration: this.animationDuration });
        }

        this.newIndex = newIndex;
    }

    private shiftElements(draggedIndex: number, targetIndex: number) {
        // Move the dragged element in DOM to the new position.
        const movedElem = this.employees.splice(draggedIndex, 1);
        this.employees.splice(targetIndex, 0, movedElem[0]);

        this.dragDirs.forEach((dir) => {
            if (this.employees[targetIndex].id !== dir.data.id) {
                // Reset each element its location since it will be repositioned in the DOM except the element we drag.
                dir.setLocation(dir.originLocation);
                dir.data.shifted = false;
            }
        });
    }
}
