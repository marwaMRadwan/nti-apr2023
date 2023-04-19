import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  pageType : any
    constructor(private global : GlobalService , private router : Router , 
    private Activatedroute : ActivatedRoute){
      this.Activatedroute.data.subscribe(res=>{
          this.pageType = res['type']
          if(this.pageType == 'admin') this.global.navbarFlag = false
          console.log(this.pageType)
      })

    }
  handleSubmit(form : NgForm){
    console.log(form)
    if(form.valid){
      if(this.pageType == 'user'){
        this.global.userLogin(this.model).subscribe(res=>{
          console.log(res)
  
          // localStorage.setItem('token' , res.data.token)
          this.global.isLogin = true
          if(res.status) this.router.navigateByUrl('/gallery')
  
        }, (e)=>{
          console.log(e.error.message)
          this.msgError = e.error.message
        })
      }
      else if (this.pageType == 'admin') {
        this.global.AdminLogin(this.model).subscribe(res=>{
          if(res.status) this.router.navigateByUrl('/dashboard/profile')
        })
      }


    }
  }
 

}
