import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';
import { ApiserviceService } from 'src/app/shared/services/ApiCrud/apiservice.service';
import { DOCUMENT } from '@angular/common';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { filter } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Manager } from 'src/app/views/Admin/models/Manager';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css']
})

export class AuthLayoutComponent implements OnInit,OnDestroy {

  locales = this.localizeRouterService.parser.locales;
  currentUrl = '';
  lang:string = ''
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
  SubscriptionArr:Subscription[] = []
  constructor(

    @Inject(DOCUMENT) private document: Document,
    private _ApiserviceService:ApiserviceService ,
    private _Router:Router ,
    private localizeRouterService: LocalizeRouterService) { }

ngOnInit(): void {


this.setCurrentUrl()

let sub:Subscription=  this._Router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe({next:(value:any)=>{

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

this.getLogo()

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

setCurrentUrl(): void {
this.currentUrl = this._Router.url
.replace('/' + this.localizeRouterService.parser.currentLang, '').split('?')[0];
}

ngOnDestroy(): void {
  for (let i = 0; i < this.SubscriptionArr.length; i++) {
    this.SubscriptionArr[i].unsubscribe()
  }
}

}
