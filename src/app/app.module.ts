import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Showcase } from './showcase.component';
import { IqbComponents } from './components/iqb-components.module';

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

import { FormsModule } from '@angular/forms';
import {ShowcaseService} from "./showcase.service";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        Showcase
    ],
    imports: [
        BrowserModule,
        IqbComponents,
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
        HttpClientModule
    ],
    providers: [
        ShowcaseService,
    ],
    bootstrap: [
        Showcase
    ],
    entryComponents: [
    ],
    exports: [
        IqbComponents
    ]
})
export class AppModule { }
