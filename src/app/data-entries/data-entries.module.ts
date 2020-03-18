import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
    IgxAutocompleteModule, IgxButtonGroupModule, IgxButtonModule, IgxCheckboxModule, IgxComboModule,
    IgxDatePickerModule, IgxDialogModule, IgxDropDownModule, IgxForOfModule, IgxIconModule,
    IgxInputGroupModule, IgxNavbarModule, IgxProgressBarModule, IgxRadioModule, IgxRippleModule, IgxSelectModule,
    IgxSwitchModule, IgxTimePickerModule, IgxToastModule, IgxToggleModule
} from "igniteui-angular";
import { AutocompleteRemote } from "./autocomplete/autocomplete-remote/autocomplete-remote.component";
import { AutocompleteBasic, AutocompletePipeStartsWith } from "./autocomplete/autocomplete/autocomplete.component";
import {
    AutocompleteGroupPipeContains,
    AutocompletePipeContains,
    MovieComponent
} from "./autocomplete/movie/movie.component";
import { ButtonGroupSample1Component } from "./buttonGroup/button-group-sample-1/button-group-sample-1.component";
import { ButtonGroupSample2Component } from "./buttonGroup/button-group-sample-2/button-group-sample-2.component";
import { ButtonGroupSample3Component } from "./buttonGroup/button-group-sample-3/button-group-sample-3.component";
import { ButtonGroupSampleComponent } from "./buttonGroup/button-group-sample-4/button-group-sample.component";
import { ButtonGroupSample5Component } from "./buttonGroup/button-group-sample-5/button-group-sample-5.component";
import { ButtonGroupStyleComponent } from "./buttonGroup/button-group-style/button-group-style.component";
import { ButtonsDisplayDensityComponent } from "./buttons/buttons-display-density/buttons-display-density.component";
import { ButtonsRoundnessComponent } from "./buttons/buttons-roundness-sample/buttons-roundness-sample";
import { ButtonsSample1Component } from "./buttons/buttons-sample-1/buttons-sample-1.component";
import { ButtonsSample2Component } from "./buttons/buttons-sample-2/buttons-sample-2.component";
import { ButtonsSample3Component } from "./buttons/buttons-sample-3/buttons-sample-3.component";
import { ButtonsSample4Component } from "./buttons/buttons-sample-4/buttons-sample-4.component";
import { ButtonsSample5Component } from "./buttons/buttons-sample-5/buttons-sample-5.component";
import { ButtonsSample6Component } from "./buttons/buttons-sample-6/buttons-sample-6.component";
import { ButtonsSample7Component } from "./buttons/buttons-sample-7/buttons-sample-7.component";
import { ButtonsSample8Component } from "./buttons/buttons-sample-8/buttons-sample-8.component";
import { ButtonsStyleComponent } from "./buttons/buttons-style/buttons-style.component";
import { CheckboxSample1Component } from "./checkbox/checkbox-sample-1/checkbox-sample-1.component";
import { CheckboxSample2Component } from "./checkbox/checkbox-sample-2/checkbox-sample-2.component";
import { CheckboxStylingComponent } from "./checkbox/checkbox-styling/checkbox-styling.component";
import { DataEntriesRoutingModule } from "./data-entries-routing.module";
import { DropDownRemoteComponent } from "./dropdown/drop-down-remote-virtual/drop-down-remote.component";
import { DropDownVirtualComponent } from "./dropdown/drop-down-virtual/drop-down-virtual.component";
import { DropdownMenuComponent } from "./dropdown/dropdown-menu/dropdown-menu.component";
import { DropDownSample1Component } from "./dropdown/dropdown-sample-1/dropdown-sample-1.component";
import { DropDownSample2Component } from "./dropdown/dropdown-sample-2/dropdown-sample-2.component";
import { DropDownSample3Component } from "./dropdown/dropdown-sample-3/dropdown-sample-3.component";
import { DropDownSample4Component } from "./dropdown/dropdown-sample-4/dropdown-sample-4.component";
import { DropDownSample5Component } from "./dropdown/dropdown-sample-5/dropdown-sample-5.component";
import { DropDownStylingComponent } from "./dropdown/dropdown-styling/dropdown-styling.component";
// import { InputGroupSample1Component } from "./input-group/input-group-sample-1/input-group-sample-1.component";
// import { InputGroupSample2Component } from "./input-group/input-group-sample-2/input-group-sample-2.component";
// import { InputGroupSample3Component } from "./input-group/input-group-sample-3/input-group-sample-3.component";
// import { InputGroupSample4Component } from "./input-group/input-group-sample-4/input-group-sample-4.component";
// import { InputGroupSample5Component } from "./input-group/input-group-sample-5/input-group-sample-5.component";
// import { InputGroupSample6Component } from "./input-group/input-group-sample-6/input-group-sample-6.component";
// import { InputGroupStyleComponent } from "./input-group/input-group-styling/input-group-styling.component";
// import { ReactiveFormsSampleComponent } from "./input-group/reactive-forms/reactive-forms.component";
import { RadioGroupSampleComponent } from "./radio/radio-group-sample/radio-group-sample.component";
import { RadioSample1Component } from "./radio/radio-sample-1/radio-sample-1.component";
import { RadioSample2Component } from "./radio/radio-sample-2/radio-sample-2.component";
import { SelectFormComponent } from "./select/select-form/select-form.component";
import { SelectHeaderFooterComponent } from "./select/select-header-footer/select-header-footer.component";
import { SelectInputDirectivesComponent } from "./select/select-input-directives/select-input-directives";
import { SelectSample1Component } from "./select/select-sample-1/select-sample-1.component";
import { SelectSample2Component } from "./select/select-sample-2/select-sample-2.component";
import { SelectSample3Component } from "./select/select-sample-3/select-sample-3.component";
import { SelectSample4Component } from "./select/select-sample-4/select-sample-4.component";
import { SelectStylingComponent } from "./select/select-styling/select-styling.component";
import { SwitchSample1Component } from "./switch/switch-sample-1/switch-sample-1.component";
import { SwitchSample2Component } from "./switch/switch-sample-2/switch-sample-2.component";

