import { ApiserviceService } from 'src/app/shared/services/ApiCrud/apiservice.service';
import { Inject, Injectable,PLATFORM_ID } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { CookieService } from '@gorniv/ngx-universal';
import jwtDecode from 'jwt-decode';
import { isPlatformServer } from '@angular/common';



@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  AdminIsLogin:any
  isServer:boolean = false

  constructor(
    @Inject(PLATFORM_ID) platformID:Object,
    private _Router:Router ,
    private cookieService:CookieService,
    private _ApiserviceService:ApiserviceService){

      this.isServer = isPlatformServer(platformID)
      this.adminLogin()

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {

      this.adminLogin()

      if(this.adminLogin() == true && this.AdminIsLogin.Role  === 'Admin'){
        return true
       }else{
        this._Router.navigate(['NotFound'])
         return false
       }

  }

adminLogin():any{

if(this.isServer){
  return ''
}else {
  let decodeData = this.cookieService.get('Token')
  if(decodeData == undefined || decodeData == null || decodeData == ''){
    return false
  }else {
    this.AdminIsLogin = jwtDecode(decodeData)
    return true
  }
}


}



}
