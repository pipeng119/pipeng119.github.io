import { BuriedComponent } from './buried/buried.component';
import { OptimizedIndexComponent } from './optimized-index/optimized-index.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index'
  },
  {
    path: 'index',
    component: OptimizedIndexComponent
  },
  {
    path: 'buried',
    component: BuriedComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OptimizedRoutingModule { }
