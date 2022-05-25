import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelSecComponent } from './travel-sec.component';

describe('TravelSecComponent', () => {
  let component: TravelSecComponent;
  let fixture: ComponentFixture<TravelSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelSecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
