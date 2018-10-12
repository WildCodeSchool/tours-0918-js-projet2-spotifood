import { TestBed } from '@angular/core/testing';

import { GallerieService } from './gallerie.service';

describe('ProduitAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GallerieService = TestBed.get(GallerieService);
    expect(service).toBeTruthy();
  });
});
