import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-profile2',
  templateUrl: './profile2.component.html',
  styleUrls: ['./profile2.component.css']
})
export class Profile2Component {

  model = {
    customer_first_name :'',
    customer_last_name :'',
    customer_email :'',
  }

  constructor(private global : GlobalService){}

  ngOnInit(){
    this.global.authUser().subscribe(res=>{
      this.model = res.data
    })
  }
}
