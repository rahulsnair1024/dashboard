import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarddesignComponent } from './carddesign.component';

describe('CarddesignComponent', () => {
  let component: CarddesignComponent;
  let fixture: ComponentFixture<CarddesignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarddesignComponent]
    });
    fixture = TestBed.createComponent(CarddesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
