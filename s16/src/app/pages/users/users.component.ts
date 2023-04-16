import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users :any = []
  handleUser(eve:any){
    // console.log(eve)
    this.users.push(eve)


  }
}
