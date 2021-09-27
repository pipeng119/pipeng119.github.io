import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EngineeringRoutingModule } from './engineering-routing.module';
import { ProjectComponent } from './project/project.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { MarkdownModule } from 'ngx-markdown';


@NgModule({
  declarations: [
    ProjectComponent,
    RxjsComponent
  ],
  imports: [
    CommonModule,
    EngineeringRoutingModule,
    MarkdownModule.forChild()
  ]
})
export class EngineeringModule { }
