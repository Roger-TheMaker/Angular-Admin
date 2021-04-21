import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends RestService{
  endpoint(): string {
    return 'orders';
  }

  export(): Observable<any> {
    return this.http.get(`${environment.api}/export`, {responseType: 'blob'}); // Modification
  }

  chart(): Observable<any> {
    return this.http.get(`${environment.api}/chart`);
  }
}
