import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './blank-layout/blank-layout.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    AuthLayoutComponent,
    BlankLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    LocalizeRouterModule
  ]
})

export class LayoutsModule { }

