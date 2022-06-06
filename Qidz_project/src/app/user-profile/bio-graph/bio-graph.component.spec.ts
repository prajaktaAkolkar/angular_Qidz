import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioGraphComponent } from './bio-graph.component';

describe('BioGraphComponent', () => {
  let component: BioGraphComponent;
  let fixture: ComponentFixture<BioGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BioGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
