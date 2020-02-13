import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyTestingRoutingModule } from './lazy-testing-routing.module';
import { LazyComponent } from './lazy.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {IqbComponentsModule} from "../components/iqb-components.module";
import {MatInputModule} from "@angular/material/input";


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

