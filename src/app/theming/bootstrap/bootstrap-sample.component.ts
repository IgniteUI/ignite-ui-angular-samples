import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { IgxDialogComponent, IgxOverlayOutletDirective } from 'igniteui-angular';
@Component({
  selector: 'app-bootstrap-sample',
  styleUrls: ['./bootstrap-sample.component.css'],
  templateUrl: './bootstrap-sample.component.html'
})

export class BootstrapComponent implements OnInit{

    @ViewChild(IgxOverlayOutletDirective, { static: true })
    public outlet: IgxOverlayOutletDirective;

    @ViewChild('dialog', { read: IgxDialogComponent, static: true })
    public dialog: IgxDialogComponent;

    @HostBinding('class')
    public themesClass = 'light';

    public horizontal = true;

    public contacts = [
        {
          name: 'Sticker Mule Italy srl',
          amount: 85.23
        },
        {
            name: 'Dribbble Holdings Ltd.',
            amount: 472.99
        },
        {
            name: 'Printify Inc.',
            amount: 236.89
        }
    ];

    private _dialogOverlaySettings2;

    public lightTheme() {
        this.themesClass = 'light';
    }

    public darkTheme() {
        this.themesClass = 'dark';
    }

    public openDialog() {
        this._dialogOverlaySettings2.outlet = this.outlet;
        this.dialog.open(this._dialogOverlaySettings2);
    }

    public ngOnInit() {
        this._dialogOverlaySettings2 = {
            modal: true,
            outlet: this.outlet
        };
    }
}

