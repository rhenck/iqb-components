import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LazyTestingRoutingModule } from './lazy-testing-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule} from '@angular/material';
import { IqbComponentsModule } from '../components/iqb-components.module';
import { LazyComponent } from './lazy.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    LazyTestingRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    IqbComponentsModule.forChild()
  ],
  declarations: [
      LazyComponent
  ],
  exports: [
      LazyComponent
  ]

})
export class LazyTestingModule { }

