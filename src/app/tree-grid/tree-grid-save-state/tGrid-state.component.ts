import { Component, OnInit, ViewChild, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { FilteringExpressionsTree, FilteringLogic, GridFeatures,
    IGridState, IGridStateOptions, IgxGridStateDirective,
    IgxTreeGridComponent, IgxCheckboxComponent} from 'igniteui-angular';
import { take } from 'rxjs/operators';
import { EMPLOYEE_DATA } from './data';

// tslint:disable:object-literal-sort-keys
@Component({
  selector: 'app-tgrid',
  styleUrls: ['./tGrid-state.component.css'],
  templateUrl: './tGrid-state.component.html'
})

export class TGridSaveStateComponent implements OnInit, AfterViewInit {

    @ViewChild(IgxGridStateDirective, { static: true }) public state: IgxGridStateDirective;
    @ViewChild('treeGrid', { static: true }) public tGrid: IgxTreeGridComponent;
    @ViewChildren(IgxCheckboxComponent) public checkboxes: QueryList<IgxCheckboxComponent>;

    public localData: any[];
    public columns: any[];
    public treeGridId = 'tGrid1';
    public stateKey = this.treeGridId + '-state';
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
        { key: 'sorting', shortName: 'Sorting' }
      ];

    public options: IGridStateOptions = {
      cellSelection: true,
      rowSelection: true,
      filtering: true,
      advancedFiltering: true,
      paging: true,
      sorting: true,
      columns: true,
      expansion: true,
      rowPinning: true,
      columnSelection: true
    };

    constructor(private router: Router) {
        this.localData = EMPLOYEE_DATA;
    }

    public ngOnInit() {
      this.router.events.pipe(take(1)).subscribe((event: NavigationStart) => {
          this.saveGridState();
      });
    }

    public ngAfterViewInit() {
        this.restoreGridState();
    }

    public saveGridState() {
        const state = this.state.getState(this.serialize);
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
        const tGrid: IgxTreeGridComponent = this.tGrid;
        tGrid.filteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And);
        tGrid.advancedFilteringExpressionsTree = new FilteringExpressionsTree(FilteringLogic.And);
        tGrid.sortingExpressions = [];
        tGrid.deselectAllRows();
        tGrid.clearCellSelection();
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

    public formatter = (a) => a;
}
