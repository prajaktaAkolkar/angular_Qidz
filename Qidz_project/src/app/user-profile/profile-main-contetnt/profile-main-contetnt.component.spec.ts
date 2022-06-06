import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMainContetntComponent } from './profile-main-contetnt.component';

describe('ProfileMainContetntComponent', () => {
  let component: ProfileMainContetntComponent;
  let fixture: ComponentFixture<ProfileMainContetntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileMainContetntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMainContetntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
