import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QidzHeaderComponent } from './qidz-header.component';

describe('QidzHeaderComponent', () => {
  let component: QidzHeaderComponent;
  let fixture: ComponentFixture<QidzHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QidzHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QidzHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
