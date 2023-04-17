import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { PostsComponent } from './pages/posts/posts.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { BlogsComponent } from './pages/blogs/blogs.component';

const routes: Routes = [
  {path:'' , component:IndexComponent},
  {path:'posts' , component : PostsComponent},
  {path:'gallery' , component: GalleryComponent},
  {path:'blogs' , component:BlogsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
