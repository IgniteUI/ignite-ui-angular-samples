import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule, HammerModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
    IgxAutocompleteModule, IgxButtonModule, IgxDropDownModule,
    IgxIconModule, IgxInputGroupModule, IgxLayoutModule, IgxNavbarModule, IgxNavigationDrawerModule, IgxRippleModule
} from "igniteui-angular";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { DocsLayoutComponent } from "./index/docs-layout.component";
import { IndexComponent } from "./index/index.component";
import { ThemingWidgetModule } from "@infragistics/igniteui-theming-widget";

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        HomeComponent,
        DocsLayoutComponent,
        IndexComponent
    ],
    imports: [
        AppRoutingModule,
        IgxAutocompleteModule,
        IgxRippleModule,
        IgxNavbarModule,
        IgxNavigationDrawerModule,
        IgxIconModule,
        IgxLayoutModule,
        IgxInputGroupModule,
        BrowserModule,
        BrowserAnimationsModule,
        IgxButtonModule,
        FormsModule,
        HttpClientModule,
        HammerModule,
        ThemingWidgetModule
    ],
    providers: []
})
export class AppModule { }
