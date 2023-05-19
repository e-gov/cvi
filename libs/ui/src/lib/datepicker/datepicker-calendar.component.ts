import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

@Component({
  selector: 'cvi-ng-datepicker-calendar',
  templateUrl: './datepicker-calendar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerCalendarComponent implements OnChanges {
  @Input() date?: string;
  @Input() dayShorthandLabels = ['E', 'T', 'K', 'N', 'R', 'L', 'P'];
  @Input() monthLabels = [
    'Jaanuar',
    'Veebruar',
    'Märts',
    'Aprill',
    'Mai',
    'Juuni',
    'Juuli',
    'August',
    'September',
    'Oktoober',
    'November',
    'Detsember',
  ];

  @Output() dateChanged = new EventEmitter<string>();

  year = 2022;
  month = 12;
  selectedDay = 10;
  displayMonth = 12;
  displayYear = 2022;
  calendarArray: number[][] = [];
  today = new Date();

  currentDate = new Date('2022-12-14');

  getCalendarArray(month: number, year: number) {
    const firstDay = new Date(year, month - 1, 1).getDay();
    const numberOfDays = new Date(year, month, 0).getDate();

    const lastMonthDaysInFirstWeek = firstDay === 0 ? 6 : firstDay - 1;
    const numberOfDaysWithLastMonthDays =
      lastMonthDaysInFirstWeek + numberOfDays;

    const numberOfWeeks = Math.ceil(numberOfDaysWithLastMonthDays / 7);

    const calendarArray = [];
    let dayCounter = 1;
    for (let i = 0; i < numberOfWeeks; i++) {
      const arr = [];
      if (i === 0) {
        new Array(lastMonthDaysInFirstWeek)
          .fill(0)
          .forEach((zero) => arr.push(zero));
      }
      while (arr.length < 7 && dayCounter <= numberOfDays) {
        arr.push(dayCounter);
        dayCounter++;
      }
      if (i === numberOfWeeks - 1) {
        new Array(7 - arr.length).fill(0).forEach((zero) => arr.push(zero));
      }
      calendarArray.push(arr);
    }

    return calendarArray;
  }

  getDateClass(day: number): string {
    if (
      this.selectedDay === day &&
      this.displayMonth === this.month &&
      this.displayYear === this.year
    ) {
      return 'cvi-datepicker__calendar-button-selected';
    }
    if (
      this.today.getDate() === day &&
      this.today.getMonth() + 1 === this.displayMonth &&
      this.today.getFullYear() === this.displayYear
    ) {
      return 'cvi-datepicker__calendar-button-today';
    }
    return '';
  }

  handleClick(day: number) {
    this.selectedDay = day;
    this.month = this.displayMonth;
    this.year = this.displayYear;
    const dateToEmit =
      (day < 10 ? '0' + day : day) +
      '.' +
      (this.month < 10 ? '0' + this.month : this.month) +
      '.' +
      this.year;
    this.dateChanged.emit(dateToEmit);
  }

  previousMonth() {
    if (this.displayMonth === 1) {
      this.displayMonth = 12;
      this.displayYear -= 1;
    } else {
      this.displayMonth -= 1;
    }
    this.calendarArray = this.getCalendarArray(
      this.displayMonth,
      this.displayYear
    );
  }

  nextMonth() {
    if (this.displayMonth === 12) {
      this.displayMonth = 1;
      this.displayYear += 1;
    } else {
      this.displayMonth += 1;
    }
    this.calendarArray = this.getCalendarArray(
      this.displayMonth,
      this.displayYear
    );
  }

  ngOnChanges() {
    if (!this.date || this.date === '') {
      this.selectedDay = this.today.getDate();
      this.month = this.today.getMonth() + 1;
      this.year = this.today.getFullYear();
    }

    if (this.date) {
      const dateAsArray = this.date.split('.').map(Number);
      this.selectedDay = dateAsArray[0];
      this.month = dateAsArray[1];
      this.year = dateAsArray[2];
    }

    this.displayMonth = this.month;
    this.displayYear = this.year;

    this.calendarArray = this.getCalendarArray(this.month, this.year);
  }
}
