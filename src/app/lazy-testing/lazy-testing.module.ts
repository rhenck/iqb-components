import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { LazyTestingRoutingModule } from './lazy-testing-routing.module';
import { LazyComponent } from './lazy.component';
import {FlexLayoutModule} from "@angular/flex-layout";
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
import {IqbComponentsModule} from "../components/iqb-components.module";


@NgModule({
  declarations: [LazyComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    LazyTestingRoutingModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    IqbComponentsModule.forChild()
  ]
})
export class LazyTestingModule { }

