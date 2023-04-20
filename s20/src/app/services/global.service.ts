import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http : HttpClient) { }

  baseUrl = "http://match.techsexperts.info/public/api/"

  login(obj : any):Observable<any>{
    return this.http.post(`${this.baseUrl}client/customer_login` , obj)
  }

  authUser():Observable<any>{
    return this.http.get(`${this.baseUrl}client/profile`)
  }
}
