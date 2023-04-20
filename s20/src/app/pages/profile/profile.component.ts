import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

profile = new FormGroup({
  customer_first_name : new FormControl(),
  customer_last_name : new FormControl(),
  customer_email : new FormControl()
})
  constructor(private global :GlobalService){


  }

  ngOnInit(){
    this.global.authUser().subscribe(res=>{
      console.log(res)
      this.profile.patchValue(res.data)
      // this.profile.setValue(res.data)
    })
  }

}
