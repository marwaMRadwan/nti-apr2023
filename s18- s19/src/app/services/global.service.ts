import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http : HttpClient) { }

  baseUrl = "http://match.techsexperts.info/public/api/"
  isLogin = false
  navbarFlag = true
  
  getGallery():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/photos?_limit=10')

  }

  // customer@hotmail.com
  AdminLogin(data: any):Observable<any>{
    return this.http.post(`${this.baseUrl}client/customer_login` , data)
  }

  // Nouran@gmail.com
  userLogin(obj:any) :  Observable<any>{
    return this.http.post(`${this.baseUrl}login` , obj)
  }

  updateImage(obj:any):Observable<any>{
    // if(localStorage.getItem('token')){
    //   let headers = new HttpHeaders().set('Authorization' , `Bearer ${localStorage.getItem('token')}`)
    // }
    return this.http.post(`${this.baseUrl}client/update-profile-image` , obj)
  }

  getProfile(): Observable<any>{
    return this.http.get(`${this.baseUrl}client/profile `)
  }

  uploadUserImage(obj:any):Observable<any>{
    return this.http.post(`${this.baseUrl}client/update-profile-image` , obj)
  }

}
