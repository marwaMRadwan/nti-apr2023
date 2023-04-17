import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent {
  id : any
  singlePost:any
  posts:any[]=[]
  constructor(private global : GlobalService , private _activatedRoute : ActivatedRoute , private _route : Router){

    console.log(this._activatedRoute.snapshot.paramMap.get('singlePostId'))
    
    // let id = this._activatedRoute.snapshot.paramMap.get('singlePostId')

    // this.id = this._activatedRoute.snapshot.paramMap.get('singlePostId')
    //   global.getSinglePost(this.id).subscribe(res=>{
    //     this.singlePost = res
    //   })

      this.global.getPosts().subscribe(res=>{
        this.posts = res
      })

      this._activatedRoute.paramMap.subscribe(params=>{
        console.log(params)
        let id = params.get('singlePostId')
        global.getSinglePost(id).subscribe(res=>{
          this.singlePost = res
        })

      })

      // this._route.navigateByUrl('')

  }

  



}
