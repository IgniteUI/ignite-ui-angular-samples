import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IgxButtonGroupModule, IgxDialogModule, IgxGridModule, IgxInputGroupModule,
    IgxMaskModule, IgxSwitchModule} from "igniteui-angular";
import { TasksDataService } from "../services/tasks.service";
import { TaskPlannerComponent } from "./task-planner/taskplanner.component";
import { GridWithTransactionsComponent } from "./task-planner/transaction.component";
import { TaskPlannerRoutingModule } from "./taskplanner-routing.module";

@NgModule({
    declarations: [
        TaskPlannerComponent,
        GridWithTransactionsComponent
    ],
    imports: [
        CommonModule,
        IgxGridModule,
        FormsModule,
        IgxMaskModule,
        IgxDialogModule,
        IgxInputGroupModule,
        IgxButtonGroupModule,
        IgxSwitchModule,
        TaskPlannerRoutingModule
    ],
    providers: [TasksDataService]
})
export class TaskPlannerModule {}
