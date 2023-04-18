import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http : HttpClient) { }

  baseUrl = "http://match.techsexperts.info/public/api/"
  
  getGallery():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/photos')

  }

  login(data: any):Observable<any>{
    return this.http.post(`${this.baseUrl}login` , data)
  }
}
