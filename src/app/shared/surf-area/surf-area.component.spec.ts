import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfAreaComponent } from './surf-area.component';

describe('SurfAreaComponent', () => {
  let component: SurfAreaComponent;
  let fixture: ComponentFixture<SurfAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
