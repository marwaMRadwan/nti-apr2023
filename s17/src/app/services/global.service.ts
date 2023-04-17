import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  AppTitle = "Angular"

  // "http://localhost:3000/products"
 
  constructor(private http : HttpClient) { }

  getPosts():Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
  }
  getSinglePost(postId:any):Observable<any>{
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  }
}
