import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

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
}
