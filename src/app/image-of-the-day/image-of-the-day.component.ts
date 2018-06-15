import { Component, OnInit } from '@angular/core';
import { RoverImagesService } from '../shared/services/rover-images.service';

@Component({
  selector: 'app-image-of-the-day',
  templateUrl: './image-of-the-day.component.html',
  styleUrls: ['./image-of-the-day.component.scss']
})
export class ImageOfTheDayComponent implements OnInit {

  public imageOfTheDay;
  public isLoading = true;

  public constructor(private roverService: RoverImagesService) { }

  ngOnInit() {
    this.getImageOfTheDay();
  }

  getImageOfTheDay() {
    this.roverService.getImageOfTheDay().subscribe(
      response => {
        console.log(response);
        if (response.photos.length === 0) {
          this.getImageOfTheDay();
        } else {
          this.imageOfTheDay = this.roverService.getRandom(response.photos);
          this.isLoading = false;
        }

        console.log(this.imageOfTheDay);
      },
      err => console.error(err),
      () => console.log('done getting image'));
  }

}
