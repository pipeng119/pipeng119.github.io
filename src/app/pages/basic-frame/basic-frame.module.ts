import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicFrameRoutingModule } from './basic-frame-routing.module';
import { NgFrameComponent } from './ng-frame/ng-frame.component';
import { MarkdownModule } from 'ngx-markdown';


@NgModule({
  declarations: [
    NgFrameComponent
  ],
  imports: [
    CommonModule,
    BasicFrameRoutingModule,
    MarkdownModule.forChild()

  ]
})
export class BasicFrameModule { }
