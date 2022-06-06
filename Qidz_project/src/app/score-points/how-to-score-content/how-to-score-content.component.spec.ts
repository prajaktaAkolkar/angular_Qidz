import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToScoreContentComponent } from './how-to-score-content.component';

describe('HowToScoreContentComponent', () => {
  let component: HowToScoreContentComponent;
  let fixture: ComponentFixture<HowToScoreContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowToScoreContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToScoreContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