@NgModule({
    declarations: [
        AutocompleteBasic,
        AutocompleteRemote,
        AutocompletePipeContains,
        AutocompletePipeStartsWith,
        AutocompleteGroupPipeContains,
        ButtonGroupSample1Component,
        ButtonGroupSample2Component,
        ButtonGroupSample3Component,
        ButtonGroupSample5Component,
        ButtonsRoundnessComponent,
        ButtonsSample1Component,
        ButtonsSample2Component,
        ButtonsSample3Component,
        ButtonsSample4Component,
        ButtonsSample5Component,
        ButtonsSample6Component,
        ButtonsSample7Component,
        ButtonsSample8Component,
        CheckboxSample1Component,
        CheckboxStylingComponent,
        CheckboxSample2Component,
        DropDownRemoteComponent,
        DropDownVirtualComponent,
        DropdownMenuComponent,
        DropDownSample1Component,
        DropDownSample2Component,
        DropDownSample3Component,
        DropDownSample4Component,
        DropDownSample5Component,
        DropDownStylingComponent,
        // InputGroupSample1Component,
        // InputGroupSample2Component,
        // InputGroupSample3Component,
        // InputGroupSample4Component,
        // InputGroupSample5Component,
        // InputGroupSample6Component,
        // InputGroupStyleComponent,
        MovieComponent,
        // ReactiveFormsSampleComponent,
        RadioGroupSampleComponent,
        RadioSample1Component,
        RadioSample2Component,
        SwitchSample1Component,
        SwitchSample2Component,
        SelectSample1Component,
        SelectSample2Component,
        SelectSample3Component,
        SelectFormComponent,
        SelectSample4Component,
        SelectStylingComponent,
        SelectInputDirectivesComponent,
        SelectHeaderFooterComponent,
        ButtonGroupSampleComponent,
        ButtonsDisplayDensityComponent,
        ButtonsStyleComponent,
        ButtonGroupStyleComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        DataEntriesRoutingModule,
        IgxAutocompleteModule,
        IgxButtonGroupModule,
        IgxButtonModule,
        IgxDialogModule,
        IgxIconModule,
        IgxRippleModule,
        IgxCheckboxModule,
        IgxDropDownModule,
        IgxInputGroupModule,
        IgxNavbarModule,
        IgxToggleModule,
        IgxComboModule,
        IgxDatePickerModule,
        IgxTimePickerModule,
        IgxToastModule,
        IgxRadioModule,
        IgxSelectModule,
        IgxSwitchModule,
        IgxProgressBarModule,
        IgxForOfModule
    ]
})
export class DataEntriesModule { }
