import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SynergyRoutingModule } from './synergy-routing.module';
import { SynergyIndexComponent } from './synergy-index/synergy-index.component';


@NgModule({
  declarations: [
    SynergyIndexComponent
  ],
  imports: [
    CommonModule,
    SynergyRoutingModule
  ]
})
export class SynergyModule { }
