import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class CredentialInterceptor implements HttpInterceptor {
  // Folosit pentru partea comuna in care avem nevoie de bearer token pentru autorizare
  // interceptorul se ataseaza de orice request de care este nevoie

  // prin punerea lui in app.module.ts acesta se va atasa de fiecare request
  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const req = request.clone({
      withCredentials: true
      // now we are passing cookies back and forth
    });

    return next.handle(req);
  }
}
