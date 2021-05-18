import { Component, QueryList, ViewChildren } from '@angular/core';
import { IExpansionPanelEventArgs, IgxExpansionPanelComponent } from 'igniteui-angular';
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-expansion-sample-4',
    styleUrls: ['./expansion-sample-4.component.css'],
    templateUrl: './expansion-sample-4.component.html'
})
export class ExpansionPanelSample4Component {

    @ViewChildren(IgxExpansionPanelComponent)
    public accordion: QueryList<IgxExpansionPanelComponent>;
    public collapsed(index: number) {
         if (!this.accordion) {
            return true;
         }
         return this.accordion.toArray()[index] && this.accordion.toArray()[index].collapsed;
     }

    public onInteraction(event: IExpansionPanelEventArgs) {
        const expandedPanels = this.accordion.filter((panel) => !panel.collapsed);
        expandedPanels.forEach((expandedPanel) => {
            if (expandedPanel.id !==  event.owner.id) {
                expandedPanel.collapse();
            }
        });
    }
}
