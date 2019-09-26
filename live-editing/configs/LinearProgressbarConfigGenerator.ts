// tslint:disable:object-literal-sort-keys
// tslint:disable:max-line-length
import { IgxButtonModule, IgxIconModule, IgxProgressBarModule, IgxRippleModule } from "igniteui-angular";
import { LinearProgressbarSample1Component
} from "../../src/app/data-display/linear-progressbar/linear-progressbar-sample-1/linear-progressbar-sample-1.component";
import { LinearProgressbarSample2Component
} from "../../src/app/data-display/linear-progressbar/linear-progressbar-sample-2/linear-progressbar-sample-2.component";
import { LinearProgressbarStylingComponent } from "../../src/app/data-display/linear-progressbar/linear-progressbar-styling-sample/linear-progressbar-styling-sample.component";
import { LinearProgressbarComponent } from "../../src/app/data-display/linear-progressbar/linear-progressbar.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class LinearProgressbarConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: LinearProgressbarComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxIconModule, IgxProgressBarModule, IgxRippleModule,
                    LinearProgressbarComponent],
                ngDeclarations: [LinearProgressbarComponent],
                ngImports: [IgxButtonModule, IgxIconModule, IgxProgressBarModule, IgxRippleModule]
            }),
            shortenComponentPathBy: "/data-display/"
        }));

        configs.push(new Config({
            component: LinearProgressbarSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxIconModule, IgxProgressBarModule, IgxRippleModule,
                    LinearProgressbarSample1Component],
                ngDeclarations: [LinearProgressbarSample1Component],
                ngImports: [IgxButtonModule, IgxIconModule, IgxProgressBarModule, IgxRippleModule]
            }),
            shortenComponentPathBy: "/data-display/linear-progressbar/"
        }));

        configs.push(new Config({
            component: LinearProgressbarSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxIconModule, IgxProgressBarModule, IgxRippleModule,
                    LinearProgressbarSample2Component],
                ngDeclarations: [LinearProgressbarSample2Component],
                ngImports: [IgxButtonModule, IgxIconModule, IgxProgressBarModule, IgxRippleModule]
            }),
            shortenComponentPathBy: "/data-display/linear-progressbar/"
        }));

        configs.push(new Config({
            component: LinearProgressbarStylingComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxIconModule, IgxProgressBarModule, IgxRippleModule,
                    LinearProgressbarStylingComponent],
                ngDeclarations: [LinearProgressbarStylingComponent],
                ngImports: [IgxButtonModule, IgxIconModule, IgxProgressBarModule, IgxRippleModule]
            }),
            shortenComponentPathBy: "/data-display/linear-progressbar"
        }));

        return configs;
    }
}
