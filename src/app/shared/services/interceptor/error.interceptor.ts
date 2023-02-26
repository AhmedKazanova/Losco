import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ApiserviceService } from '../ApiCrud/apiservice.service';
import { isPlatformServer } from '@angular/common';
import {  PLATFORM_ID, Inject  } from '@angular/core';


@Injectable()

export class ErrorInterceptor implements HttpInterceptor {
  currentLang:string = ''
  errorArr:any[] = []
  isServer:boolean = false

  constructor(@Inject(PLATFORM_ID) platformID:Object,private _ApiserviceService:ApiserviceService) {

    this.isServer = isPlatformServer(platformID)

    if(this.isServer){
      return
    }else {
      let currentLang = localStorage.getItem("LOCALIZE_DEFAULT_LANGUAGE")
      if(currentLang != undefined && currentLang != null && currentLang != ''){
        this.currentLang = currentLang
      }
    }





  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return next.handle(request).pipe(
      catchError(err=>{

       if(err.status == 404){

        // if(this.currentLang == 'en'){
        //   alert("Data NotFound")
        // }else{
        //   alert("لا يوجد بيانات")
        // }

       }else if(err.status == 401 || err.status == 403){

       // alert(`${err.error.message}`)

       }else if(err.status == 400 ){

        // if(this.currentLang == 'en'){
        //   alert("Error Data Sent")
        // }else{
        //   alert("خطا بالبيانات المرسلة")
        // }

       }else if(err.status == 415){

        // if(this.currentLang == 'en'){
        //   alert("Error Empty")
        // }else{
        //   alert("خطا البيانات فارغة")
        // }

       }else if(err.status == 501){

        // if(this.currentLang == 'en'){
        //   alert("Error  Details")
        // }else{
        //   alert("خطا ببيانات ")
        // }

       }else if(err.status == 0 || err.status == 500){

        // if(this.currentLang == 'en'){
        //   alert("Unknown Please Refresh")
        // }else{
        //   alert("هناك خطا من فضلك اعد التحديث")
        // }

       }
        return throwError(()=> err )
      })
    )


  }
}
