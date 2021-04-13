import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  all(page: number): any{
   return this.http.get(`${environment.api}/users?page=${page}`); // Really Nigger
  }
}
