import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { IndexComponent } from './pages/index/index.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CardComponent } from './components/card/card.component';
import { PostsComponent } from './pages/posts/posts.component';
import { ProductsComponent } from './pages/products/products.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UsersComponent } from './pages/users/users.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { ErrorpageComponent } from './pages/errorpage/errorpage.component';
import { LoginComponent } from './dashboard/pages/login/login.component';
import { AddFormComponent } from './dashboard/components/add-form/add-form.component';
import { SidebarComponent } from './dashboard/shared/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    BlogsComponent,
    ContactComponent,
    CardComponent,
    PostsComponent,
    ProductsComponent,
    UserFormComponent,
    UsersComponent,
    SinglePostComponent,
    ErrorpageComponent,
    LoginComponent,
    AddFormComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
