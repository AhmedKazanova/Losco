import { Component, Inject, OnDestroy, OnInit,PLATFORM_ID } from '@angular/core';
import { ApiserviceService } from '../../services/ApiCrud/apiservice.service';
import { NavigationEnd, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { CookieService } from '@gorniv/ngx-universal';
import jwtDecode from 'jwt-decode';
import { isPlatformServer } from '@angular/common';
import { Manager } from 'src/app/views/Admin/models/Manager';
import { environment } from 'src/environments/environment';
import { filter, Subscription } from 'rxjs';


@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit , OnDestroy {
  lang: string = ''
  SubscriptionArr: Subscription[] = [];
  locales = this.localizeRouterService.parser.locales;
  currentUrl = '';
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
    private localizeRouterService: LocalizeRouterService,
    @Inject(DOCUMENT) private document: Document,
    private _Router:Router,
    public _ApiserviceService:ApiserviceService,
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
    this.getLogo()
    this.adminisLogin()
    this.setCurrentUrl();

    let sub:Subscription=this._Router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe({
      next:(value:any)=>{

        this.setCurrentUrl()

        let language = value.urlAfterRedirects.split('/')[1]

        if(language == 'ar'){
          this.document.documentElement.lang = 'ar';
          this.document.documentElement.dir = 'rtl';
        }else if(language == 'en'){
          this.document.documentElement.lang = 'en';
          this.document.documentElement.dir = 'ltr';
        }

      }
    });
    this.SubscriptionArr.push(sub)
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
}

adminisLogin(){
  if(this.isServer){
    return
  }else {
    let adminLogin = this.cookieService.get("Token")

    if(adminLogin != null && adminLogin != undefined && adminLogin != ''){

      let object:any = jwtDecode(adminLogin)

      if(object.Roles == 'Admin'){
        this.adminLogin = true
      }

    }
  }
}

setCurrentUrl(): void {
this.currentUrl = this._Router.url
.replace('/' + this.localizeRouterService.parser.currentLang, '').split('?')[0];
}

logout(){
    this.cookieService.remove("userToken")
    this._Router.navigate(['/'])
}

ngOnDestroy(): void {

}

}
