import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdatokService {

  private url = "http://localhost:3000/api/flowers";

  constructor(private http:HttpClient) { }

  get(): Observable<any>{
    return this.http.get<any>(this.url);
  }
}
