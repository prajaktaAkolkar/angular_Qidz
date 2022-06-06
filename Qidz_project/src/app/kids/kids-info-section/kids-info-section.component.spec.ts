import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsInfoSectionComponent } from './kids-info-section.component';

describe('KidsInfoSectionComponent', () => {
  let component: KidsInfoSectionComponent;
  let fixture: ComponentFixture<KidsInfoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsInfoSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsInfoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
