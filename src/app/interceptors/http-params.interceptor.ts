import { Injectable } from '@angular/core';

import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
  } from '@angular/common/http';
  import { Observable } from 'rxjs';

@Injectable()
export class HttpParamsInterceptor implements  HttpInterceptor {
    constructor(){}

    interecpt(
        req:HttpRequest<any>,
        next:HttpHandler
    ):Observable<HttpEvent<any>>{

    }
}