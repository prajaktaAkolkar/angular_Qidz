import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavMiddleContentComponent } from './fav-middle-content.component';

describe('FavMiddleContentComponent', () => {
  let component: FavMiddleContentComponent;
  let fixture: ComponentFixture<FavMiddleContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavMiddleContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavMiddleContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
