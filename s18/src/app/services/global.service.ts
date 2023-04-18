import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http : HttpClient) { }

  getGallery():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/photos')

  }
}
