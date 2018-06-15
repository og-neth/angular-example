import { TestBed, inject } from '@angular/core/testing';

import { RoverImagesService } from './rover-images.service';

describe('RoverImagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoverImagesService]
    });
  });

  it('should be created', inject([RoverImagesService], (service: RoverImagesService) => {
    expect(service).toBeTruthy();
  }));
});
