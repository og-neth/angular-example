import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RoverImagesService} from './shared/services/rover-images.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ImageOfTheDayComponent } from './image-of-the-day/image-of-the-day.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { RoverCameraImagesComponent } from './shared/components/rover-camera-images/rover-camera-images.component';
import { DatepickerComponent } from './shared/components/datepicker/datepicker.component';


@NgModule({
  declarations: [
    AppComponent,
    ImageOfTheDayComponent,
    ImageGalleryComponent,
    RoverCameraImagesComponent,
    DatepickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [
    RoverImagesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
