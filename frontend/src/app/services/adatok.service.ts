import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdatokService {

  private url = "http://localhost:3000/api/flowers";
  constructor(private http: HttpClient) { }
  get(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  id: number = 0;

  id_mentes(kapottid: number) {
    this.id = kapottid;
  }

  getid(): Observable<any>{
    return this.http.get<any>(`${this.url}/${this.id}`);
  }

  put(id:number, keszlet:any): Observable<any>{
    return this.http.put<any>(`${this.url}/${id}`, keszlet)
  }
  
}