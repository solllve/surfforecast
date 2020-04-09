import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfSpotComponent } from './surf-spot.component';

describe('SurfSpotComponent', () => {
  let component: SurfSpotComponent;
  let fixture: ComponentFixture<SurfSpotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfSpotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfSpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
