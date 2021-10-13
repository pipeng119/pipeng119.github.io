import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingRoutingModule } from './training-routing.module';
import { BlogComponent } from './blog/blog.component';
import { ShareComponent } from './share/share.component';
import { AwardComponent } from './award/award.component';
import { ReviewComponent } from './review/review.component';


@NgModule({
  declarations: [
    BlogComponent,
    ShareComponent,
    AwardComponent,
    ReviewComponent
  ],
  imports: [
    CommonModule,
    TrainingRoutingModule
  ]
})
export class TrainingModule { }
