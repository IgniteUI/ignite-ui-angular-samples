// tslint:disable:no-string-literal
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AvatarSample1Component } from "./avatar/avatar-sample-1/avatar-sample-1.component";
import { AvatarSample2Component } from "./avatar/avatar-sample-2/avatar-sample-2.component";
import { AvatarSample3Component } from "./avatar/avatar-sample-3/avatar-sample-3.component";
import { CardSample1Component } from "./card/card-sample-1/card-sample-1.component";
import { CardSample2Component } from "./card/card-sample-2/card-sample-2.component";
import { CardSample3Component } from "./card/card-sample-3/card-sample-3.component";
import { CardSample4Component } from "./card/card-sample-4/card-sample-4.component";
import { CardStylingSampleComponent } from "./card/card-styling-sample/card-styling-sample.component";
import { CardComponent } from "./card/card.component";
import { CarouselAnimationsSampleComponent
    } from "./carousel/carousel-animations-sample/carousel-animations-sample.component";
import { CarouselDetailsViewComponent } from "./carousel/carousel-details/carousel-details.component";
import { CarouselNoNavigationSampleComponent
    } from "./carousel/carousel-no-navigation-sample/carousel-no-navigation-sample.component";
import { CarouselStylingSampleComponent
} from "./carousel/carousel-styling-sample/carousel-styling-sample.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { DividerDashedComponent } from "./divider/dashed/divider-dashed.component";
import { DividerDefaultComponent } from "./divider/default/divider-default.component";
import { DividerInsetComponent } from "./divider/inset/divider-inset.component";
import { DividerVerticalComponent } from "./divider/vertical/divider-vertical.component";
import { ExpansionPanelSample1Component } from "./expansion-panel/expansion-sample-1/expansion-sample-1.component";
import { ExpansionPanelSample2Component } from "./expansion-panel/expansion-sample-2/expansion-sample-2.component";
import { ExpansionPanelSample3Component } from "./expansion-panel/expansion-sample-3/expansion-sample-3.component";
import { ExpansionPanelSample4Component } from "./expansion-panel/expansion-sample-4/expansion-sample-4.component";
import { ExpansionPanelSample5Component } from "./expansion-panel/expansion-sample-5/expansion-sample-5.component";
import { ExpansionPanelSample6Component } from "./expansion-panel/expansion-sample-6/expansion-sample-6.component";
import { ExpansionPanelSample7Component } from "./expansion-panel/expansion-sample-7/expansion-sample-7.component";
import { ExpansionPanelStylingComponent } from "./expansion-panel/expansion-styling/expansion-styling.component";
import { LayoutComponent } from "./layout/layout.component";
import { layoutsRoutesData } from "./layouts-routes-data";
import { TabbarSample1Component } from "./tabbar/tabbar-sample-1/tabbar-sample-1.component";
import { TabbarSample2Component } from "./tabbar/tabbar-sample-2/tabbar-sample-2.component";
import { BottomNavRoutingView1Component,
         BottomNavRoutingView2Component,
         BottomNavRoutingView3Component,
         TabbarSample3Component } from "./tabbar/tabbar-sample-3/tabbar-sample-3.component";
import { TabbarStyleComponent } from "./tabbar/tabbar-style/tabbar-style.component";
import { TabbarComponent } from "./tabbar/tabbar.component";
import { TabsSample1Component } from "./tabs/tabs-sample-1/tabs-sample-1.component";
import { TabsSample2Component } from "./tabs/tabs-sample-2/tabs-sample-2.component";
import { TabsSample3Component } from "./tabs/tabs-sample-3/tabs-sample-3.component";
import { TabsSample4Component } from "./tabs/tabs-sample-4/components/tabs-sample-4.component";
import { TabsSample5Component } from "./tabs/tabs-sample-5/components/tabs-sample-5.component";
import { TabsRoutingView1Component,
         TabsRoutingView2Component,
         TabsRoutingView3Component,
         TabsSample6Component } from "./tabs/tabs-sample-6/tabs-sample-6.component";
import { TabsStyleComponent } from "./tabs/tabs-style/tabs-style.component";
import { CarouselBaseSampleComponent } from './carousel/carousel-base-sample/carousel-base-sample.component';

