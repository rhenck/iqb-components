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

@NgModule({
    declarations: [
        Showcase
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        IqbComponentsModule,
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
        FlexLayoutModule
    ],
    providers: [
        ShowcaseService
    ],
    bootstrap: [
        Showcase
    ]
})
export class AppModule { }
