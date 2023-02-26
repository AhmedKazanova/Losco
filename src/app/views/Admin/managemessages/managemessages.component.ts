import { Component, OnInit, OnDestroy,PLATFORM_ID, Inject  } from '@angular/core';
import { NavigationEnd,Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { ApiserviceService } from 'src/app/shared/services/ApiCrud/apiservice.service';
import { Contact } from '../models/contact';
import { isPlatformServer } from '@angular/common';


@Component({
  selector: 'app-managemessages',
  templateUrl: './managemessages.component.html',
  styleUrls: ['./managemessages.component.css']
})
export class ManagemessagesComponent implements OnInit,OnDestroy{

  isServer:boolean = false

  constructor (
    @Inject(PLATFORM_ID) platformID:Object,
    private _Router:Router,
    private _ApiserviceService:ApiserviceService) {
      this.isServer = isPlatformServer(platformID)
    }

  SubscripArr:Subscription[] = []
  lang:string = ''
  messagesArr:Contact[] = []
  sub:Subscription = new Subscription

  ngOnInit(): void {
    this.getLanguage()
    this.getMessages()



    this.sub=  this._Router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe({
      next:(value:any)=>{
        let language = value.urlAfterRedirects.split('/')[1]
        this.lang = language
  }});
  this.SubscripArr.push(this.sub)
  }


  getMessages(){
  let CallApiMessages:Subscription =  this._ApiserviceService.get("Contact").subscribe({
      next:(res:any)=>{
        this.messagesArr = res
      }
    })

    this.SubscripArr.push(CallApiMessages)
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
  delete(message:Contact){
    let confirm:boolean

    if(this.lang == 'ar'){
      confirm = window.confirm("هل انت متاكد من الحذف ؟")
    }else {
      confirm = window.confirm("Are You Sure ?")
    }

    if(confirm){
      let CallApiDeleteMessages:Subscription =   this._ApiserviceService.delete("Contact",message.id).subscribe({
        next:(res:any)=>{

          if(this.lang == 'ar'){
            alert("تم الحذف بنجاح")
          }else {
            alert("Delete Success")
          }
          this.getMessages()
        }
      })

      this.SubscripArr.push(CallApiDeleteMessages)
    }


  }

  ngOnDestroy(): void {
    for (let i = 0; i < this.SubscripArr.length; i++) {
      this.SubscripArr[i].unsubscribe()
    }
  }


}
