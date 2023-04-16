import { Component , EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  @Output() sendingUserData = new EventEmitter<any>()

  userData = {
    userName:'',
    email:''
  }

  handleClick(){
    console.log(this.userData)
    const obj = {
      userName : this.userData.userName,
      email: this.userData.email
    }
    this.sendingUserData.emit(obj)
  }
}
