import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
    IgxAutocompleteModule, IgxButtonModule, IgxCalendarModule, IgxCardModule, IgxDatePickerModule, IgxDialogModule,
    IgxDropDownModule, IgxIconModule, IgxInputGroupModule, IgxSelectModule,
    IgxSnackbarModule, IgxSwitchModule, IgxTimePickerModule, IgxToastModule, IgxToggleModule
} from "igniteui-angular";
import { CalendarSample1Component } from "./calendar/calendar-sample-1/calendar-sample-1.component";
import { CalendarSample2Component } from "./calendar/calendar-sample-2/calendar-sample-2.component";
import { CalendarSample3Component } from "./calendar/calendar-sample-3/calendar-sample-3.component";
import { CalendarSample4Component } from "./calendar/calendar-sample-4/calendar-sample-4.component";
import { CalendarSample5Component } from "./calendar/calendar-sample-5/calendar-sample-5.component";
import { CalendarSample6Component } from "./calendar/calendar-sample-6/calendar-sample-6.component";
import { CalendarSample7Component } from "./calendar/calendar-sample-7/calendar-sample-7.component";
import { CalendarStylingSample } from "./calendar/calendar-styling-sample/calendar-styling-sample.component";
import { CalendarViewsComponent } from "./calendar/calendar-views/calendar-views.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { CalendarMultiViewComponent } from "./calendar/multiview/multiview.component";
import { DatepickerDropdownComponent } from "./datepicker/datepicker-dropdown/datepicker-dropdown.component";
import { DatepickerSample1Component } from "./datepicker/datepicker-sample-1/datepicker-sample-1.component";
import { DatepickerSample2Component } from "./datepicker/datepicker-sample-2/datepicker-sample-2.component";
import { DatepickerSample3Component } from "./datepicker/datepicker-sample-3/datepicker-sample-3.component";
import { DatepickerSample4Component } from "./datepicker/datepicker-sample-4/datepicker-sample-4.component";
import { DatepickerSample5Component } from "./datepicker/datepicker-sample-5/datepicker-sample-5.component";
import { DatepickerSample6Component } from "./datepicker/datepicker-sample-6/datepicker-sample-6.component";
import { DatepickerSample7Component } from "./datepicker/datepicker-sample-7/datepicker-sample-7.component";
import { DatepickerSample8Component } from "./datepicker/datepicker-sample-8/datepicker-sample-8.component";
import { AutocompletePipeStartsWith, DatepickerSample9Component, PipeWithoutTownFrom
    } from "./datepicker/datepicker-sample-9/datepicker-sample-9.component";
import { DateТimeЕditorSample1Component } from "./datetimeeditor/datetimeeditor-sample-1/datetimeeditor-sample-1.component";
// import { DateTimeEditorSample2Component } from "./datetimeeditor/datetimeeditor-sample-2/datetimeeditor-sample-2.component";
import { MonthpickerSample1Component } from "./monthpicker/monthpicker-sample-1/monthpicker-sample-1.component";
import { MonthpickerSample2Component } from "./monthpicker/monthpicker-sample-2/monthpicker-sample-2.component";
import { MonthpickerSample3Component } from "./monthpicker/monthpicker-sample-3/monthpicker-sample-3.component";
import { SchedulingRoutingModule } from "./scheduling-routing.module";
import { TimepickerDropdownComponent } from "./timepicker/timepicker-dropdown/timepicker-dropdown.component";
import { TimePickerSample1Component } from "./timepicker/timepicker-sample-1/timepicker-sample-1.component";
import { TimePickerSample2Component } from "./timepicker/timepicker-sample-2/timepicker-sample-2.component";
import { TimePickerSample3Component } from "./timepicker/timepicker-sample-3/timepicker-sample-3.component";
import { TimePickerSample4Component } from "./timepicker/timepicker-sample-4/timepicker-sample-4.component";
import { TimePickerSample5Component } from "./timepicker/timepicker-sample-5/timepicker-sample-5.component";
import { TimePickerSample6Component } from "./timepicker/timepicker-sample-6/timepicker-sample-6.component";
import { TimePickerSample7Component } from "./timepicker/timepicker-sample-7/timepicker-sample-7.component";
import { TimePickerSample8Component } from "./timepicker/timepicker-sample-8/timepicker-sample-8.component";

@NgModule({
    declarations: [
        AutocompletePipeStartsWith,
        CalendarComponent,
        CalendarSample1Component,
        CalendarSample2Component,
        CalendarSample3Component,
        CalendarSample4Component,
        CalendarSample5Component,
        CalendarSample6Component,
        CalendarSample7Component,
        CalendarMultiViewComponent,
        CalendarStylingSample,
        DatepickerSample1Component,
        DatepickerSample2Component,
        DatepickerSample3Component,
        DatepickerSample4Component,
        DatepickerSample5Component,
        DatepickerSample6Component,
        DatepickerSample7Component,
        DatepickerSample8Component,
        DatepickerSample9Component,
        DateТimeЕditorSample1Component,
        DatepickerDropdownComponent,
        TimePickerSample1Component,
        TimePickerSample2Component,
        TimePickerSample3Component,
        TimePickerSample4Component,
        TimePickerSample5Component,
        TimePickerSample6Component,
        TimePickerSample7Component,
        TimePickerSample8Component,
        DatepickerDropdownComponent,
        TimepickerDropdownComponent,
        CalendarViewsComponent,
        MonthpickerSample1Component,
        MonthpickerSample2Component,
        MonthpickerSample3Component,
        PipeWithoutTownFrom
    ],
    imports: [
        CommonModule,
        FormsModule,
        SchedulingRoutingModule,
        IgxAutocompleteModule,
        IgxCalendarModule,
        IgxCardModule,
        IgxDatePickerModule,
        IgxDialogModule,
        IgxIconModule,
        IgxInputGroupModule,
        IgxSnackbarModule,
        IgxTimePickerModule,
        IgxToastModule,
        IgxSwitchModule,
        IgxButtonModule,
        IgxSelectModule,
        IgxDropDownModule,
        IgxToggleModule
    ]
})
export class SchedulingModule { }
