import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileRoutingModule } from './file-routing.module';
import { PrdComponent } from './prd/prd.component';
import { MarkdownModule } from 'ngx-markdown';
import { SummaryComponent } from './summary/summary.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    PrdComponent,
    SummaryComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    FileRoutingModule,
    MarkdownModule.forChild()
  ]
})
export class FileModule { }
