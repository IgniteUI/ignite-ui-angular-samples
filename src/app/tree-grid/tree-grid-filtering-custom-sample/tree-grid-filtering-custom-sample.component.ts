import { Component, OnInit } from '@angular/core';
import { IgxBooleanFilteringOperand, IgxStringFilteringOperand } from 'igniteui-angular';
import { FOODS_DATA } from '../data/foods';

@Component({
    selector: 'app-tree-grid-filtering-custom-sample',
    styleUrls: ['./tree-grid-filtering-custom-sample.component.css'],
    templateUrl: './tree-grid-filtering-custom-sample.component.html'
})
export class TreeGridFilteringCustomSampleComponent implements OnInit {
    public data: any[];
    public caseSensitiveFilteringOperand = CaseSensitiveFilteringOperand.instance();
    public booleanFilteringOperand = BooleanFilteringOperand.instance();

    public ngOnInit() {
        this.data = FOODS_DATA();
    }

    public formatDate(val: Date) {
        return new Intl.DateTimeFormat('en-US').format(val);
    }

    public formatCurrency(val: string) {
        return parseInt(val, 10).toFixed(2);
    }
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
