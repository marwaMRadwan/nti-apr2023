import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {


  handleKeyUp(eve :any){
    console.log(eve.target.value)

  }

  handleInput(element:any){
    console.log(element.value)
  }

  // let input = document.getElementById('input')

  // input?.addEventListener('keyup' , function(e){

  // })
}
