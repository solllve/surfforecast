import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfPrepDetailsComponent } from './surf-prep-details.component';

describe('SurfPrepDetailsComponent', () => {
  let component: SurfPrepDetailsComponent;
  let fixture: ComponentFixture<SurfPrepDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfPrepDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfPrepDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
