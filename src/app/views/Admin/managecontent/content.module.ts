import { ManagecontentComponent } from './managecontent.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentRoutingModule } from './content-routing.module';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ManagecontentComponent],
  imports: [
    CommonModule,
    ContentRoutingModule,
    LocalizeRouterModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContentModule { }
