import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparateurProduitComponent } from './comparateur-produit.component';

describe('ComparateurProduitComponent', () => {
  let component: ComparateurProduitComponent;
  let fixture: ComponentFixture<ComparateurProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparateurProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparateurProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
