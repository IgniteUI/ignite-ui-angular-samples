/* eslint-disable @typescript-eslint/member-ordering */
import {
    Component,
    Inject,
    OnInit,
    Pipe,
    PipeTransform,
    Renderer2
} from '@angular/core';
import * as fileSaver from 'file-saver';
import { DOCUMENT } from '@angular/common';
import { IgxIconService, ISelectionEventArgs } from 'igniteui-angular';

import {
    all as imxIcons,
    IconCategory,
    IMXIcon
} from '@igniteui/material-icons-extended';

interface ICategoryOption {
    text: string;
    category?: IconCategory | 'all';
}

@Component({
    selector: 'app-material-icons-extended',
    templateUrl: './material-icons-extended.component.html',
    styleUrls: ['./material-icons-extended.component.css']
})
export class MaterialIconsExtendedComponent implements OnInit {
    constructor(
        private iconService: IgxIconService,
        @Inject(DOCUMENT) private document: Document,
        private renderer: Renderer2
    ) {}

    public categories: ICategoryOption[] = [
        {
            text: 'All',
            category: 'all'
        }
    ];

    public setCategories() {
        const categories = IconCategory.values().map(
            (category) =>
                ({
                    text: category
                        .split(' ')
                        .map((w) => w.replace(/^\w/, (c) => c.toUpperCase()))
                        .join(' '),
                    category
                } as ICategoryOption)
        );

        this.categories = [...this.categories, ...categories];
    }

    public allIcons = imxIcons;

    public selectedCategory: IconCategory | 'all' = 'all';

    handleSelection(event: ISelectionEventArgs) {
        this.selectedCategory = event.newSelection.value;
    }

    resetFilter() {
        this.selectedCategory = 'all';
    }

    addIcons() {
        for (const icon of imxIcons) {
            this.iconService.addSvgIconFromText(
                icon.name,
                icon.value,
                'imx-icons'
            );
        }
    }

    downloadFile(icon: IMXIcon) {
        const blob: any = new Blob([icon.value], { type: 'image/svg+xml' });
        fileSaver.saveAs(blob, icon.name);
    }

    copyValue(event: Event, val: string) {
        const target = event.currentTarget as HTMLButtonElement;
        const element = target.childNodes[0] as HTMLElement;
        const tempField = this.renderer.createElement('textarea');

        this.renderer.setStyle(tempField, 'position', 'fixed');
        this.renderer.setStyle(tempField, 'opacity', '0');
        this.renderer.setProperty(tempField, 'value', val);
        this.renderer.appendChild(this.document.body, tempField);

        tempField.focus();
        tempField.select();

        this.document.execCommand('copy');
        this.renderer.removeChild(this.document.body, tempField);

        if (element.innerText !== 'done') {
            this.renderer.setProperty(element, 'innerText', 'done');
            this.renderer.addClass(
                target,
                'sample__grid-item-clipboard--success'
            );

            setTimeout(() => {
                this.renderer.setProperty(element, 'innerText', 'content_copy');
                this.renderer.removeClass(
                    target,
                    'sample__grid-item-clipboard--success'
                );
            }, 1500);
        }
    }

    ngOnInit() {
        this.setCategories();
        this.addIcons();
    }
}

interface IIconsGroup {
    category: string;
    icons: IMXIcon[];
}

@Pipe({
    name: 'categoriesFilter'
})
export class CategoriesFilterPipe implements PipeTransform {
    sortIcons(acc: IIconsGroup[], icon: IMXIcon): IIconsGroup[] {
        for (const category of icon.categories) {
            const index = acc.findIndex((group) => group.category === category);

            if (index !== -1) {
                acc[index].icons.push(icon);
            } else {
                acc.push({
                    category,
                    icons: [icon]
                });
            }
        }
        return acc;
    }

    transform(icons: IMXIcon[], category: IconCategory | 'all'): IIconsGroup[] {
        if (category === 'all') {
            return icons.reduce(this.sortIcons, []);
        } else {
            return icons
                .filter((icon) => {
                    const index = icon.categories.indexOf(
                        category as IconCategory
                    );

                    if (index !== -1) {
                        return category as IconCategory;
                    }
                })
                .reduce(this.sortIcons, []);
        }
    }
}

@Pipe({
    name: 'filterByName'
})
export class FilterByName implements PipeTransform {
    transform(icons: IMXIcon[], name: string): IMXIcon[] {
        return icons.filter((icon) => {
            const index = icon.name.indexOf(name);
            if (index !== -1) {
                return icon.name;
            }
        });
    }
}
