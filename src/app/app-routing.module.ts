import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/overview' },
  { path: 'overview', loadChildren: () => import('./pages/overview/overview.module').then(m => m.OverviewModule) },
  { path: 'standard', loadChildren: () => import('./pages/standard/standard.module').then(m => m.StandardModule) },
  { path: 'frame', loadChildren: () => import('./pages/basic-frame/basic-frame.module').then(m => m.BasicFrameModule) },
  { path: 'demo', loadChildren: () => import('./pages/demo/demo.module').then(m => m.DemoModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
