import { Component, Renderer2 } from "@angular/core";
import { IgxDropEventArgs } from "igniteui-angular";
enum state {
    ToDo = "ToDo",
    InProgress = "InProgress",
    Done = "Done"
}
@Component({
    selector: "app-kanban-sample",
    templateUrl: "./kanban-sample.component.html",
    styleUrls: ["./kanban-sample.component.scss"]
})
export class KanbanSampleComponent {
    public toDoList = [
        { id: "STR-000132", text: "Implement chat bubble", state: state.ToDo },
        { id: "STR-000097", text: "Implement sticky header", state: state.ToDo },
        { id: "STR-000191", text: "Change trial days to credit", state: state.ToDo }

    ];
    public inProgressList = [
        { id: "STR-000124", text: "Implement fback widget", state: state.InProgress },
        { id: "STR-000121", text: "Add analytics", state: state.InProgress }
    ];
    public doneList = [
        { id: "STR-000129", text: "Add SSL to account pages", state: state.Done }
    ];
    public dragObj;
    public dragStartList;

    constructor(private renderer: Renderer2) { }

    onStateContainerEnter(event: IgxDropEventArgs) {
        this.renderer.addClass(event.owner.element.nativeElement, "dragHovered");
    }

    onStateContainerLeave(event: IgxDropEventArgs) {
        this.renderer.removeClass(event.owner.element.nativeElement,  "dragHovered");
    }
    findCurrentList(state: string): string {
        let currentList;
        switch(state) {
            case "ToDo": 
                currentList = "toDoList";
                break;
            case "InProgress":
                currentList = "inProgressList";
                break
            case "Done":
                currentList = "doneList";
                break;
        };
        return currentList;
    }
    dragStartHandler(event) {
        let currentList = this.findCurrentList(event.owner.element.nativeElement.dataset.state);
        this.dragObj = this[currentList].filter((elem) => { return elem.id === event.owner.element.nativeElement.id })[0];
        this[currentList] = this[currentList].filter((elem) => { return elem.id !== event.owner.element.nativeElement.id});
    };

    onItemEnter(event) {
        //console.log("Should swap items")
    };

    onItemDropped(event) {
        let currentList = this.findCurrentList(event.owner.element.nativeElement.dataset.state);
        this.dragObj.state = event.owner.element.nativeElement.dataset.state;
        this[currentList].push(this.dragObj);
        event.cancel = true;
    }
}
