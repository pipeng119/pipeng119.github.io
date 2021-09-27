import { RxjsComponent } from './rxjs/rxjs.component';
import { ProjectComponent } from './project/project.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'project'
  },
  {
    path: 'project',
    component: ProjectComponent
  },
  {
    path: 'rxjs',
    component: RxjsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EngineeringRoutingModule { }
