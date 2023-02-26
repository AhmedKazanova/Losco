import { ManagemessagesComponent } from './managemessages.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [ManagemessagesComponent],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    LocalizeRouterModule,
    TranslateModule,
  ]
})
export class MessagesModule { }
