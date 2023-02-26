import { ManagecontentComponent } from './managecontent.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/shared/services/guard/admin.guard';

const routes: Routes = [
  {
    path:'',
    component:ManagecontentComponent,
    canActivate:[AdminGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
