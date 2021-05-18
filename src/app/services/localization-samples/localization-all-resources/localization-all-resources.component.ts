/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeBG from '@angular/common/locales/bg';
import localeEN from '@angular/common/locales/en';
import localeDE from '@angular/common/locales/de';
import localeES from '@angular/common/locales/es';
import localeFR from '@angular/common/locales/fr';
import localeIT from '@angular/common/locales/it';
import localeJA from '@angular/common/locales/ja';
import localeKO from '@angular/common/locales/ko';
import localeHans from '@angular/common/locales/zh-Hans';
import localeHant from '@angular/common/locales/zh-Hant';
import { DATA } from '../../data/nwindData';
import { IgxGridComponent, IResourceStrings, changei18n, getCurrentResourceStrings } from 'igniteui-angular';
import {
    IgxResourceStringsDE, IgxResourceStringsES, IgxResourceStringsFR, IgxResourceStringsIT,
    IgxResourceStringsJA, IgxResourceStringsKO, IgxResourceStringsZHHANS, IgxResourceStringsZHHANT
} from 'igniteui-angular-i18n';

@Component({
    selector: 'app-localization-all-resources',
    styleUrls: ['./localization-all-resources.component.css'],
    templateUrl: 'localization-all-resources.component.html'
})

export class LocalizationAllResourcesComponent implements OnInit, OnDestroy {
    @ViewChild('grid', { read: IgxGridComponent, static: true })
    public grid: IgxGridComponent;
    public data: any[];
    public locale: string;
    public locales: { type: string, resource: object }[];
    public selectLocales = ['BG', 'EN', 'DE', 'ES', 'FR', 'IT', 'JA', 'KO', 'zh-Hans', 'zh-Hant'];
    public cashedLocalizationEN: IResourceStrings;
    public partialCustomBG: IResourceStrings;

    constructor() { }
    public ngOnInit(): void {
        registerLocaleData(localeBG);
        registerLocaleData(localeEN);
        registerLocaleData(localeDE);
        registerLocaleData(localeES);
        registerLocaleData(localeFR);
        registerLocaleData(localeIT);
        registerLocaleData(localeJA);
        registerLocaleData(localeKO);
        registerLocaleData(localeHans);
        registerLocaleData(localeHant);
        this.data = DATA;
        this.cashedLocalizationEN = Object.assign({}, getCurrentResourceStrings());
        // Creating a custom locale (BG) for specific grid strings.
        // Similarly can localize all needed strings in a separate IgxResourceStringsBG file
        this.partialCustomBG = {
            igx_grid_summary_count: 'Общ брой',
            igx_grid_summary_min: 'Минимум',
            igx_grid_summary_max: 'Максимум',
            igx_grid_summary_sum: 'Сума',
            igx_grid_summary_average: 'Средна стойност'
        };

        this.locales = [
            { type: 'BG', resource: this.partialCustomBG },
            { type: 'DE', resource: IgxResourceStringsDE },
            { type: 'ES', resource: IgxResourceStringsES },
            { type: 'FR', resource: IgxResourceStringsFR },
            { type: 'IT', resource: IgxResourceStringsIT },
            { type: 'JA', resource: IgxResourceStringsJA },
            { type: 'KO', resource: IgxResourceStringsKO },
            { type: 'zh-Hans', resource: IgxResourceStringsZHHANS },
            { type: 'zh-Hant', resource: IgxResourceStringsZHHANT },
            { type: 'EN', resource: this.cashedLocalizationEN }
        ];

        this.locale = 'EN';
    }

    public updateLocale() {
        const newLocale = this.locales.find(x => x.type === this.locale).resource;
        changei18n(newLocale);
    }

    // Required only for Infragistics documentation page
    public ngOnDestroy(): void {
        changei18n(this.cashedLocalizationEN);
    }
}
