/* tslint:disable:object-literal-sort-keys */
import { Router, RouterModule, Routes } from "@angular/router";
import { IgxAvatarModule, IgxBottomNavModule, IgxButtonModule, IgxGridModule,
    IgxIconModule, IgxListModule, IgxRippleModule, IgxSelectModule } from "igniteui-angular";
import { TabbarSample1Component } from "../../src/app/layouts/tabbar/tabbar-sample-1/tabbar-sample-1.component";
import { TabbarSample2Component } from "../../src/app/layouts/tabbar/tabbar-sample-2/tabbar-sample-2.component";
import {
    BottomNavRoutingView1Component,
    BottomNavRoutingView2Component,
    BottomNavRoutingView3Component,
    TabbarSample3Component } from "../../src/app/layouts/tabbar/tabbar-sample-3/tabbar-sample-3.component";
import { TabbarStyleComponent } from "../../src/app/layouts/tabbar/tabbar-style/tabbar-style.component";
import { TabbarComponent } from "../../src/app/layouts/tabbar/tabbar.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class TabBarConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // tabbar sample
        configs.push(new Config({
            component: TabbarComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxAvatarModule, IgxButtonModule, IgxIconModule,
                    IgxRippleModule, IgxListModule, IgxBottomNavModule, "Routes",
                    Router, RouterModule, TabbarComponent],
                ngDeclarations: [TabbarComponent],
                ngImports: [ "RouterModule.forRoot(Routes = [\{component: TabbarComponent, path: 'tabbar'}])",
                    IgxAvatarModule, IgxButtonModule, IgxIconModule,
                    IgxRippleModule, IgxListModule, IgxBottomNavModule]
            }),
            shortenComponentPathBy: "/layouts/"
        }));

        // tabbar sample 1
        configs.push(new Config({
            component: TabbarSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxAvatarModule, IgxIconModule, IgxListModule,
                    IgxBottomNavModule, Router, RouterModule, TabbarSample1Component],
                ngDeclarations: [TabbarSample1Component],
                ngImports: [RouterModule, IgxAvatarModule, IgxIconModule,
                    IgxListModule, IgxBottomNavModule]
            }),
            shortenComponentPathBy: "/layouts/tabbar/"
        }));

        // tabbar sample 2
        configs.push(new Config({
            component: TabbarSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxAvatarModule, IgxIconModule, IgxListModule,
                    IgxBottomNavModule, Router, RouterModule, TabbarSample2Component],
                ngDeclarations: [TabbarSample2Component],
                ngImports: [RouterModule, IgxAvatarModule, IgxIconModule,
                    IgxListModule, IgxBottomNavModule]
            }),
            shortenComponentPathBy: "/layouts/tabbar/"
        }));

        // tabbar sample 3
        configs.push(new Config({
            component: TabbarSample3Component,
            appModuleConfig: new AppModuleConfig({
                imports: [
                    Router, RouterModule, TabbarSample3Component, IgxBottomNavModule, IgxGridModule,
                    IgxSelectModule, BottomNavRoutingView1Component, BottomNavRoutingView2Component,
                    BottomNavRoutingView3Component
                ],
                ngDeclarations: [
                    TabbarSample3Component, BottomNavRoutingView1Component, BottomNavRoutingView2Component,
                    BottomNavRoutingView3Component
                ],
                ngImports: [
                    IgxBottomNavModule, IgxGridModule, IgxSelectModule,
                    `
                    RouterModule.forRoot([
                        { path: 'arrivals', component: BottomNavRoutingView1Component },
                        { path: 'departures', component: BottomNavRoutingView2Component },
                        { path: 'canceled', component: BottomNavRoutingView3Component }
                    ])
                    `
                ]
            }),
            shortenComponentPathBy: "/layouts/tabbar/"
        }));

        // tabbar styling sample
        configs.push(new Config({
            component: TabbarStyleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxAvatarModule, IgxButtonModule, IgxIconModule,
                    IgxRippleModule, IgxListModule, IgxBottomNavModule, "Routes",
                    Router, RouterModule, TabbarStyleComponent],
                ngDeclarations: [TabbarStyleComponent],
                ngImports: [ "RouterModule.forRoot(Routes = [\{component: TabbarStyleComponent, path: 'tabbar-style'}])",
                    IgxAvatarModule, IgxButtonModule, IgxIconModule,
                    IgxRippleModule, IgxListModule, IgxBottomNavModule]
            }),
            shortenComponentPathBy: "/layouts/"
        }));        

        return configs;
    }
}
