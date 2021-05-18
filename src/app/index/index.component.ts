import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { NavigationStart, Route, Router } from '@angular/router';
import { IgxNavigationDrawerComponent } from 'igniteui-angular';
import { filter } from 'rxjs/operators';
import { dataDisplayRoutesData } from '../data-display/data-display-routes-data';
import { dataEntriesRoutesData } from '../data-entries/data-entries-routes-data';
import { gridsRoutesData } from '../grid/grid-routes-data';
import { hierarchicalGridRoutesData } from '../hierarchical-grid/hierarchical-grid-routes-data';
import { interactionsRoutesData } from '../interactions/interactions-routes-data';
import { layoutsRoutesData } from '../layouts/layouts-routes-data';
import { listsRoutesData } from '../lists/lists-routes-data';
import { menusRoutesData } from '../menus/menus-routes-data';
import { notificationsRoutesData } from '../notifications/notifications-routes-data';
import { schedulingRoutesData } from '../scheduling/scheduling-routes-data';
import { servicesRoutesData } from '../services/services-routes-data';
import { themingRoutesData } from '../theming/theming-routes-data';
import { treeGridRoutesData } from '../tree-grid/tree-grid-routes-data';

@Component({
    selector: 'app-index',
    styleUrls: ['./index.component.css'],
    templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit, AfterViewInit {

    @ViewChild('navdrawer', { read: IgxNavigationDrawerComponent, static: true })
    public navdrawer: IgxNavigationDrawerComponent;

    public homeRouteItem: IRouteItem;

    public currentNavItems: INavigationItem[] = [];

    public selectedDisplayName: string;

    public searchValue = '';

    public drawerState = {
        enableGestures: true,
        miniWidth: '80px',
        open: true,
        pin: false,
        pinThreshold: 768,
        position: 'left',
        width: '300px'
    };

    private appRoutes: any[];

    private modulesRoutes = [
        {
            path: 'data-display',
            routesData: dataDisplayRoutesData
        },
        {
            path: 'data-entries',
            routesData: dataEntriesRoutesData
        },
        {
            path: 'notifications',
            routesData: notificationsRoutesData
        },
        {
            path: 'theming',
            routesData: themingRoutesData
        },
        {
            path: 'menus',
            routesData: menusRoutesData
        },
        {
            path: 'lists',
            routesData: listsRoutesData
        },
        {
            path: 'interactions',
            routesData: interactionsRoutesData
        },
        {
            path: 'scheduling',
            routesData: schedulingRoutesData
        },
        {
            path: 'layouts',
            routesData: layoutsRoutesData
        },
        {
            path: 'services',
            routesData: servicesRoutesData
        },
        {
            path: 'grid',
            routesData: gridsRoutesData
        },
        {
            path: 'hierarchical-grid',
            routesData: hierarchicalGridRoutesData
        },
        {
            path: 'tree-grid',
            routesData: treeGridRoutesData
        }
    ];

    private allNavItems: INavigationItem[] = [];

    constructor(private router: Router, private cdr: ChangeDetectorRef) {
        this.appRoutes = this.getAllSampleRoutes('/samples',
            router.config.filter((c) => c.path === 'samples')[0].children, this.modulesRoutes);
    }

    public ngOnInit() {
        const loadedRouteItem = this.appRoutes.filter(
            (route: any) => route.path === this.router.url)[0];
        if (loadedRouteItem) {
            this.selectedDisplayName = loadedRouteItem.displayName;
        }

        this.router.events.pipe(
            filter((x) => x instanceof NavigationStart)
        ).subscribe((event: NavigationStart) => {
            const routeItem = this.appRoutes.filter(
                (route: any) => route.path === event.url)[0];
            if (routeItem) {
                this.selectedDisplayName = routeItem.displayName;
            }

            if (event.url !== '/' && !this.navdrawer.pin) {
                // Close drawer when selecting a view on mobile (unpinned)
                this.navdrawer.close();
            }
        });

        this.createAllNavItems();
    }

    public ngAfterViewInit() {
        const loadedRouteItem = this.appRoutes.filter(
            (route: any) => route.path === this.router.url)[0];

        if (loadedRouteItem) {
            // Get parent (INavItem)
            const loadedParentItem = this.currentNavItems.filter(
                (navItem) => navItem.name === loadedRouteItem.parentName)[0];
            // Get loaded child (IRouteItem)
            const loadedChildItem = loadedParentItem.children.filter(
                (routeItem) => routeItem.displayName === loadedRouteItem.displayName)[0];

            this.toggleParent('header' + loadedParentItem.name);
            document.getElementById('child' + loadedChildItem.displayName).scrollIntoView();
            this.cdr.detectChanges();
        }
    }

    public searchValueChanged() {
        this.currentNavItems = this.filter(this.allNavItems);
    }

    public clearSearchValue() {
        this.searchValue = '';
        this.searchValueChanged();
    }

    // toggle a header element from the navigation
    public toggleParent(nodeId) {
        const theSpan = document.getElementById(nodeId);
        if (theSpan != null) {
            if (theSpan.style.display === 'inline') {
                theSpan.style.display = 'none';
            } else if (theSpan.style.display === 'none') {
                theSpan.style.display = 'inline';
            }
        }
    }

    // convert a header element's visibility to a material icon name
    public convertNodeStateToIcon(nodeId) {
        const theSpan = document.getElementById(nodeId);
        if (theSpan != null) {
            const theSpanDisplay = theSpan.style.display;
            if (theSpanDisplay === 'inline') {
                return 'remove';
            } else if (theSpanDisplay === 'none') {
                return 'add';
            }
        }
        return 'add';
    }

    public refresh() {
        window.dispatchEvent(new Event('resize'));
    }

    private getAllSampleRoutes(basePath: string, appModuleRoutes: Route[], modulesRoutes: any[]): any[] {
        const routes = [];
        const pushRoute = (route: Route, baseRoutePath: string) => {
            if (route.data && route.data.displayName && route.data.parentName) {
                routes.push({
                    displayName: route.data.displayName,
                    parentName: route.data.parentName,
                    path: baseRoutePath + '/' + route.path
                });
            }
        };

        appModuleRoutes.forEach((route: Route) => {
            pushRoute(route, basePath);
        });

        modulesRoutes.forEach((moduleRoutes: any) => {
            // tslint:disable-next-line:forin
            // eslint-disable-next-line guard-for-in
            for (const key in moduleRoutes.routesData) {
                const route: Route = {
                    data: moduleRoutes.routesData[key],
                    path: key === 'empty-path' ? '' : key
                };

                pushRoute(route, basePath + '/' + moduleRoutes.path);
            }
        });

        return routes;
    }

    private createAllNavItems() {
        // Create home route item
        this.homeRouteItem = { path: '/samples/home', displayName: 'Home' };

        // Create all navigation items (headers)
        for (const appRoute of this.appRoutes) {
            const controlName = appRoute.parentName;

            if (this.allNavItems.filter((item) => item.name === controlName).length <= 0) {
                this.allNavItems.push({ name: controlName, children: [] });
            }
        }

        // Sort navItems
        this.allNavItems = this.sort(this.allNavItems);

        // Create children route items for each navigation item
        for (const appRoute of this.appRoutes) {
            const controlName = appRoute.parentName;
            const navItem = this.allNavItems.filter((item) => item.name === controlName)[0];
            navItem.children.push({ path: appRoute.path, displayName: appRoute.displayName });
        }

        this.currentNavItems = this.allNavItems;
    }

    private sort(navItems: INavigationItem[]) {
        return navItems.sort((current, next) => current.name.toLowerCase().localeCompare(next.name.toLowerCase()));
    }

    private filter(navItems: INavigationItem[]) {
        const filteredNavItems: INavigationItem[] = [];

        for (const navItem of navItems) {
            const filteredChildren: IRouteItem[] = [];
            for (const routeItem of navItem.children) {
                if (routeItem.displayName.toLowerCase().indexOf(this.searchValue.toLowerCase()) !== -1) {
                    filteredChildren.push(routeItem);
                }
            }
            if (filteredChildren.length > 0) {
                filteredNavItems.push({ name: navItem.name, children: filteredChildren });
            }
        }

        return filteredNavItems;
    }
}

export interface INavigationItem {
    name: string;
    children: IRouteItem[];
}

export interface IRouteItem {
    path: string;
    displayName: string;
}
