import { Component } from '@angular/core';
import { GlobalService } from './services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 's18';

  constructor(public global: GlobalService){
    let token = localStorage.getItem('token')
    if(token){
      global.isLogin = true
    }
  }
}
