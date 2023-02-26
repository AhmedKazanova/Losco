import { Component, Inject, OnInit, PLATFORM_ID, OnDestroy } from '@angular/core';
import { NavigationEnd,Router } from '@angular/router';
import { ApiserviceService } from 'src/app/shared/services/ApiCrud/apiservice.service';
import { DOCUMENT } from '@angular/common';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { filter } from 'rxjs/operators';
import { CookieService } from '@gorniv/ngx-universal';
import jwtDecode from 'jwt-decode';
import { isPlatformServer } from '@angular/common';
import { Manager } from 'src/app/views/Admin/models/Manager';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-blank-layout',
  templateUrl: './blank-layout.component.html',
  styleUrls: ['./blank-layout.component.css']
})
export class BlankLayoutComponent implements OnInit,OnDestroy {
  SubscriptionArr:Subscription[] = []
  locales = this.localizeRouterService.parser.locales;
  currentUrl = '';
  lang:string = ''
  adminLogin:boolean = false
  isServer:boolean = false
  url:string = `${environment.imageUrl}`
  logo:Manager = {
    id: 0,
    arabicHeading: '',
    englishHeading: '',
    arabicText: '',
    englishText: '',
    imagePath: '',
    changetype: '',
    type: 0
  }
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private localizeRouterService: LocalizeRouterService,
    private _ApiserviceService:ApiserviceService ,
    private _Router:Router,
    private cookieService:CookieService,
    @Inject(PLATFORM_ID) platformID:Object) {
      this.isServer = isPlatformServer(platformID)
     }


ngOnInit(): void {

  if(this.isServer == false){
    const navbar = this.document.getElementsByTagName('nav')[0] as HTMLElement;
    window.onscroll = ()=>{
      if(window.scrollY > 0){
         navbar.classList.add("isActive")
      }else {
         navbar.classList.remove("isActive")
      }
    }
  }


    this.adminisLogin()
    this.setCurrentUrl()
    this.getLogo()

let sub:Subscription=this._Router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe({
      next:(value:any)=>{

        this.setCurrentUrl()

        let language = value.urlAfterRedirects.split('/')[1]

        if(language == 'ar'){
          this.document.documentElement.lang = 'ar';
          this.document.documentElement.dir = 'rtl';
          this.lang = 'ar'
        }else if(language == 'en'){
          this.document.documentElement.lang = 'en';
          this.document.documentElement.dir = 'ltr';
          this.lang = 'en'
        }

      }
});
this.SubscriptionArr.push(sub)


}

setCurrentUrl(): void {
  this.currentUrl = this._Router.url
  .replace('/' + this.localizeRouterService.parser.currentLang, '').split('?')[0];

  if(!this.isServer){
    if(this.currentUrl == ''){
      let currentLang = localStorage.getItem("LOCALIZE_DEFAULT_LANGUAGE")
     if(currentLang != null){
        this._Router.navigate([`${currentLang}/mainpage`])
      }else {
        this._Router.navigate([`/`])
      }
    }
  }


}

getLogo(){
 let getLogo:Subscription = this._ApiserviceService.getById("Manager",4).subscribe({
    next:(res:any)=>{
      if(res.length > 0){
        this.logo = res[0]
        this.logo.imagePath = this.url+this.logo.imagePath
        getLogo.unsubscribe()
      }
    }
  })
  this.SubscriptionArr.push(getLogo)
}

adminisLogin(){
  if(this.isServer){
    return
  }else {
    let adminLogin = this.cookieService.get("Token")

    if(adminLogin != null && adminLogin != undefined && adminLogin != ''){

      let object:any = jwtDecode(adminLogin)

      if(object.Role == 'Admin'){
        this.adminLogin = true
      }

    }
  }
}


logout(){
  this.adminLogin = false
  if(!this.isServer){
    let currentLang = localStorage.getItem("LOCALIZE_DEFAULT_LANGUAGE")
    if(currentLang != null){
      this._Router.navigate([`${currentLang}/mainpage`])
    }else {
      this._Router.navigate([`/`])
    }
  }
  this.cookieService.remove("Token")
}

ngOnDestroy(): void {
  for (let i = 0; i < this.SubscriptionArr.length; i++) {
    this.SubscriptionArr[i].unsubscribe()
  }
}

}
