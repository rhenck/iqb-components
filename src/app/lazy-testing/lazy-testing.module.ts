import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LazyTestingRoutingModule } from './lazy-testing-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IqbComponentsModule } from '../components/iqb-components.module';
import { LazyComponent } from './lazy.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


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
    IqbComponentsModule.forChild(),
  ],
  declarations: [
      LazyComponent
  ],
  exports: [
      LazyComponent
  ]

})
export class LazyTestingModule { }

