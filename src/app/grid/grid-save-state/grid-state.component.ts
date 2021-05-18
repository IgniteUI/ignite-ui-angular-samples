/* eslint-disable max-len */
import { Component, OnInit, ViewChild, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { FilteringExpressionsTree, FilteringLogic, GridFeatures,
    IGridState, IGridStateOptions, IgxGridComponent, IgxGridStateDirective,
    IgxNumberSummaryOperand, IgxSummaryResult, IgxCheckboxComponent } from 'igniteui-angular';
import { take } from 'rxjs/operators';
import { employeesData } from './localData';

class MySummary {

    public operate(data?: any[]): IgxSummaryResult[] {
        const result = new IgxNumberSummaryOperand().operate(data);
        result.push({
            key: 'test',
            label: 'Test',
            summaryResult: data.filter(rec => rec > 10 && rec < 30).length
        });
        return result;
    }
}

// tslint:disable:object-literal-sort-keys
@Component({
  selector: 'app-grid',
  styleUrls: ['./grid-state.component.css'],
  templateUrl: './grid-state.component.html'
})

export class GridSaveStateComponent implements OnInit, AfterViewInit {
    @ViewChild(IgxGridStateDirective, { static: true }) public state: IgxGridStateDirective;
    @ViewChild(IgxGridComponent, { static: true }) public grid: IgxGridComponent;
    @ViewChildren(IgxCheckboxComponent) public checkboxes: QueryList<IgxCheckboxComponent>;

    public localData: any[];
    public columns: any[];
    public gridId = 'grid1';
    public stateKey = this.gridId + '-state';
    public gridState: IGridState;
    public serialize = true;

    public features: { key: GridFeatures; shortName: string }[] = [
        { key: 'advancedFiltering', shortName: 'Adv Filt' },
        { key: 'cellSelection', shortName: 'Cell Sel' },
        { key: 'columns', shortName: 'Columns' } ,
        { key: 'columnSelection', shortName: 'Cols Sel' },
        { key: 'expansion', shortName: 'Expansion' },
        { key: 'filtering', shortName: 'Filt' },
        { key: 'paging', shortName: 'Paging' },
        { key: 'rowPinning', shortName: 'Row Pining' },
        { key: 'rowSelection', shortName: 'Row Sel' },
        { key: 'sorting', shortName: 'Sorting' },
        { key: 'groupBy', shortName: 'GroupBy' }
      ];

    public options: IGridStateOptions = {
      cellSelection: true,
      rowSelection: true,
      filtering: true,
      advancedFiltering: true,
      paging: true,
      sorting: true,
      groupBy: true,
      columns: true,
      expansion: true,
      rowPinning: true,
      columnSelection: true
    };

    public initialColumns: any[] = [
      // tslint:disable:max-line-length
      { field: 'FirstName', header: 'First Name', width: '150px', dataType: 'string', pinned: true, movable: true, sortable: true, filterable: true},
      { field: 'LastName', header: 'Last Name', width: '150px', dataType: 'string', pinned: true, movable: true, sortable: true, filterable: true},
      { field: 'Country', header: 'Country', width: '140px', dataType: 'string', groupable: true, movable: true, sortable: true, filterable: true, resizable: true },
      { field: 'Age', header: 'Age', width: '110px', dataType: 'number', movable: true, sortable: true, filterable: true, hasSummary: true, resizable: true, summaries: MySummary},
      { field: 'RegistererDate', header: 'Registerer Date', width: '180px', dataType: 'date', movable: true, sortable: true, filterable: true, resizable: true },
      { field: 'IsActive', header: 'Is Active', width: '140px', dataType: 'boolean', groupable: true, movable: true, sortable: true, filterable: true }
      // tslint:enable:max-line-length
    ];

    constructor(private router: Router) {}

    public ngOnInit() {
      this.localData = employeesData;
      this.columns = this.initialColumns;
      this.router.events.pipe(take(1)).subscribe((event: NavigationStart) => {
          this.saveGridState();
      });
    }

    public ngAfterViewInit() {
        this.restoreGridState();
    }

    public saveGridState() {
        const state = this.state.getState(this.serialize);
        // const state = this.state.getState(this.serialize, ['sorting', 'filtering']);
        if (typeof state === 'string') {
          window.localStorage.setItem(this.stateKey, state);
        } else {
          window.localStorage.setItem(this.stateKey, JSON.stringify(state));
        }
    }

    public restoreGridState() {
        const state = window.localStorage.getItem(this.stateKey);
        if (state) {
          this.state.setState(state);
        }
    }

    public restoreFeature(stateDirective: IgxGridStateDirective, feature: string) {
        const state = this.getFeatureState(this.stateKey, feature);
        if (state) {
          const featureState = { } as IGridState;
          featureState[feature] = state;
          stateDirective.setState(featureState);
        }
      }

    public getFeatureState(stateKey: string, feature: string) {
        let state = window.localStorage.getItem(stateKey);
        state =  state ? JSON.parse(state)[feature] : null;
        return state;
    }

    public resetGridState() {
        const grid: IgxGridComponent = this.grid;
        const pagingState = {index: 0, recordsPerPage: 15, metadata: { countPages: 3, countRecords: this.localData.length}};
        grid.pagingState = pagingState;
        grid.filteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And);
        grid.advancedFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And);
        grid.sortingExpressions = [];
        grid.groupingExpressions = [];
        grid.deselectAllColumns();
        grid.deselectAllRows();
        grid.clearCellSelection();
      }

    public onChange(event: any, action: string) {
      if (action === 'toggleAll') {
        this.checkboxes.forEach(cb => {
            cb.checked = event.checked;
        });
        for (const key of Object.keys(this.options)) {
            this.state.options[key] = event.checked;
        }
        return;
      }
      this.state.options[action] = event.checked;
    }

    public clearStorage() {
      window.localStorage.removeItem(this.stateKey);
    }

    public reloadPage() {
        window.location.reload();
    }
}
