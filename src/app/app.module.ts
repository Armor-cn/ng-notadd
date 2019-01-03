import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorIntl, MatIconModule, MatButtonModule } from '@angular/material';

import { TranslateModule } from '@ngx-translate/core';
import { NgForageModule, NgForageConfig, Driver } from 'ngforage';
import { NgxPermissionsModule } from 'ngx-permissions';
import 'hammerjs';

import { NotaddModule } from '@notadd/notadd.module';
import { NotaddMatIconsModule } from '@notadd/mat-icons/mat-icons.module';
import { NotaddProgressBarModule, NotaddSidebarModule, NotaddThemePanelModule } from '@notadd/components';
import { NotaddMatPaginatorIntlService } from '@notadd/services/notadd-mat-paginator-intl.service';

import { LayoutModule } from './layout/layout.module';

import { notaddConfig } from './config/notadd.config';

import { GraphQLModule } from './graphql/graphql.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatButtonModule,

        TranslateModule.forRoot(),
        NgxPermissionsModule.forRoot(),

        /* @notadd modules */
        NotaddModule.forRoot(notaddConfig),
        NotaddMatIconsModule,
        NotaddProgressBarModule,
        NotaddSidebarModule,
        NotaddThemePanelModule,

        LayoutModule,

        GraphQLModule,

        HttpClientModule,

        AppRoutingModule,

    ],
    providers: [{
        provide: MatPaginatorIntl, useClass: NotaddMatPaginatorIntlService
    }],
    bootstrap: [ AppComponent ]
})
export class AppModule {
    constructor(ngfConfig: NgForageConfig) {
        /* configuration NgForage*/
        ngfConfig.configure({
            name: 'Notadd',
            driver: [ // defaults to indexedDB -> webSQL -> localStorage
                Driver.INDEXED_DB,
                Driver.LOCAL_STORAGE
            ]
        });
    }
}
