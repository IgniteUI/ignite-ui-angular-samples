import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AutocompleteRemote } from "./autocomplete/autocomplete-remote/autocomplete-remote.component";
import { AutocompleteBasic } from "./autocomplete/autocomplete/autocomplete.component";
import { MovieComponent } from "./autocomplete/movie/movie.component";
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
import { dataEntriesRoutesData } from "./data-entries-routes-data";
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

export const dataEntriesRoutes: Routes = [
    {
        component: AutocompleteBasic,
        data: dataEntriesRoutesData.autocomplete,
        path: "autocomplete"
    },
    {
        component: AutocompleteRemote,
        data: dataEntriesRoutesData["autocomplete-remote"],
        path: "autocomplete-remote"
    },
    {
        component: MovieComponent,
        data: dataEntriesRoutesData.movie,
        path: "movie"
    },
    {
        component: ButtonsDisplayDensityComponent,
        data: dataEntriesRoutesData["buttons-display-density"],
        path: "buttons-display-density"
    },
    {
        component: ButtonGroupSample1Component,
        data: dataEntriesRoutesData["button-group-sample-1"],
        path: "button-group-sample-1"
    },
    {
        component: ButtonGroupSample2Component,
        data: dataEntriesRoutesData["button-group-sample-2"],
        path: "button-group-sample-2"
    },
    {
        component: ButtonGroupSample3Component,
        data: dataEntriesRoutesData["button-group-sample-3"],
        path: "button-group-sample-3"
    },
    {
        component: ButtonGroupSampleComponent,
        data: dataEntriesRoutesData["button-group-sample-4"],
        path: "button-group-sample-4"
    },
    {
        component: ButtonGroupSample5Component,
        data: dataEntriesRoutesData["button-group-sample-5"],
        path: "button-group-sample-5"
    },
    {
        component: ButtonGroupStyleComponent,
        data: dataEntriesRoutesData["button-group-style"],
        path: "button-group-style"
    },
    {
        component: ButtonsSample1Component,
        data: dataEntriesRoutesData["buttons-sample-1"],
        path: "buttons-sample-1"
    },
    {
        component: ButtonsSample2Component,
        data: dataEntriesRoutesData["buttons-sample-2"],
        path: "buttons-sample-2"
    },
    {
        component: ButtonsSample3Component,
        data: dataEntriesRoutesData["buttons-sample-3"],
        path: "buttons-sample-3"
    },
    {
        component: ButtonsSample4Component,
        data: dataEntriesRoutesData["buttons-sample-4"],
        path: "buttons-sample-4"
    },
    {
        component: ButtonsSample5Component,
        data: dataEntriesRoutesData["buttons-sample-5"],
        path: "buttons-sample-5"
    },
    {
        component: ButtonsSample6Component,
        data: dataEntriesRoutesData["buttons-sample-6"],
        path: "buttons-sample-6"
    },
    {
        component: ButtonsSample7Component,
        data: dataEntriesRoutesData["buttons-sample-7"],
        path: "buttons-sample-7"
    },
    {
        component: ButtonsSample8Component,
        data: dataEntriesRoutesData["buttons-sample-8"],
        path: "buttons-sample-8"
    },
    {
        component: ButtonsRoundnessComponent,
        data: dataEntriesRoutesData["buttons-roundness-sample"],
        path: "buttons-roundness-sample"
    },
    {
        component: ButtonsStyleComponent,
        data: dataEntriesRoutesData["buttons-style"],
        path: "buttons-style"
    },
    {
        component: CheckboxSample1Component,
        data: dataEntriesRoutesData["checkbox-sample-1"],
        path: "checkbox-sample-1"
    },
    {
        component: CheckboxSample2Component,
        data: dataEntriesRoutesData["checkbox-sample-2"],
        path: "checkbox-sample-2"
    },
    {
        component: CheckboxStylingComponent,
        data: dataEntriesRoutesData["checkbox-styling"],
        path: "checkbox-styling"
    },
    {
        component: DropdownMenuComponent,
        data: dataEntriesRoutesData["dropdown-menu"],
        path: "dropdown-menu"
    },
    {
        component: DropDownSample1Component,
        data: dataEntriesRoutesData["dropdown-sample-1"],
        path: "dropdown-sample-1"
    },
    {
        component: DropDownSample2Component,
        data: dataEntriesRoutesData["dropdown-sample-2"],
        path: "dropdown-sample-2"
    },
    {
        component: DropDownSample3Component,
        data: dataEntriesRoutesData["dropdown-sample-3"],
        path: "dropdown-sample-3"
    },
    {
        component: DropDownSample5Component,
        data: dataEntriesRoutesData["dropdown-sample-5"],
        path: "dropdown-sample-5"
    },
    {
        component: DropDownStylingComponent,
        data: dataEntriesRoutesData["dropdown-styling"],
        path: "dropdown-styling"
    },
    {
        component: DropDownSample4Component,
        data: dataEntriesRoutesData["dropdown-sample-4"],
        path: "dropdown-sample-4"
    },
    {
        component: DropDownVirtualComponent,
        data: dataEntriesRoutesData["dropdown-virtual"],
        path: "dropdown-virtual"
    },
    {
        component: DropDownRemoteComponent,
        data: dataEntriesRoutesData["dropdown-remote"],
        path: "dropdown-remote"
    },
    // {
    //     component: InputGroupSample1Component,
    //     data: dataEntriesRoutesData["input-group-sample-1"],
    //     path: "input-group-sample-1"
    // },
    // {
    //     component: InputGroupSample2Component,
    //     data: dataEntriesRoutesData["input-group-sample-2"],
    //     path: "input-group-sample-2"
    // },
    // {
    //     component: InputGroupSample3Component,
    //     data: dataEntriesRoutesData["input-group-sample-3"],
    //     path: "input-group-sample-3"
    // },
    // {
    //     component: InputGroupSample4Component,
    //     data: dataEntriesRoutesData["input-group-sample-4"],
    //     path: "input-group-sample-4"
    // },
    // {
    //     component: InputGroupSample5Component,
    //     data: dataEntriesRoutesData["input-group-sample-5"],
    //     path: "input-group-sample-5"
    // },
    // {
    //     component: InputGroupSample6Component,
    //     data: dataEntriesRoutesData["input-group-sample-6"],
    //     path: "input-group-sample-6"
    // },
    // {
    //     component: InputGroupStyleComponent,
    //     data: dataEntriesRoutesData["input-group-style"],
    //     path: "input-group-style"
    // },
    // {
    //     component: ReactiveFormsSampleComponent,
    //     data: dataEntriesRoutesData["reactive-forms"],
    //     path: "reactive-forms"
    // },
    {
        component: RadioSample1Component,
        data: dataEntriesRoutesData["radio-sample-1"],
        path: "radio-sample-1"
    },
    {
        component: RadioSample2Component,
        data: dataEntriesRoutesData["radio-sample-2"],
        path: "radio-sample-2"
    },
    {
        component: RadioGroupSampleComponent,
        data: dataEntriesRoutesData["radio-group-sample"],
        path: "radio-group-sample"
    },
    {
        component: SwitchSample1Component,
        data: dataEntriesRoutesData["switch-sample-1"],
        path: "switch-sample-1"
    },
    {
        component: SwitchSample2Component,
        data: dataEntriesRoutesData["switch-sample-2"],
        path: "switch-sample-2"
    },
    {
        component: SelectSample1Component,
        data: dataEntriesRoutesData["select-sample-1"],
        path: "select-sample-1"
    },
    {
        component: SelectSample2Component,
        data: dataEntriesRoutesData["select-sample-2"],
        path: "select-sample-2"
    },
    {
        component: SelectSample3Component,
        data: dataEntriesRoutesData["select-sample-3"],
        path: "select-sample-3"
    },
    {
        component: SelectFormComponent,
        data: dataEntriesRoutesData["select-form"],
        path: "select-form"
    },
    {
        component: SelectSample4Component,
        data: dataEntriesRoutesData["select-sample-4"],
        path: "select-sample-4"
    },
    {
        component: SelectStylingComponent,
        data: dataEntriesRoutesData["select-styling"],
        path: "select-styling"
    },
    {
        component: SelectInputDirectivesComponent,
        data: dataEntriesRoutesData["select-input-directives"],
        path: "select-input-directives"
    },
    {
        component: SelectHeaderFooterComponent,
        data: dataEntriesRoutesData["select-header-footer"],
        path: "select-header-footer"
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(dataEntriesRoutes)
    ]
})
export class DataEntriesRoutingModule { }
