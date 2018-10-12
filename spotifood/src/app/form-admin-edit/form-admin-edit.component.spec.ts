import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAdminEditComponent } from './form-admin-edit.component';

describe('FormAdminEditComponent', () => {
  let component: FormAdminEditComponent;
  let fixture: ComponentFixture<FormAdminEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAdminEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAdminEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
