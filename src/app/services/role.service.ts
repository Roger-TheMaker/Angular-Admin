import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.api}/roles`;
   }

  all(): any {
   return this.http.get(this.url);
  }

  delete(id: number): any{
    return this.http.delete(`${this.url}/${id}`);
  }
}
