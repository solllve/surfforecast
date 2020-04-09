import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfSizeComponent } from './surf-size.component';

describe('SurfSizeComponent', () => {
  let component: SurfSizeComponent;
  let fixture: ComponentFixture<SurfSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
