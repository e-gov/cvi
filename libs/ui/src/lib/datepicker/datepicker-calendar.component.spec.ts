import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatepickerCalendarComponent } from './datepicker-calendar.component';

describe('DatepickerCalendarComponent', () => {
  let component: DatepickerCalendarComponent;
  let fixture: ComponentFixture<DatepickerCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatepickerCalendarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit dateChanged event on click', () => {
    const dateChangedSpy = jest.spyOn(component.dateChanged, 'emit');
    const day = 5;
    component.handleClick(day);
    expect(dateChangedSpy).toHaveBeenCalledWith(
      component.formatDate(
        new Date(
          component.displayDate.getFullYear(),
          component.displayDate.getMonth(),
          day
        )
      )
    );
  });

  it('should navigate to previous month correctly', () => {
    const originalMonth = component.displayDate.getMonth();
    component.previousMonth();
    expect(component.displayDate.getMonth()).toBe(originalMonth - 1);
  });

  it('should navigate to next month correctly', () => {
    const originalMonth = component.displayDate.getMonth();
    component.nextMonth();
    expect(component.displayDate.getMonth()).toBe(originalMonth + 1);
  });

  it('should correctly format date', () => {
    const date = new Date(2023, 10, 3); // 3.11.2023
    const formattedDate = component.formatDate(date);
    expect(formattedDate).toBe('03.11.2023');
  });

  it('should initialize the calendar array correctly on ngOnChanges', () => {
    component.date = '05.12.2023';
    component.ngOnChanges({
      date: {
        previousValue: null,
        currentValue: component.date,
        firstChange: true,
        isFirstChange: () => true,
      },
    });
    const decemberFirstWeek = [0, 0, 0, 0, 1, 2, 3];
    expect(component.calendarArray[0]).toEqual(decemberFirstWeek);
  });
});
