import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  counter = 0

  inputValue:any

  obj={
    name:'',
    email:''
  }

  handleKeyUp(eve :any){
    console.log(eve.target.value)

  }

  handleInput(element:any){
    console.log(element.value)
  }

  handleCounter(flag:string){
    (flag == 'decrement') ? this.counter-- : this.counter++
  }

  handleValue(even :any){
    this.inputValue = even.target.value

    console.log(this.inputValue)
  }

  handleClick(){
    console.log(this.obj)
  }

  // let input = document.getElementById('input')

  // input?.addEventListener('keyup' , function(e){

  // })
}
