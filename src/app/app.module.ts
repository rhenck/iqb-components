import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Showcase } from './showcase.component';
import { IqbComponentsModule } from './components/iqb-components.module';

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

import { ConfirmDialogComponent, MessageDialogComponent } from './components';

@NgModule({
    declarations: [
        Showcase
    ],
    imports: [
        BrowserModule,
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
        MatDialogModule
    ],
    providers: [],
    bootstrap: [
        Showcase
    ],
    entryComponents: [
        ConfirmDialogComponent,
        MessageDialogComponent
    ],
    exports: [
        IqbComponentsModule
    ]
})
export class AppModule { }
