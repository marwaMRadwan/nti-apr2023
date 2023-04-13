import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { IndexComponent } from './pages/index/index.component';
import { CardComponent } from './components/card/card.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './shared/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    IndexComponent,
    CardComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
