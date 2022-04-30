import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccouuntComponent } from './accouunt.component';

describe('AccouuntComponent', () => {
  let component: AccouuntComponent;
  let fixture: ComponentFixture<AccouuntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccouuntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccouuntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