export const layoutsRoutes: Routes = [
    {
        component: AvatarSample1Component,
        data: layoutsRoutesData["avatar-sample-1"],
        path: "avatar-sample-1"
    },
    {
        component: AvatarSample2Component,
        data: layoutsRoutesData["avatar-sample-2"],
        path: "avatar-sample-2"
    },
    {
        component: AvatarSample3Component,
        data: layoutsRoutesData["avatar-sample-3"],
        path: "avatar-sample-3"
    },
    {
        component: CarouselNoNavigationSampleComponent,
        data: layoutsRoutesData["carousel-no-navigation-sample"],
        path: "carousel-no-navigation-sample"
    },
    {
        component: CarouselAnimationsSampleComponent,
        data: layoutsRoutesData["carousel-animations-sample"],
        path: "carousel-animations-sample"
    },
    {
        component: CarouselBaseSampleComponent,
        data: layoutsRoutesData["carousel-base-sample"],
        path: "carousel-base-sample"
    },
    {
        component: CarouselStylingSampleComponent,
        data: layoutsRoutesData["carousel-styling-sample"],
        path: "carousel-styling-sample"
    },
    {
        component: CarouselComponent,
        data: layoutsRoutesData["carousel"],
        path: "carousel"
    },
    {
        component: CarouselDetailsViewComponent,
        path: "details"
    },
    {
        component: DividerDefaultComponent,
        data: layoutsRoutesData["divider-sample-1"],
        path: "divider-sample-1"
    },
    {
        component: DividerVerticalComponent,
        data: layoutsRoutesData["divider-sample-2"],
        path: "divider-sample-2"
    },
    {
        component: DividerDashedComponent,
        data: layoutsRoutesData["divider-sample-3"],
        path: "divider-sample-3"
    },
    {
        component: DividerInsetComponent,
        data: layoutsRoutesData["divider-sample-4"],
        path: "divider-sample-4"
    },
    {
        component: ExpansionPanelSample1Component,
        data: layoutsRoutesData["expansion-sample-1"],
        path: "expansion-sample-1"
    },
    {
        component: ExpansionPanelSample2Component,
        data: layoutsRoutesData["expansion-sample-2"],
        path: "expansion-sample-2"
    },
    {
        component: ExpansionPanelSample3Component,
        data: layoutsRoutesData["expansion-sample-3"],
        path: "expansion-sample-3"
    },
    {
        component: ExpansionPanelSample4Component,
        data: layoutsRoutesData["expansion-sample-4"],
        path: "expansion-sample-4"
    },
    {
        component: ExpansionPanelSample5Component,
        data: layoutsRoutesData["expansion-sample-5"],
        path: "expansion-sample-5"
    },
    {
        component: ExpansionPanelSample6Component,
        data: layoutsRoutesData["expansion-sample-6"],
        path: "expansion-sample-6"
    },
    {
        component: ExpansionPanelSample7Component,
        data: layoutsRoutesData["expansion-sample-7"],
        path: "expansion-sample-7"
    },
    {
        component: ExpansionPanelStylingComponent,
        data: layoutsRoutesData["expansion-styling"],
        path: "expansion-styling"
    },
    {
        component: LayoutComponent,
        data: layoutsRoutesData["layout"],
        path: "layout"
    },
    {
        component: TabbarComponent,
        data: layoutsRoutesData["tabbar"],
        path: "tabbar"
    },
    {
        component: TabbarSample1Component,
        data: layoutsRoutesData["tabbar-sample-1"],
        path: "tabbar-sample-1"
    },
    {
        component: TabbarSample2Component,
        data: layoutsRoutesData["tabbar-sample-2"],
        path: "tabbar-sample-2"
    },
    {
        children: [
            { path: "arrivals",   component: BottomNavRoutingView1Component },
            { path: "departures", component: BottomNavRoutingView2Component },
            { path: "canceled",   component: BottomNavRoutingView3Component }
        ],
        component: TabbarSample3Component,
        data: layoutsRoutesData["tabbar-sample-3"],
        path: "tabbar-sample-3"
    },
    {
        component: TabbarStyleComponent,
        data: layoutsRoutesData["tabbar-style"],
        path: "tabbar-style"
    },
    {
        component: TabsSample1Component,
        data: layoutsRoutesData["tabs-sample-1"],
        path: "tabs-sample-1"
    },
    {
        component: TabsSample2Component,
        data: layoutsRoutesData["tabs-sample-2"],
        path: "tabs-sample-2"
    },
    {
        component: TabsSample3Component,
        data: layoutsRoutesData["tabs-sample-3"],
        path: "tabs-sample-3"
    },
    {
        component: TabsSample4Component,
        path: "tabs-sample-4"
    },
    {
        component: TabsSample5Component,
        path: "tabs-sample-5"
    },
    {
        children: [
            { path: "arrivals",   component: TabsRoutingView1Component },
            { path: "departures", component: TabsRoutingView2Component },
            { path: "canceled",   component: TabsRoutingView3Component }
        ],
        component: TabsSample6Component,
        data: layoutsRoutesData["tabs-sample-6"],
        path: "tabs-sample-6"
    },
    {
        component: TabsStyleComponent,
        path: "tabs-style"
    },
    {
        component: CardComponent,
        data: layoutsRoutesData["card-sample-0"],
        path: "card-sample-0"
    },
    {
        component: CardSample1Component,
        data: layoutsRoutesData["card-sample-1"],
        path: "card-sample-1"
    },
    {
        component: CardSample2Component,
        data: layoutsRoutesData["card-sample-2"],
        path: "card-sample-2"
    },
    {
        component: CardSample3Component,
        data: layoutsRoutesData["card-sample-3"],
        path: "card-sample-3"
    },
    {
        component: CardSample4Component,
        data: layoutsRoutesData["card-sample-4"],
        path: "card-sample-4"
    },
    {
        component: CardStylingSampleComponent,
        data: layoutsRoutesData["card-styling-sample"],
        path: "card-styling-sample"
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(layoutsRoutes)
    ]
})
export class LayoutsRoutingModule { }
