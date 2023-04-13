import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 's15';
  courseName : string = "Angular"
  inputType : string = "password"
  isDisabled : boolean = true
  className = "form-control"
  elementText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ducimus."
  textRed = "red"
  textColorFlag = false
  imgPath : string = "assets/images/img.avif"
  getCourseName(){
    return 'Angular Course'
  }

  getFullName(firstName :string , lastName:string){
    return `${firstName} ${lastName}`
  }

  getTextColor(){
    return 'green'
  }

  handleChangeImage(){
    this.imgPath = "assets/images/img2.jpg"
  }

  
}


