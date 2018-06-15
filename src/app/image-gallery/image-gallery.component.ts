import { Component, OnInit } from '@angular/core';
import { RoverImagesService } from '../shared/services/rover-images.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss'],
})
export class ImageGalleryComponent implements OnInit {

  constructor(private roverService: RoverImagesService) { }

  public curiosityImages;
  public opportunityImages;
  public imagesFromRovers = [];
  public resultMsg = '';
  public showResultMsg = false;
  public initialTries = 0;
  public initCamera = this.roverService.cameras[0];
  public isLoading = true;
  public newDate;
  public curiosityRover = this.roverService.rovers[0];
  public opportunityRover = this.roverService.rovers[1];

  ngOnInit() {
    this.getImages(this.curiosityRover, this.initCamera, true);
    this.getImages(this.opportunityRover, this.initCamera, true);
  }

  // TODO cleaner way to pass data from the child to parent
  childClick(event) {
    console.log(event);
    // this.getImages(event.split(',')[0].toLowerCase(), event.split(',')[1].toLowerCase(), false);
    if (event.rover && event.camera) {
      this.getImages(event.rover.toLowerCase(), event.camera.toLowerCase(), false);
    }
  }

  getImagesInit(value: string) {
    this.getImagesByDate(this.curiosityRover, value);
    this.getImagesByDate(this.opportunityRover, value);
  }

  getImagesByDate(rover: string, value: string) {
    this.isLoading = true;
    this.roverService.getImagesByDate(rover, value).subscribe(
      response => {
        // this.imagesFromRovers.push(response.photos);
        console.log(this.imagesFromRovers);
        switch (rover) {
          case 'curiosity':
            this.curiosityImages = response.photos;
            this.imagesFromRovers.push(this.curiosityImages);
            break;
          case 'opportunity':
            this.opportunityImages = response.photos;
            this.imagesFromRovers.push(this.opportunityImages);
            break;
          default:
            console.log(rover);
            this.imagesFromRovers.push(response);
        }
      },
      err => console.error(err),
      () => {
        this.isLoading = false;
        console.log(`done for specified date`);
      }
    );
  }

  getImages(rover, camera, initialLoad = true) {
    this.showResultMsg = false;
    this.isLoading = true;
    this.roverService.getImages(rover, camera).subscribe(
      response => {
        console.log(response);
        console.log(rover);
        if (response.photos.length === 0) {
          if (initialLoad) {
            this.resultMsg = `No Images for camera: ${camera}, trying again with next camera`;
            this.showResultMsg = true;
            this.initialTries++;
            if (this.initialTries < this.roverService.cameras.length) {
              this.getImages(rover, this.roverService.cameras[this.initialTries], true);
            } else {
              this.resultMsg = `No Images available for any camera for ${rover} rover from yesterday, try and search another date`;
              this.showResultMsg = true;
            }
          } else {
            this.resultMsg = `No Images for camera: ${camera}`;
            this.showResultMsg = true;
          }
        } else {
          this.initialTries = 0;
          switch (rover) {
            case 'curiosity':
              this.curiosityImages = response.photos;
              this.imagesFromRovers.push(this.curiosityImages);
              break;
            case 'opportunity':
              this.opportunityImages = response.photos;
              this.imagesFromRovers.push(this.opportunityImages);
              break;
            default:
              console.log(rover);
              this.imagesFromRovers.push(response);
          }
        }

      },
      err => console.error(err),
      () => {
        this.isLoading = false;
        console.log(`done for: ${rover}`);
      }
    );
  }
}
