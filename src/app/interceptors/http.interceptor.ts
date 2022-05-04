import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpUserInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req:HttpRequest<any>,next:HttpHandler): Observable<HttpEvent<any>>{
    let token=localStorage.getItem('auth-token');
    if(!token){
        return next.handle(req)
    }
    return next.handle(req.clone({setHeaders:{['x-auth-token']:token}}))
}
}
