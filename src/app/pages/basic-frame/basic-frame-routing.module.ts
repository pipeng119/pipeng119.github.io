import { NgFrameComponent } from './ng-frame/ng-frame.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'basic'
  },
  {
    path: 'basic',
    component: NgFrameComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicFrameRoutingModule { }
