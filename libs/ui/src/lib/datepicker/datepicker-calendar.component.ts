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

  today = new Date();
  selectedDate!: Date;
  displayDate!: Date;
  calendarArray: number[][] = [];

  ngOnChanges() {
    this.selectedDate = this.date
      ? this.parseDate(this.date)
      : new Date(this.today);
    this.displayDate = new Date(this.selectedDate);

    this.calendarArray = this.getCalendarArray(this.displayDate);
  }

  parseDate(date: string): Date {
    const [day, month, year] = date.split('.').map(Number);
    return new Date(year, month - 1, day);
  }

  getCalendarArray(date: Date): number[][] {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const numberOfDays = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();

    const weeks = [];
    for (let day = 1 - (firstDay || 7); day <= numberOfDays; day += 7) {
      const week = new Array(7).fill(0).map((_, i) => day + i);
      weeks.push(week);
    }

    return weeks;
  }

  getDateClass(day: number): string {
    if (
      day === this.selectedDate.getDate() &&
      this.displayDate.getMonth() === this.selectedDate.getMonth() &&
      this.displayDate.getFullYear() === this.selectedDate.getFullYear()
    ) {
      return 'cvi-datepicker__calendar-button-selected';
    }
    if (
      day === this.today.getDate() &&
      this.displayDate.getMonth() === this.today.getMonth() &&
      this.displayDate.getFullYear() === this.today.getFullYear()
    ) {
      return 'cvi-datepicker__calendar-button-today';
    }
    return '';
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

  private formatDate(date: Date): string {
    return `${this.pad(date.getDate())}.${this.pad(
      date.getMonth() + 1
    )}.${date.getFullYear()}`;
  }

  private pad(n: number): string {
    return n < 10 ? '0' + n : '' + n;
  }
}
