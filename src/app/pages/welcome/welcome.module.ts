import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';

import { MarkdownModule } from 'ngx-markdown'


@NgModule({
  imports: [
    WelcomeRoutingModule,
    MarkdownModule.forChild()
  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
