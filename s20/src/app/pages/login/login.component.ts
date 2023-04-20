import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({
    email : new FormControl('' ,
     [Validators.required , Validators.email , Validators.minLength(10)]), // Validators.pattern()
    password: new FormControl('' , [Validators.required])
  })

  isSubmit = false
  constructor(private global : GlobalService , private router : Router){}

  get userEmail(){return this.loginForm.get('email')}
  get userPassword(){return this.loginForm.get('password')}

  get userData(){return this.loginForm.controls}



  handleSubmit(){
    console.log(this.loginForm)
    this.isSubmit = true
    if(this.loginForm.valid){
      this.global.login(this.loginForm.value).subscribe(res=>{
        console.log(res)
        if(res.status) {
          
          localStorage.setItem('token' , res.data.token)
          this.router.navigateByUrl('/profile')
        }
      })
    }
  }


}
