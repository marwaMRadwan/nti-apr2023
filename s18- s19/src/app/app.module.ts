import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { UpdateImageComponent } from './pages/update-image/update-image.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { NavbarDashboardComponent } from './dashboard/shared/navbar-dashboard/navbar-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    IndexComponent,
    LoginComponent,
    UpdateImageComponent,
    ProfileComponent,
    NavbarDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
