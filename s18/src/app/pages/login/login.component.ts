import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model : User ={
    email:'',
    password:'',
    // address :{
    //   city:'',
    //   country:''
    // }
  }

  // modelData = {
  //   email : 'nouran@email.com',
  //   password : '12345',
  //   address : {
  //     city : '',
  //     country : '' 
  //   }
  // }
  msgError = null
  constructor(private global : GlobalService , private router : Router){}
  handleSubmit(form : NgForm){
    console.log(form)
    if(form.valid){
      this.global.login(this.model).subscribe(res=>{
        console.log(res)

        if(res.status) this.router.navigateByUrl('/gallery')

      }, (e)=>{
        console.log(e.error.message)
        this.msgError = e.error.message
      })
    }
  }
}
