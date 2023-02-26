import { HttpClient } from '@angular/common/http';
import {  Inject, Injectable,PLATFORM_ID } from '@angular/core';
import {  Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DOCUMENT } from '@angular/common';
import { isPlatformServer } from '@angular/common';
import { CookieService } from '@gorniv/ngx-universal';


@Injectable({
  providedIn: 'root'
})

export class ApiserviceService {

  isServer:boolean = false
  isLoading:boolean = false

  constructor(
    @Inject(PLATFORM_ID) platformID:Object,
    private _HttpClient:HttpClient,
    @Inject(DOCUMENT) private document: Document,
    private cookieService:CookieService) {
      this.isServer = isPlatformServer(platformID)
    }

  get<T>(controller:string , actionUrl?:string):Observable<T>{
    if (actionUrl == undefined) {
      return this._HttpClient.get<T>(`${environment.url}/${controller}`)
    } else {
      return this._HttpClient.get<T>(`${environment.url}/${controller}/${actionUrl}`)
    }
  }

  getById<T>( controller:string , modelID:number | string , actionUrl?:string):Observable<T> {
    if (actionUrl == undefined) {
      return this._HttpClient.get<T>(`${environment.url}/${controller}/${modelID}`)
    } else {
      return this._HttpClient.get<T>(`${environment.url}/${controller}/${actionUrl}/${modelID}`)
    }
  }

  post<T>(controller:string , model:T , actionUrl?:string):Observable<T> {
    if (actionUrl == undefined) {
      return this._HttpClient.post<T>(`${environment.url}/${controller}/`,model)
    }else{
      return this._HttpClient.post<T>(`${environment.url}/${controller}/${actionUrl}/`,model)
    }
  }

  delete<T>(controller:string , modelID:any , actionUrl?:string):Observable<T>{
    if (actionUrl == undefined) {
      return this._HttpClient.delete<T>(`${environment.url}/${controller}/${modelID}`)
    }else{
      return this._HttpClient.delete<T>(`${environment.url}/${controller}/${actionUrl}/${modelID}`)
    }
  }

  put<T>(controller:string  , modelID:number | string, model:T  , actionUrl?:string ):Observable<T>{
    if (actionUrl == undefined) {
      return this._HttpClient.put<T>(`${environment.url}/${controller}/${modelID}`,model)
    }else{
      return this._HttpClient.put<T>(`${environment.url}/${controller}/${actionUrl}/${modelID}`,model)
    }
  }

  getToken():any {
    if(this.isServer){
      return ''
    }else {
      let token = this.cookieService.get("Token")
      if(token != '' && token != undefined && token != null){
        return token;
      }else {
        return ''
      }
    }
  }




}
