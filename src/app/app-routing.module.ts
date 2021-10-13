import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/overview' },
  { path: 'overview', loadChildren: () => import('./pages/overview/overview.module').then(m => m.OverviewModule) },
  { path: 'standard', loadChildren: () => import('./pages/standard/standard.module').then(m => m.StandardModule) },
  { path: 'frame', loadChildren: () => import('./pages/basic-frame/basic-frame.module').then(m => m.BasicFrameModule) },
  { path: 'node', loadChildren: () => import('./pages/node/node.module').then(m => m.NodeModule) },
  { path: 'lib', loadChildren: () => import('./pages/lib/lib.module').then(m => m.LibModule) },
  { path: 'synergy', loadChildren: () => import('./pages/synergy/synergy.module').then(m => m.SynergyModule) },
  { path: 'optimized', loadChildren: () => import('./pages/optimized/optimized.module').then(m => m.OptimizedModule) },
  { path: 'deploy', loadChildren: () => import('./pages/deploy/deploy.module').then(m => m.DeployModule) },
  { path: 'training', loadChildren: () => import('./pages/training/training.module').then(m => m.TrainingModule) },
  { path: 'demo', loadChildren: () => import('./pages/demo/demo.module').then(m => m.DemoModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
