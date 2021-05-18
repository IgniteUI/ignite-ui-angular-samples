import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxBooleanFilteringOperand, IgxHierarchicalGridComponent, IgxStringFilteringOperand } from 'igniteui-angular';
import { SINGERS } from '../data';

@Component({
    selector: 'app-hierarchical-grid-custom-filtering',
    styleUrls: ['./hierarchical-grid-custom-filtering.component.css'],
    templateUrl: 'hierarchical-grid-custom-filtering.component.html'
})

export class HGridCustomFilteringSampleComponent implements OnInit {
    @ViewChild('hierarchicalGrid', { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    public localdata;
    public caseSensitiveFilteringOperand = CaseSensitiveFilteringOperand.instance();
    public booleanFilteringOperand = BooleanFilteringOperand.instance();

    constructor() {
        this.localdata = SINGERS;
    }
    public ngOnInit(): void {
    }

    public formatter = (a) => a;
}

export class CaseSensitiveFilteringOperand extends IgxStringFilteringOperand {
    private constructor() {
        super();
        const customOperations = [
            {
                iconName: 'contains',
                isUnary: false,
                logic: (target: string, searchVal: string, ignoreCase?: boolean) => {
                    ignoreCase = false;
                    const search = IgxStringFilteringOperand.applyIgnoreCase(searchVal, ignoreCase);
                    target = IgxStringFilteringOperand.applyIgnoreCase(target, ignoreCase);
                    return target.indexOf(search) !== -1;
                },
                name: 'Contains (case sensitive)'
            },
            {
                iconName: 'does-not-contain',
                isUnary: false,
                logic: (target: string, searchVal: string, ignoreCase?: boolean) => {
                    ignoreCase = false;
                    const search = IgxStringFilteringOperand.applyIgnoreCase(searchVal, ignoreCase);
                    target = IgxStringFilteringOperand.applyIgnoreCase(target, ignoreCase);
                    return target.indexOf(search) === -1;
                },
                name: 'Does Not Contain (case sensitive)'
            }
        ];

        const emptyOperators = [
            // 'Empty'
            this.operations[6],
            // 'Not Empty'
            this.operations[7]
        ];

        this.operations = customOperations.concat(emptyOperators);
    }
}

export class BooleanFilteringOperand extends IgxBooleanFilteringOperand {
    private constructor() {
        super();
        this.operations = [
            // 'All'
            this.operations[0],
            // 'TRUE'
            this.operations[1],
            // 'FALSE'
            this.operations[2]
        ];
    }
}
