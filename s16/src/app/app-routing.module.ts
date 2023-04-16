import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { PostsComponent } from './pages/posts/posts.component';
import { ProductsComponent } from './pages/products/products.component';
import { UsersComponent } from './pages/users/users.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { ErrorpageComponent } from './pages/errorpage/errorpage.component';

const routes: Routes = [
  {path:'' , component : IndexComponent},
  {path:'posts' , component : PostsComponent},
  {path:'blogs' , component : BlogsComponent},
  {path:'products' , component : ProductsComponent},
  {path:'users' , component : UsersComponent},
  {path:'posts/single' , component : SinglePostComponent},
  {path:"**" , component : ErrorpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
