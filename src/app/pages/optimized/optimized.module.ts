import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OptimizedRoutingModule } from './optimized-routing.module';
import { OptimizedIndexComponent } from './optimized-index/optimized-index.component';
import { BuriedComponent } from './buried/buried.component';


@NgModule({
  declarations: [
    OptimizedIndexComponent,
    BuriedComponent
  ],
  imports: [
    CommonModule,
    OptimizedRoutingModule
  ]
})
export class OptimizedModule { }
