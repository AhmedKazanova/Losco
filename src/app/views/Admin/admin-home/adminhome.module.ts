import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminhomeRoutingModule } from './adminhome-routing.module';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { AdminHomeComponent } from './admin-home.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [AdminHomeComponent],
  imports: [
    CommonModule,
    AdminhomeRoutingModule,
    LocalizeRouterModule,
    TranslateModule
  ]
})
export class AdminhomeModule { }
