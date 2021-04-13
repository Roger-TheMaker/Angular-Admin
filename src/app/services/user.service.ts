import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.api}/users`;
   }

  all(page: number): any {
   return this.http.get(`${this.url}?page = ${page}`); // Really Nigger
  }

  delete(id: number): any{
    return this.http.delete(`${this.url}/${id}`);
  }
}
