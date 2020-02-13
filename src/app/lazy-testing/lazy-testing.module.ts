import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyTestingRoutingModule } from './lazy-testing-routing.module';
import { LazyComponent } from './lazy.component';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatDialogModule} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {IqbComponentsModule} from "../components/iqb-components.module";


@NgModule({
  declarations: [LazyComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    LazyTestingRoutingModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    IqbComponentsModule.forChild(),
    FormsModule
  ]
})
export class LazyTestingModule { }

