import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosRoutingModule } from './photos-routing.module';
import { ManagephotosComponent } from './managephotos.component';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ManagephotosComponent],
  imports: [
    CommonModule,
    PhotosRoutingModule,
    LocalizeRouterModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PhotosModule { }
