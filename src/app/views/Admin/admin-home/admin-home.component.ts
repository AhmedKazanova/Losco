import { Component, OnDestroy, OnInit,PLATFORM_ID, Inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { isPlatformServer } from '@angular/common';
import { filter, Subscription } from 'rxjs';


@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit , OnDestroy {
  lang:string = ''
  isServer:boolean = false
  sub:Subscription = new Subscription
  constructor( @Inject(PLATFORM_ID) platformID:Object,public _Router: Router) {
    this.isServer = isPlatformServer(platformID)
   }

    ngOnInit(): void {
      this.getLanguage()


  this.sub =this._Router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe({
        next:(value:any)=>{
          let language = value.urlAfterRedirects.split('/')[1]
          this.lang = language
  }});

    }

    getLanguage():any{
      if(this.isServer){
        return ''
      }else {
        let currentLang = localStorage.getItem("LOCALIZE_DEFAULT_LANGUAGE")
        if(currentLang != undefined && currentLang != null && currentLang != ''){
          this.lang = currentLang
        }
      }
    }


  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

}
