import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContribuerComponent } from './page-contribuer.component';

describe('PageContribuerComponent', () => {
  let component: PageContribuerComponent;
  let fixture: ComponentFixture<PageContribuerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageContribuerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageContribuerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
