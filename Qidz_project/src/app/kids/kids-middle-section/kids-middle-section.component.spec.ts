import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsMiddleSectionComponent } from './kids-middle-section.component';

describe('KidsMiddleSectionComponent', () => {
  let component: KidsMiddleSectionComponent;
  let fixture: ComponentFixture<KidsMiddleSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsMiddleSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsMiddleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
