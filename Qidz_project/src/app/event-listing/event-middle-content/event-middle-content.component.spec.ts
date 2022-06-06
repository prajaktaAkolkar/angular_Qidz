import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventMiddleContentComponent } from './event-middle-content.component';

describe('EventMiddleContentComponent', () => {
  let component: EventMiddleContentComponent;
  let fixture: ComponentFixture<EventMiddleContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventMiddleContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventMiddleContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
