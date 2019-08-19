import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Showcase } from './showcase.component';
import { IqbComponentsModule } from './components/iqb-components.module';

import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDividerModule,
    MatFormFieldModule, MatIconModule,
    MatInputModule, MatSelectModule
} from '@angular/material';

import {FormsModule} from '@angular/forms';
import {FlexModule} from '@angular/flex-layout';

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
        FlexModule,
        FlexModule,
        MatChipsModule,
        MatSelectModule,
        MatIconModule
    ],
    providers: [],
    bootstrap: [Showcase]
})
export class AppModule { }
