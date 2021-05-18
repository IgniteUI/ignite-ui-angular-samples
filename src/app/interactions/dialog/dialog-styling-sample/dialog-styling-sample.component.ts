import { useAnimation } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CloseScrollStrategy,
    GlobalPositionStrategy,
    IgxDialogComponent,
    IgxOverlayOutletDirective,
    PositionSettings,
    slideInBottom,
    slideOutTop } from 'igniteui-angular';

@Component({
    selector: 'app-dialog-styling-sample',
    styleUrls: ['./dialog-styling-sample.component.css'],
    templateUrl: './dialog-styling-sample.component.html'
})
export class DialogStylingSampleComponent implements OnInit {

    @ViewChild(IgxOverlayOutletDirective, { static: true })
    public outlet: IgxOverlayOutletDirective;

    @ViewChild('dialog1', { read: IgxDialogComponent, static: true })
    public dialog: IgxDialogComponent;

    private _animaitonSettings: PositionSettings = {
        openAnimation: useAnimation(slideInBottom, { params: { fromPosition: 'translateY(100%)' } }),
        closeAnimation: useAnimation(slideOutTop, { params: { toPosition: 'translateY(-100%)' } })
    };

    private _dialogOverlaySettings2;

    public openDialog() {
        this._dialogOverlaySettings2.outlet = this.outlet;
        this.dialog.open(this._dialogOverlaySettings2);
    }

    public ngOnInit() {
        this._dialogOverlaySettings2 = {
            modal: true,
            outlet: this.outlet,
            scrollStrategy: new CloseScrollStrategy(),
            positionStrategy: new GlobalPositionStrategy(this._animaitonSettings)
        };
    }
}
