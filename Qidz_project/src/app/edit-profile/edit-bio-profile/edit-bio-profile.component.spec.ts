import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBioProfileComponent } from './edit-bio-profile.component';

describe('EditBioProfileComponent', () => {
  let component: EditBioProfileComponent;
  let fixture: ComponentFixture<EditBioProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBioProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBioProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
