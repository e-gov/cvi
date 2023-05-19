import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerCalendarComponent } from './datepicker-calendar.component';

describe('DatepickerCalendarComponent', () => {
  let component: DatepickerCalendarComponent;
  let fixture: ComponentFixture<DatepickerCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatepickerCalendarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DatepickerCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
