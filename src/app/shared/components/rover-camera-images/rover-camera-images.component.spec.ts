import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoverCameraImagesComponent } from './rover-camera-images.component';

describe('RoverCameraImagesComponent', () => {
  let component: RoverCameraImagesComponent;
  let fixture: ComponentFixture<RoverCameraImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoverCameraImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoverCameraImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
