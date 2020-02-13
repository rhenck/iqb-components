import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyTestingRoutingModule } from './lazy-testing-routing.module';
import { LazyComponent } from './lazy.component';
import {
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {IqbComponentsModule} from "../components/iqb-components.module";


@NgModule({
  declarations: [LazyComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    LazyTestingRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    IqbComponentsModule.forChild(),
    FormsModule
  ]
})
export class LazyTestingModule { }

