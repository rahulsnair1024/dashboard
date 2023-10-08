import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiecchartComponent } from './piecchart.component';

describe('PiecchartComponent', () => {
  let component: PiecchartComponent;
  let fixture: ComponentFixture<PiecchartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PiecchartComponent]
    });
    fixture = TestBed.createComponent(PiecchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
