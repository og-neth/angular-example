import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ImageOfTheDayComponent } from './image-of-the-day/image-of-the-day.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';

const routes: Routes = [
  {path: '', redirectTo: '/image-of-the-day', pathMatch: 'full'},
  {path: 'image-of-the-day', component: ImageOfTheDayComponent},
  {path: 'image-gallery', component: ImageGalleryComponent}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
