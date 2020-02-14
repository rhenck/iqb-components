import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Showcase } from './showcase.component';
import {IqbComponentsModule} from './components/iqb-components.module';

import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule
} from '@angular/material';

import {FormsModule} from '@angular/forms';
import {ShowcaseService} from "./showcase.service";
import { HttpClientModule } from '@angular/common/http';
import {FlexLayoutModule} from "@angular/flex-layout";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ShowcaseRoutingModule} from "./showcase-routing.module";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {AppComponent} from "./app.component";
import {LazyTestingModule} from "./lazy-testing/lazy-testing.module";

@NgModule({
    declarations: [
        Showcase,
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        IqbComponentsModule.forRoot(),
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatDividerModule,
        MatCheckboxModule,
        FormsModule,
        MatSelectModule,
        MatIconModule,
        MatDialogModule,
        HttpClientModule,
        FlexLayoutModule,
        ShowcaseRoutingModule,
        LazyTestingModule
    ],
    providers: [
        ShowcaseService,
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        }
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
