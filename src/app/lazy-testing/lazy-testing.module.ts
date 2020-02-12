import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyTestingRoutingModule } from './lazy-testing-routing.module';
import { LazyComponent } from './lazy.component';


@NgModule({
  declarations: [LazyComponent],
  imports: [
    CommonModule,
    LazyTestingRoutingModule
  ]
})
export class LazyTestingModule { }
