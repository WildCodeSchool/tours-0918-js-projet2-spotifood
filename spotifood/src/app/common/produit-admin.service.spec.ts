import { TestBed } from '@angular/core/testing';

import { ProduitAdminService } from './produit-admin.service';

describe('ProduitAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProduitAdminService = TestBed.get(ProduitAdminService);
    expect(service).toBeTruthy();
  });
});
