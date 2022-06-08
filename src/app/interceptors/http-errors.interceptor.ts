import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError,  Observable, throwError  as observableThrowError } from 'rxjs';

@Injectable()
export class HttpErrorsInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return next.handle(request).pipe(
      catchError((err)=>{
        console.log(err);
        return observableThrowError(err)
      })
    )
  }
}
// 7f81c0af40msh1b05196cabfa91ep15c9c8jsn37c54bf00515
// cba38b12ae4b45eea2c79c782d71b0f9