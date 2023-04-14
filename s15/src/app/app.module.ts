import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { IndexComponent } from './pages/index/index.component';
import { CardComponent } from './components/card/card.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PostsComponent } from './pages/posts/posts.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    IndexComponent,
    CardComponent,
    ContactComponent,
    FooterComponent,
    PostsComponent
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
