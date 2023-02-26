import { filter, Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy,PLATFORM_ID, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from 'src/app/shared/services/ApiCrud/apiservice.service';
import { isPlatformServer } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit,OnDestroy {


  constructor(
    private _Router:Router,
    @Inject(PLATFORM_ID) platformID:Object,
    private _ApiserviceService:ApiserviceService) {
      this.isServer = isPlatformServer(platformID)
    }


SubscripArr:Subscription[] = []
sub:Subscription = new Subscription
isServer:boolean = false
CallApiSendMessage:Subscription = new Subscription
lang:string = ''
form:FormGroup = new FormGroup({
    name:new FormControl(null),
    email:new FormControl(null,[Validators.email]),
    enquiry:new FormControl(null),
    messages:new FormControl(null),
})
get name(){
    return this.form.get("name")
}
get email(){
    return this.form.get("email")
}
get enquiry(){
    return this.form.get("enquiry")
}
get messages(){
    return this.form.get("messages")
}


send(){
  if(this.name?.value == '' || this.name?.value == null){
    if(this.lang == 'ar'){
      alert("ادخل الاسم")
    }else{
      alert("Enter Your Name")
    }
    return
  }else if(this.email?.value == '' || this.email?.value  == null){
    if(this.lang == 'ar'){
      alert("ادخل البريد الالكتروني")
    }else{
      alert("Enter Your Email")
    }
    return
  }else if(this.email?.valid == false){
    if(this.lang == 'ar'){
      alert("ادخل البريد الالكتروني بشكل صحيح")
    }else{
      alert("Enter Email Correct")
    }
    return
  }else if(this.enquiry?.value == '' || this.enquiry?.value  == null){
    if(this.lang == 'ar'){
      alert("ادخل استفسارك")
    }else{
      alert("Enter Your Enquiry")
    }
    return
  }else if(this.messages?.value == '' || this.messages?.value == null){
    if(this.lang == 'ar'){
      alert("ادخل رسالتك")
    }else{
      alert("Enter Your Message")
    }
    return
  }else  {

  this.CallApiSendMessage=this._ApiserviceService.post("Contact",this.form.value).subscribe({
      next:(res:any)=>{
        if(this.lang == 'en'){
          alert("Sent Successfully Thank You For Contacting Us ")
        }else {
          alert("تم الارسال بنجاح شكرا لتواصلك معنا")
        }
        this.form.reset()
      }
    })
this.SubscripArr.push(this.CallApiSendMessage)

  }
}

ngOnInit(): void {
    this.getLanguage()

 this.sub = this._Router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe({
      next:(value:any)=>{
        let language = value.urlAfterRedirects.split('/')[1]
        this.lang = language
}});

this.SubscripArr.push(this.sub)

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
    for (let i = 0; i < this.SubscripArr.length; i++) {
      this.SubscripArr[i].unsubscribe()
    }
}



}
