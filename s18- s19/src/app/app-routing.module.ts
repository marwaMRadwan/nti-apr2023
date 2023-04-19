import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { UpdateImageComponent } from './pages/update-image/update-image.component';

const routes: Routes = [
  {path:'' , component : IndexComponent},
  {path:'gallery' , component : GalleryComponent},
  {path:'login' , component:LoginComponent},
  {path:'update-image' , component:UpdateImageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
