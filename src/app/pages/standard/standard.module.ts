import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StandardRoutingModule } from './standard-routing.module';
import { ToolsetComponent } from './toolset/toolset.component';
import { MarkdownModule } from 'ngx-markdown';
import { StyleguideComponent } from './styleguide/styleguide.component';


@NgModule({
  declarations: [
    ToolsetComponent,
     StyleguideComponent
  ],
  imports: [
    CommonModule,
    StandardRoutingModule,
    MarkdownModule.forChild()
  ]
})
export class StandardModule { }
