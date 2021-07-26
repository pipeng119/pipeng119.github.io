import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown'
import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';


@NgModule({
  imports: [
    OverviewRoutingModule,
    MarkdownModule.forChild()
  ],
  declarations: [OverviewComponent],
  exports: [OverviewComponent]
})
export class OverviewModule { }
