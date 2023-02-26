import { HTTP_INTERCEPTORS } from "@angular/common/http"
import { ErrorInterceptor } from "./error.interceptor"
import { Interceptor } from "./interceptor.interceptor"



export const httpInterceptorProviders = [
  {provide:HTTP_INTERCEPTORS , useClass:Interceptor , multi:true},
  {provide:HTTP_INTERCEPTORS , useClass:ErrorInterceptor , multi:true}

]
