import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ImageResponse } from '../../models/image-model';

@Component({
  selector: 'app-rover-camera-images',
  templateUrl: './rover-camera-images.component.html',
  styleUrls: ['./rover-camera-images.component.scss']
})
export class RoverCameraImagesComponent implements OnInit {

  @Input() images: any;
  @Input() rover: string;
  @Output() click = new EventEmitter<any>();

  public emitClick(rover: string, camera: string) {
    const typeObj = {'rover': rover, 'camera': camera};
    this.click.emit(typeObj);
    // this.click.emit(`${rover},${camera}`);
  }


  constructor() { }

  ngOnInit() {
  }

}
