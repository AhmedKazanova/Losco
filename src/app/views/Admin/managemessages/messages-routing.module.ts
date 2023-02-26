import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/shared/services/guard/admin.guard';
import { ManagemessagesComponent } from './managemessages.component';

const routes: Routes = [
  {
    path:'',
    component:ManagemessagesComponent,
    title:"Manage Messages",
    canActivate:[AdminGuard],
    //resolve:[DataResolverResolver]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagesRoutingModule { }
