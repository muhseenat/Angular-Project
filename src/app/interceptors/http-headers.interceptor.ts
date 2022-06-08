import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request.clone({
      setHeaders:{
        'x-rapidapi-key':'6854718310mshd262fa97f5e9331p122fddjsna39c757f5c80',
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
      },
      setParams:{
        key:'cba38b12ae4b45eea2c79c782d71b0f9'
      }
    })
    return next.handle(request)
  }
}
