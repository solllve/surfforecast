import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfWeatherMobileComponent } from './surf-weather-mobile.component';

describe('SurfWeatherMobileComponent', () => {
  let component: SurfWeatherMobileComponent;
  let fixture: ComponentFixture<SurfWeatherMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfWeatherMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfWeatherMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
