import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { PostsComponent } from './pages/posts/posts.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { AddPostComponent } from './pages/add-post/add-post.component';

const routes: Routes = [
  {path:'' , component:IndexComponent},
  
  {path:'posts' , children:[
    {path:'' , component : PostsComponent },
    {path:':singlePostId' , component : SinglePostComponent },
    {path:'addPost' , component : AddPostComponent },
  ]},

  // {path:'posts/:postId' , component:SinglePostComponent},
  // {path:'posts/add' , component:AddPostComponent},
  // {path:'posts/single-post' , component:SinglePostComponent},
  {path:'gallery' , component: GalleryComponent},
  {path:'blogs' , component:BlogsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
