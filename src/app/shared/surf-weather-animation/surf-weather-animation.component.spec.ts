import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfWeatherAnimationComponent } from './surf-weather-animation.component';

describe('SurfWeatherAnimationComponent', () => {
  let component: SurfWeatherAnimationComponent;
  let fixture: ComponentFixture<SurfWeatherAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfWeatherAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfWeatherAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
