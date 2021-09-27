import { CommitComponent } from './commit/commit.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FlowComponent } from "../flow/flow.component";
import { GitComponent } from './git/git.component';
import { MergeComponent } from './merge/merge.component';
import { TagComponent } from './tag/tag.component';
import { BranchComponent } from './branch/branch.component';
import { ReleaseComponent } from './release/release.component';
import { CommandComponent } from './command/command.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full',
  },
  {
    path: 'overview',
    component: GitComponent
  },
  {
    path: 'commit',
    component: CommitComponent
  },
  {
    path: 'merge',
    component: MergeComponent
  },
  {
    path: 'tag',
    component: TagComponent
  },
  {
    path: 'branch',
    component: BranchComponent
  },
  {
    path: 'release',
    component: ReleaseComponent
  },
  {
    path: 'command',
    component: CommandComponent
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GitRoutingModule { }
