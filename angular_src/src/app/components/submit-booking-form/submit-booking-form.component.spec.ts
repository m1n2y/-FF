import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitBookingFormComponent } from './submit-booking-form.component';

describe('SubmitBookingFormComponent', () => {
  let component: SubmitBookingFormComponent;
  let fixture: ComponentFixture<SubmitBookingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitBookingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitBookingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
