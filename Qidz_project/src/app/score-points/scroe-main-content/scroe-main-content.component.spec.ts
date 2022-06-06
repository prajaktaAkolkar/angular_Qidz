import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScroeMainContentComponent } from './scroe-main-content.component';

describe('ScroeMainContentComponent', () => {
  let component: ScroeMainContentComponent;
  let fixture: ComponentFixture<ScroeMainContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScroeMainContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScroeMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
