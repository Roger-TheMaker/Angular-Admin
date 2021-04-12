import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(protected http: HttpClient) { }

  login(data): Observable<any> {
    return  this.http.post(`${environment.api}/login`, data);
    }

    register(data): Observable<any> {
      return  this.http.post(`${environment.api}/register`, data);
      }

    user(): Observable<any>{
      return this.http.get<User>(`${environment.api}/user`);
      }

      updateInfo(data): Observable<User> {
        return this.http.put<User>(`${environment.api}/users/info`, data);
      }

      updatePassword(data): Observable<User> {
        return this.http.put<User>(`${environment.api}/users/password`, data);
      }

      logout(): Observable<void> {
        return this.http.post<void>(`${environment.api}/logout`, {});
      }
}
