import { ManagenewsComponent } from './managenews.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news-routing.module';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ManagenewsComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    LocalizeRouterModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class NewsModule { }
