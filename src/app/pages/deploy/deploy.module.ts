import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeployRoutingModule } from './deploy-routing.module';
import { DeployIndexComponent } from './deploy-index/deploy-index.component';


@NgModule({
  declarations: [
    DeployIndexComponent
  ],
  imports: [
    CommonModule,
    DeployRoutingModule
  ]
})
export class DeployModule { }
