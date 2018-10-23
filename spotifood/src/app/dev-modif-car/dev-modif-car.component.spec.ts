import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevModifCarComponent } from './dev-modif-car.component';

describe('DevModifCarComponent', () => {
  let component: DevModifCarComponent;
  let fixture: ComponentFixture<DevModifCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevModifCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevModifCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
