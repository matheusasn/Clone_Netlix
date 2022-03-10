import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ListTitlesService {

  SERVER_URL = 'http://localhost:8585'

  constructor(private http: HttpClient) { }

  public listTitles() : Observable<any>{
   return this.http.get(`${this.SERVER_URL}/`);
  }
}
