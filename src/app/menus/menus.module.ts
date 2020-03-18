import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
    IgxButtonModule,
    IgxIconModule,
    IgxLayoutModule,
    IgxNavbarModule,
    IgxNavigationDrawerModule,
    IgxRadioModule,
    IgxRippleModule,
    IgxSwitchModule,
    IgxToggleModule
} from "igniteui-angular";
import { MenusRoutingModule } from "./menus-routing.module";
import { NavbarSample1Component } from "./navbar/navbar-sample-1/navbar-sample-1.component";
import { NavbarSample2Component } from "./navbar/navbar-sample-2/navbar-sample-2.component";
import { NavbarSample3Component } from "./navbar/navbar-sample-3/navbar-sample-3.component";
import { NavbarStyleComponent } from "./navbar/navbar-style/navbar-style.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { NavDrawerMiniComponent } from "./navdrawer/nav-drawer-mini/nav-drawer-mini.component";
import { NavDrawerPinComponent } from "./navdrawer/nav-drawer-pin/nav-drawer-pin.component";
import { NavDrawerSimpleComponent } from "./navdrawer/nav-drawer-simple/nav-drawer-simple.component";
import { NavDrawerStyledComponent } from "./navdrawer/nav-drawer-styled/nav-drawer-styled.component";

@NgModule({
    declarations: [
        NavDrawerMiniComponent,
        NavDrawerPinComponent,
        NavDrawerSimpleComponent,
        NavDrawerStyledComponent,
        NavbarComponent,
        NavbarSample1Component,
        NavbarSample2Component,
        NavbarSample3Component,
        NavbarStyleComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MenusRoutingModule,
        IgxButtonModule,
        IgxIconModule,
        IgxLayoutModule,
        IgxNavigationDrawerModule,
        IgxRadioModule,
        IgxRippleModule,
        IgxSwitchModule,
        IgxToggleModule,
        IgxNavbarModule
    ]
})
export class MenusModule { }
