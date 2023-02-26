import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/shared/services/guard/admin.guard';
import { ManagenewsComponent } from './managenews.component';

const routes: Routes = [
  {
    path:'',
    component:ManagenewsComponent,
    title:"Manage News",
    canActivate:[AdminGuard],
    //resolve:[DataResolverResolver]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
