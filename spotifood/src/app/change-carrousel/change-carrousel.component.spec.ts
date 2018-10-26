import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeCarrouselComponent } from './change-carrousel.component';

describe('ChangeCarrouselComponent', () => {
  let component: ChangeCarrouselComponent;
  let fixture: ComponentFixture<ChangeCarrouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeCarrouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
