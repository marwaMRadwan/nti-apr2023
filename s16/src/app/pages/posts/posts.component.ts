import { Component } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  posts = [{
    title : 'post title 1',
    body :'posts 1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sequi!'
  },
  {
    title : 'post title 2',
    body :'posts 2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sequi!'
  },
  {
    title : 'post title 3',
    body :'posts 3 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sequi!'
  },
  {
    title : 'post title 4',
    body :'posts 4 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sequi!'
  }
]
}
