import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CalendarSample1Component } from "./calendar/calendar-sample-1/calendar-sample-1.component";
import { CalendarSample2Component } from "./calendar/calendar-sample-2/calendar-sample-2.component";
import { CalendarSample3Component } from "./calendar/calendar-sample-3/calendar-sample-3.component";
import { CalendarSample4Component } from "./calendar/calendar-sample-4/calendar-sample-4.component";
import { CalendarSample5Component } from "./calendar/calendar-sample-5/calendar-sample-5.component";
import { CalendarSample6Component } from "./calendar/calendar-sample-6/calendar-sample-6.component";
import { CalendarSample7Component } from "./calendar/calendar-sample-7/calendar-sample-7.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { DatepickerSample1Component } from "./datepicker/datepicker-sample-1/datepicker-sample-1.component";
import { DatepickerSample2Component } from "./datepicker/datepicker-sample-2/datepicker-sample-2.component";
import { DatepickerSample3Component } from "./datepicker/datepicker-sample-3/datepicker-sample-3.component";
import { DatepickerSample4Component } from "./datepicker/datepicker-sample-4/datepicker-sample-4.component";
import { DatepickerSample5Component } from "./datepicker/datepicker-sample-5/datepicker-sample-5.component";
import { DatepickerSample6Component } from "./datepicker/datepicker-sample-6/datepicker-sample-6.component";
import { schedulingRoutesData } from "./scheduling-routes-data";
import { TimepickerDropdownComponent } from "./timepicker/timepicker-dropdown/timepicker-dropdown.component";
import { TimePickerSample1Component } from "./timepicker/timepicker-sample-1/timepicker-sample-1.component";
import { TimePickerSample2Component } from "./timepicker/timepicker-sample-2/timepicker-sample-2.component";
import { TimePickerSample3Component } from "./timepicker/timepicker-sample-3/timepicker-sample-3.component";
import { TimePickerSample4Component } from "./timepicker/timepicker-sample-4/timepicker-sample-4.component";
import { TimePickerSample5Component } from "./timepicker/timepicker-sample-5/timepicker-sample-5.component";

export const schedulingRoutes: Routes = [
    {
        component: CalendarComponent,
        path: "calendar"
    },
    {
        component: CalendarSample1Component,
        data: schedulingRoutesData["calendar-sample-1"],
        path: "calendar-sample-1"
    },
    {
        component: CalendarSample2Component,
        data: schedulingRoutesData["calendar-sample-2"],
        path: "calendar-sample-2"
    },
    {
        component: CalendarSample3Component,
        data: schedulingRoutesData["calendar-sample-3"],
        path: "calendar-sample-3"
    },
    {
        component: CalendarSample4Component,
        data: schedulingRoutesData["calendar-sample-4"],
        path: "calendar-sample-4"
    },
    {
        component: CalendarSample5Component,
        data: schedulingRoutesData["calendar-sample-5"],
        path: "calendar-sample-5"
    },
    {
        component: CalendarSample6Component,
        data: schedulingRoutesData["calendar-sample-6"],
        path: "calendar-sample-6"
    },
    {
        component: CalendarSample7Component,
        data: schedulingRoutesData["calendar-sample-7"],
        path: "calendar-sample-7"
    },
    {
        component: DatepickerSample1Component,
        data: schedulingRoutesData["datepicker-sample-1"],
        path: "datepicker-sample-1"
    },
    {
        component: DatepickerSample2Component,
        data: schedulingRoutesData["datepicker-sample-2"],
        path: "datepicker-sample-2"
    },
    {
        component: DatepickerSample3Component,
        data: schedulingRoutesData["datepicker-sample-3"],
        path: "datepicker-sample-3"
    },
    {
        component: DatepickerSample4Component,
        data: schedulingRoutesData["datepicker-sample-4"],
        path: "datepicker-sample-4"
    },
    {
        component: DatepickerSample5Component,
        data: schedulingRoutesData["datepicker-sample-5"],
        path: "datepicker-sample-5"
    },
    {
        component: DatepickerSample6Component,
        data: schedulingRoutesData["datepicker-sample-6"],
        path: "datepicker-sample-6"
    },
    {
        component: TimePickerSample1Component,
        data: schedulingRoutesData["timepicker-sample-1"],
        path: "timepicker-sample-1"
    },
    {
        component: TimePickerSample2Component,
        data: schedulingRoutesData["timepicker-sample-2"],
        path: "timepicker-sample-2"
    },
    {
        component: TimePickerSample3Component,
        data: schedulingRoutesData["timepicker-sample-3"],
        path: "timepicker-sample-3"
    },
    {
        component: TimePickerSample4Component,
        data: schedulingRoutesData["timepicker-sample-4"],
        path: "timepicker-sample-4"
    },
    {
        component: TimePickerSample5Component,
        data: schedulingRoutesData["timepicker-sample-5"],
        path: "timepicker-sample-5"
    },
    {
        component: TimepickerDropdownComponent,
        data: schedulingRoutesData["timepicker-dropdown"],
        path: "timepicker-dropdown"
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(schedulingRoutes)
    ]
})
export class SchedulingRoutingModule { }
