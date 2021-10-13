import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibRoutingModule } from './lib-routing.module';
import { NodeIndexComponent } from './index/index.component';
import { MarkdownModule } from 'ngx-markdown';


@NgModule({
  declarations: [
    NodeIndexComponent
  ],
  imports: [
    CommonModule,
    LibRoutingModule,
    MarkdownModule.forChild()
  ]
})
export class LibModule { }
