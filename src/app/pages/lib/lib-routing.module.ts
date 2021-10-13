import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NodeIndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index'
  },
  {
    path: 'index',
    component: NodeIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibRoutingModule { }
