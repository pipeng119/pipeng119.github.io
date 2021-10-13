import { DeployIndexComponent } from './deploy-index/deploy-index.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index'
  },
  {
    path: 'index',
    component: DeployIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeployRoutingModule { }
