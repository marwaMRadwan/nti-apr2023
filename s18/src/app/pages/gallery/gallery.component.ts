import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  photos:any
  loadingFlag = true

  constructor(private global : GlobalService){
    this.global.getGallery().subscribe(res=>{
      this.photos = res
    },(e)=>{
      console.log(e)
    },()=>{
      this.loadingFlag = false
    })
  }
}
