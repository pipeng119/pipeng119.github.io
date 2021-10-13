import { NodeComponent } from './node/node.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NodeRoutingModule } from './node-routing.module';
import { MarkdownModule } from 'ngx-markdown';


@NgModule({
  declarations: [NodeComponent],
  imports: [
    CommonModule,
    NodeRoutingModule,
    MarkdownModule.forChild()
  ]
})
export class NodeModule { }
