import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfPrepDetailsMobileComponent } from './surf-prep-details-mobile.component';

describe('SurfPrepDetailsMobileComponent', () => {
  let component: SurfPrepDetailsMobileComponent;
  let fixture: ComponentFixture<SurfPrepDetailsMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfPrepDetailsMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfPrepDetailsMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
