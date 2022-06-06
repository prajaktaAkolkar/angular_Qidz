import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMainContentComponent } from './edit-main-content.component';

describe('EditMainContentComponent', () => {
  let component: EditMainContentComponent;
  let fixture: ComponentFixture<EditMainContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMainContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
