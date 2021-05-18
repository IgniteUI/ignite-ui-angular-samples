import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { IgxIconService, IgxTreeNodeComponent } from 'igniteui-angular';
import { icons } from './services/svgIcons';
import { DATA, NodeData, REMOTE_ROOT, SelectableNodeData } from '../../../data/tree-file-data';
import { DataService } from './services/data.service';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
@Component({
    selector: 'app-tree-advanced-sample',
    templateUrl: './tree-advanced-sample.component.html',
    styleUrls: ['./tree-advanced-sample.component.css'],
    providers: [DataService]
})
export class TreeAdvancedSampleComponent implements AfterViewInit, OnDestroy {
    public family = 'tree-icons';
    public data = DATA;
    public loading = false;
    public showRefresh = false;
    public remoteRoot = REMOTE_ROOT;
    public remoteData: SelectableNodeData[] = [];
    private destroy$ = new Subject<void>();
    constructor(private iconService: IgxIconService, private dataService: DataService) {
        this.dataService.data.pipe(takeUntil(this.destroy$)).subscribe((data) => {
            this.loading = false;
            this.remoteData = data;
        });
    }

    public ngAfterViewInit() {
        const treeIcons = icons;
        treeIcons.forEach(icon => {
            if (!this.iconService.isSvgIconCached(icon.name, this.family)) {
                this.iconService.addSvgIconFromText(icon.name, icon.value, this.family);
            }
        });
    }

    public refreshData(node: IgxTreeNodeComponent<NodeData>) {
        // clear data and remove cache (this.remoteData);
        this.dataService.clearData();
        this.remoteData = [];
        this.getNodeData(node, true);
    }

    public getNodeData(node: IgxTreeNodeComponent<any>, evt: boolean) {
        // cache data
        if (this.remoteData?.length) {
            return;
        }
        if (evt) {
            this.showRefresh = true;
            this.loading = true;
            this.dataService.getData();
            this.dataService.data.pipe(take(1)).subscribe((data) => {
                // if node is selected, mark all stateless child nodes as selected
                if (node.selected) {
                    data.forEach(e => {
                        if (e.Selected === undefined) {
                            e.Selected = true;
                        }
                    });
                }
            });
        }
    }

    public handleSelection(node: NodeData, selected: boolean) {
        this.dataService.toggleSelected(node, selected);
    }

    public ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
