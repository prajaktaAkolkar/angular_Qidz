import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavActivitesComponent } from './fav-activites.component';

describe('FavActivitesComponent', () => {
  let component: FavActivitesComponent;
  let fixture: ComponentFixture<FavActivitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavActivitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavActivitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
