import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'cvi-ng-datepicker-calendar',
  templateUrl: './datepicker-calendar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerCalendarComponent implements OnChanges, OnInit {
  @Input() date?: string;
  @Input() dayShorthandLabels!: string[];
  @Input() dayFullLabels!: string[];
  @Input() monthLabels!: string[];
  @Input() baseId!: string;

  @Output() dateChanged = new EventEmitter<string>();

  today = new Date();
  selectedDate!: Date;
  displayDate!: Date;
  calendarArray: number[][] = [];

  ngOnInit(): void {
    if (this.calendarArray.length === 0) {
      this.displayDate = new Date();
      this.calendarArray = this.getCalendarArray(this.displayDate);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['date'] && this.date) {
      this.selectedDate = this.parseDate(this.date);
      this.displayDate = new Date(this.selectedDate);
      this.calendarArray = this.getCalendarArray(this.displayDate);
    }
  }

  parseDate(date: string): Date {
    const [day, month, year] = date.split('.').map(Number);
    return new Date(year, month - 1, day);
  }

  getCalendarArray(date: Date): number[][] {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const adjustedFirstDay = firstDay === 0 ? 7 : firstDay; // adjust for week starting on Monday
    const numberOfDays = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();

    const weeks: number[][] = [];
    let day = 1;
    let week: number[] = [];

    // Adjust the first week
    for (let i = 1; i <= 7; i++) {
      if (i < adjustedFirstDay) {
        week.push(0);
      } else {
        week.push(day++);
      }
    }
    weeks.push(week);

    // Add the rest of the weeks
    while (day <= numberOfDays) {
      week = new Array(7)
        .fill(0)
        .map((_, i) => (day <= numberOfDays ? day++ : 0));
      weeks.push(week);
    }

    return weeks;
  }

  getDateClass(day: number, index: number): string {
    let classes = '';

    const isSelectedDate =
      this.selectedDate &&
      day === this.selectedDate.getDate() &&
      this.displayDate.getMonth() === this.selectedDate.getMonth() &&
      this.displayDate.getFullYear() === this.selectedDate.getFullYear();

    const isToday =
      day === this.today.getDate() &&
      this.displayDate.getMonth() === this.today.getMonth() &&
      this.displayDate.getFullYear() === this.today.getFullYear();

    if (isSelectedDate) {
      classes += ' cvi-datepicker__calendar-button--selected';
    }
    if (isToday && !isSelectedDate) {
      classes += ' cvi-datepicker__calendar-button--today';
    }
    if (!isSelectedDate && (index === 5 || index === 6)) {
      classes += ' cvi-datepicker__calendar-button--weekend';
    }
    return classes.trim();
  }

  handleClick(day: number) {
    this.selectedDate = new Date(
      this.displayDate.getFullYear(),
      this.displayDate.getMonth(),
      day
    );
    this.dateChanged.emit(this.formatDate(this.selectedDate));
  }

  previousMonth() {
    this.displayDate.setMonth(this.displayDate.getMonth() - 1);
    this.calendarArray = this.getCalendarArray(this.displayDate);
  }

  nextMonth() {
    this.displayDate.setMonth(this.displayDate.getMonth() + 1);
    this.calendarArray = this.getCalendarArray(this.displayDate);
  }

  formatDate(date: Date): string {
    return `${this.pad(date.getDate())}.${this.pad(
      date.getMonth() + 1
    )}.${date.getFullYear()}`;
  }

  private pad(n: number): string {
    return n < 10 ? '0' + n : '' + n;
  }
}
