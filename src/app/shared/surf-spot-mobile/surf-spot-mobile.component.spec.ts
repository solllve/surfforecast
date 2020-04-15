import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfSpotMobileComponent } from './surf-spot-mobile.component';

describe('SurfSpotMobileComponent', () => {
  let component: SurfSpotMobileComponent;
  let fixture: ComponentFixture<SurfSpotMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfSpotMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfSpotMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
