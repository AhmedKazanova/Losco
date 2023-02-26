import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/shared/services/guard/admin.guard';
import { AdminHomeComponent } from './admin-home.component';

const routes: Routes = [
  {
    path:'',
    component:AdminHomeComponent,
    title:"Admin Home",
    canActivate:[AdminGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminhomeRoutingModule { }
