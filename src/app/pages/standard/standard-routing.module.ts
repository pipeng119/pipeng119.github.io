import { CodeComponent } from './code/code.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StyleguideComponent } from './styleguide/styleguide.component';
import { ToolsetComponent } from './toolset/toolset.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'toolset',
  },
  {
    path: 'toolset',
    component: ToolsetComponent
  },
  {
    path: 'styleGuide',
    component: StyleguideComponent
  },
  {
    path: 'code',
    component: CodeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StandardRoutingModule { }
