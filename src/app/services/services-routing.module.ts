// tslint:disable:max-line-length
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CsvExportSample1Component } from './export-csv/csv-export-sample-1/csv-export-sample-1.component';
import { TreeGridCsvExportSample1Component } from './export-csv/csv-export-tree-grid-sample/csv-export-tree-grid-sample.component';
import { CsvExportComponent } from './export-csv/csv-export.component';
import { ExcelExportSample1Component } from './export-excel/excel-export-sample-1/excel-export-sample-1.component';
import { TreeGridExcelExportSample1Component } from './export-excel/excel-export-tree-grid-sample/excel-export-tree-grid-sample.component';
import { ExcelExportComponent } from './export-excel/excel-export.component';
import { LocalizationAllResourcesComponent } from './localization-samples/localization-all-resources/localization-all-resources.component';
import { LocalizationSample1Component } from './localization-samples/localization-sample-1/localization-sample-1.component';
import { LocalizationSample2Component } from './localization-samples/localization-sample-2/localization-sample-2.component';
import { LocalizationSample3Component } from './localization-samples/localization-sample-3/localization-sample-3.component';
import { servicesRoutesData } from './services-routes-data';
import { TransactionBaseComponent } from './transaction/transaction-base/transaction-base.component';
// tslint:enable:max-line-length

export const servicesRoutes: Routes = [
    {
        component: CsvExportComponent,
        data: servicesRoutesData['export-csv'],
        path: 'export-csv'
    },
    {
        component: CsvExportSample1Component,
        data: servicesRoutesData['export-csv-sample-1'],
        path: 'export-csv-sample-1'
    },
    {
        component: TreeGridCsvExportSample1Component,
        data: servicesRoutesData['export-csv-tree-grid-sample'],
        path: 'export-csv-tree-grid-sample'
    },
    {
        component: ExcelExportComponent,
        data: servicesRoutesData['export-excel'],
        path: 'export-excel'
    },
    {
        component: ExcelExportSample1Component,
        data: servicesRoutesData['export-excel-sample-1'],
        path: 'export-excel-sample-1'
    },
    {
        component: TreeGridExcelExportSample1Component,
        data: servicesRoutesData['export-excel-tree-grid-sample'],
        path: 'export-excel-tree-grid-sample'
    },
    {
        component: LocalizationSample1Component,
        data: servicesRoutesData['localization-sample-1'],
        path: 'localization-sample-1'
    },
    {
        component: LocalizationSample2Component,
        data: servicesRoutesData['localization-sample-2'],
        path: 'localization-sample-2'
    },
    {
        component: LocalizationSample3Component,
        data: servicesRoutesData['localization-sample-3'],
        path: 'localization-sample-3'
    },
    {
        component: LocalizationAllResourcesComponent,
        data: servicesRoutesData['localization-all-resources'],
        path: 'localization-all-resources'
    },
    {
        component: LocalizationAllResourcesComponent,
        data: servicesRoutesData['localization-all-resources'],
        path: 'localization-all-resources'
    },
    {
        component: TransactionBaseComponent,
        data: servicesRoutesData['transaction-base'],
        path: 'transaction-base'
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(servicesRoutes)
    ]
})
export class ServicesRoutingModule { }
