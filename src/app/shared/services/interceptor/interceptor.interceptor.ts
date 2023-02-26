import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpEventType,
} from '@angular/common/http';
import { Observable, catchError, of, finalize, tap, filter } from 'rxjs';
import { ApiserviceService } from '../ApiCrud/apiservice.service';


@Injectable()

export class Interceptor implements HttpInterceptor {

  constructor(private _ApiserviceService:ApiserviceService ) {

  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    this._ApiserviceService.isLoading = true

    if(this._ApiserviceService.getToken() != '' && this._ApiserviceService.getToken() != undefined && this._ApiserviceService.getToken() != null){
      request = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${this._ApiserviceService.getToken()}`),
        reportProgress: true,
      });

    }

    return next.handle(request).pipe(
      catchError((error)=>{

        setTimeout(() => {
          this._ApiserviceService.isLoading = false
        }, 4000);

        return of(error)
      }),finalize(()=>{

        setTimeout(() => {
          this._ApiserviceService.isLoading = false
        }, 4000);

      })
    )
  }
}
