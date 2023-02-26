import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homepage.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxUsefulSwiperModule,
    LocalizeRouterModule,
    TranslateModule,
  ]
})
export class HomeModule { }
