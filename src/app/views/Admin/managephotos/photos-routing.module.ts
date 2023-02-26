import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/shared/services/guard/admin.guard';
import { ManagephotosComponent } from './managephotos.component';

const routes: Routes = [
  {
    path:'',
    component:ManagephotosComponent,
    title:"Manage Photos",
    canActivate:[AdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRoutingModule { }
