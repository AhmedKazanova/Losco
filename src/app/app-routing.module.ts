import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './shared/components/layouts/blank-layout/blank-layout.component';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';
import { AdminGuard } from './shared/services/guard/admin.guard';

export const routes: Routes = [
    //main
  {path:'',redirectTo:'/mainpage',pathMatch:'full'},
  {
    path:'about',component:BlankLayoutComponent,
    children:[{path:"",loadChildren: () => import('./views/Blank/about/about.module').then(m => m.AboutModule)}]
  },
  {
    path:'contact',component:BlankLayoutComponent,
    children:[{path:"",loadChildren: () => import('./views/Blank/contact/contact.module').then(m => m.ContactModule)}]
  },
  {
    path:'mainpage',component:BlankLayoutComponent,
    children:[{path:"",loadChildren: () => import('./views/Blank/homepage/home.module').then(m => m.HomeModule)}]
  },
  {
    path:'services',component:BlankLayoutComponent,
    children:[{path:"",loadChildren: () => import('./views/Blank/services/services.module').then(m => m.ServicesModule)}]
  },
  //auth
  {path:'auth',redirectTo:'/auth/login',pathMatch:'full'},
  {
    path:'auth/login',component:AuthLayoutComponent,
    children:[{path:"",loadChildren: () => import('./views/auth/login/auth.module').then(m => m.AuthModule)}]
  },
  //admin
  {path:'admin',redirectTo:'/admin/home',pathMatch:'full'},
  {
    path:'admin/home',component:AdminLayoutComponent,canActivate:[AdminGuard],
    children:[{path:"",loadChildren: () => import('./views/Admin/admin-home/adminhome.module').then(m => m.AdminhomeModule)}],
  },
  {
    path:'admin/managecontent',component:AdminLayoutComponent,canActivate:[AdminGuard],
    children:[{path:"",loadChildren: () => import('./views/Admin/managecontent/content.module').then(m => m.ContentModule)}],
  },
  {
    path:'admin/managemessages',component:AdminLayoutComponent,canActivate:[AdminGuard],
    children:[{path:"",loadChildren: () => import('./views/Admin/managemessages/messages.module').then(m => m.MessagesModule)}],
  },
  {
    path:'admin/managenews',component:AdminLayoutComponent,canActivate:[AdminGuard],
    children:[{path:"",loadChildren: () => import('./views/Admin/managenews/news.module').then(m => m.NewsModule)}],
  },
  {
    path:'admin/managephotos',component:AdminLayoutComponent,canActivate:[AdminGuard],
    children:[{path:"",loadChildren: () => import('./views/Admin/managephotos/photos.module').then(m => m.PhotosModule)}],
  },
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
 
    initialNavigation: 'disabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
