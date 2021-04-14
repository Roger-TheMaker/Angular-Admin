import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export abstract class RestService {

  abstract endpoint(): string;

  constructor(private http: HttpClient) {}

  get url(): any{
    return `${environment.api}/${this.endpoint()}`;
  }

  all(page?: number): any {
   let url = this.url;

   if (page){
     url += `?page=${page}`;
   }
   return this.http.get(url); // Really Nigger
  }

  create(data): any{
    return this.http.post(this.url, data);
  }

  delete(id: number): any{
    return this.http.delete(`${this.url}/${id}`);
  }

  get(id: number): any{
    return this.http.get(`${this.url}/$id`); // merge
  }

  update(id: number, data): any{
    return this.http.put(`${this.url}/$id`, data);
  }
}
