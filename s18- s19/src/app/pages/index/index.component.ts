import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  constructor(private global : GlobalService){
    this.global.getProfile().subscribe(res=>{
      console.log(res)
    })
  }
}
