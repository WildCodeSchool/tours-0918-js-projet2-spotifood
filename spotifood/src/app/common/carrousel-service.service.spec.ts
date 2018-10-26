import { TestBed } from '@angular/core/testing';

import { CarrouselServiceService } from './carrousel-service.service';

describe('CarrouselServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarrouselServiceService = TestBed.get(CarrouselServiceService);
    expect(service).toBeTruthy();
  });
});
