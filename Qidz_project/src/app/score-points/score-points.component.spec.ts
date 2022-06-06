import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorePointsComponent } from './score-points.component';

describe('ScorePointsComponent', () => {
  let component: ScorePointsComponent;
  let fixture: ComponentFixture<ScorePointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScorePointsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorePointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
