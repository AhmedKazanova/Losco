import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ApiserviceService } from 'src/app/shared/services/ApiCrud/apiservice.service';
import { CookieService } from '@gorniv/ngx-universal';
import { isPlatformServer } from '@angular/common';
import { Inject,PLATFORM_ID } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { filter, Subscription } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit , OnDestroy {

  SubscripArr:Subscription[] = []
  sub:Subscription = new Subscription
  lang:string = ''
  data:any = {email:'',password:''}
  isServer:boolean = false
  userFormGrouplogin: FormGroup = new FormGroup(
    {
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(18)])
    }
  )



  constructor(
    @Inject(PLATFORM_ID) platformID:Object,
    private _ApiserviceService:ApiserviceService ,
    public _Router: Router,
    private cookieService:CookieService
    ) {
      this.isServer = isPlatformServer(platformID)
    }

    get email() {
      return this.userFormGrouplogin.get('email')
    }
    get password() {
      return this.userFormGrouplogin.get('password')
    }

  ngOnInit(): void {

    this.goToHome()

this.sub=this._Router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe({
      next:(value:any)=>{
        let language = value.urlAfterRedirects.split('/')[1]
        this.lang = language
}});
this.SubscripArr.push(this.sub)

  }


goToHome(){
  if(this.isServer){
    return
  }else {
    let token = this.cookieService.get("Token")!
    if(token != undefined && token != null && token != ''){
      let currentLang = localStorage.getItem("LOCALIZE_DEFAULT_LANGUAGE")
      if(currentLang !=null && currentLang != undefined && currentLang !=''){
        this._Router.navigate([`/${currentLang}/admin`])
      }
    }
  }
}

login(userFormGrouplogin: FormGroup) {

if (this.email?.value == null || this.email?.value == '') {

    if (this.lang == 'ar') {
      alert("'ادخل البريد الالكتروني'")
    } else {
      alert("'Enter The Email'")
    }
    return
} else if (this.password?.value == null || this.password?.value == '') {

        if (this.lang == 'ar') {
          alert("'ادخل كلمة المرور'")
        } else {
          alert("'Enter The Password'")
        }
        return
      }

      if (userFormGrouplogin?.valid == true) {

        let model = {
          Email :this.email?.value,
          Password:this.password?.value
        }



let CallApiLogin:Subscription=this._ApiserviceService.post("authentication/login",model).subscribe({
next:(res:any)=>{
  if(res.message == "success"){
    this.cookieService.put("Token" ,res.token )
    let currentLang = localStorage.getItem("LOCALIZE_DEFAULT_LANGUAGE")
    if(currentLang != null){
      this._Router.navigate([`/${currentLang}/admin`])
    }else{
      this._Router.navigate([`/`])
    }

  }}
})
this.SubscripArr.push(CallApiLogin)
}
}

ngOnDestroy(): void {
  for (let i = 0; i < this.SubscripArr.length; i++) {
    this.SubscripArr[i].unsubscribe()
  }
}

}
