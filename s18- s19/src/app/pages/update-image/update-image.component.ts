import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-update-image',
  templateUrl: './update-image.component.html',
  styleUrls: ['./update-image.component.css']
})
export class UpdateImageComponent {

  image : any
  model={
    firstName:''
  }
  constructor(private global : GlobalService){}
  handleChange(eve :any){
    console.log(eve)
    this.image = eve.target.files[0]
  }

  handleSubmit(){
    let formData = new FormData()
    formData.append('image' , this.image)
    formData.append('firstName' , this.model.firstName)
    formData.append('lastName' , 'Ahmed')

    this.global.updateImage(formData).subscribe(data=>{
      console.log(data)
    })
  }
}
