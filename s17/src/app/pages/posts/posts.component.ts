import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  {

 
  posts:any[] = []
  constructor(public global : GlobalService){
    console.log('constructor')
    console.log(this.global.AppTitle)

    this.global.getPosts().subscribe(data=>{
      console.log(data)
      this.posts = data
    })

  }
  ngOnInit(){
    console.log("ng on init")
  }
}
