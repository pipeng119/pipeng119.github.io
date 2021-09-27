import { GitComponent } from './git/git.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GitRoutingModule } from './git.routing.module';
import { MarkdownModule } from 'ngx-markdown';
import { CommitComponent } from './commit/commit.component';
import { MergeComponent } from './merge/merge.component';
import { TagComponent } from './tag/tag.component';
import { BranchComponent } from './branch/branch.component';
import { ReleaseComponent } from './release/release.component';
import { CommandComponent } from './command/command.component';



@NgModule({
  declarations: [
    GitComponent,
    CommitComponent,
    MergeComponent,
    TagComponent,
    BranchComponent,
    ReleaseComponent,
    CommandComponent],
  imports: [
    CommonModule,
    GitRoutingModule,
    MarkdownModule.forChild()
  ],
})
export class GitModule { }
