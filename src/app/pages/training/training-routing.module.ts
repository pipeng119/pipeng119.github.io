import { ReviewComponent } from './review/review.component';
import { AwardComponent } from './award/award.component';
import { ShareComponent } from './share/share.component';
import { BlogComponent } from './blog/blog.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'blog'
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'share',
    component: ShareComponent
  },
  {
    path: 'award',
    component: AwardComponent
  },
  {
    path: 'review',
    component: ReviewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
