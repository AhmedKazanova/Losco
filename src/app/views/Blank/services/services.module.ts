import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    NgxUsefulSwiperModule,
    LocalizeRouterModule,
    TranslateModule,
  ]
})
export class ServicesModule { }
