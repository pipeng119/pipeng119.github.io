import { DetailComponent } from './detail/detail.component';
import { SummaryComponent } from './summary/summary.component';
import { PrdComponent } from './prd/prd.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'prd'
  },
  {
    path: 'prd',
    component: PrdComponent
  },
  {
    path: 'summary',
    component: SummaryComponent
  },
  {
    path: 'detail',
    component: DetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileRoutingModule { }
