import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  forwardRef,
  HostBinding,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'cvi-ng-datepicker',
  templateUrl: './datepicker.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatepickerComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerComponent implements ControlValueAccessor {
  @Input() htmlId!: string;
  @Input() disabled = false;
  @Input() placeholder = '';
  @ViewChild('datePickerCalendar') calendarComponent:
    | ElementRef<HTMLElement>
    | undefined;

  private internalValue?: string;

  focus = false;
  valueValidated = '';

  private readonly select: HTMLElement;

  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  private onChanged = (_: string) => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onTouched = () => {};

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    if (!this.disabled && !this.select.contains(event.target as never)) {
      this.setFocus(false);
    }
  }

  @HostBinding('class') get getHostClasses(): string {
    return `cvi-textfield${
      this.disabled ? ' cvi-datepicker--is-disabled' : ''
    }`;
  }

  constructor(private readonly elementRef: ElementRef) {
    this.select = elementRef.nativeElement;
  }

  get value(): string | undefined {
    return this.internalValue;
  }

  set value(val: string | undefined) {
    this.internalValue = val;
    this.onChanged(val ?? '');
    this.onTouched();
    if (this.validateValue(val ?? '')) {
      this.valueValidated = val ?? '';
    }
  }

  writeValue(value: string | undefined): void {
    this.internalValue = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setFocus(focus: boolean): void {
    if (!this.disabled) {
      this.focus = focus;
    }
  }

  handleDateSelect(value: string): void {
    this.value = value;
    this.setFocus(false);
  }

  validateValue(value: string): boolean {
    const regex =
      /^([1-9]|0[1-9]|1[0-9]|2[0-9]|3[0-1])\.([1-9]|0[1-9]|1[1-2])\.[1-2][0-9]{3}$/;
    if (!regex.test(value)) {
      return false;
    }

    const [day, month, year] = value.split('.').map(Number);
    const date = new Date(year, month - 1, day);
    return (
      date.getDate() === day &&
      date.getMonth() === month - 1 &&
      date.getFullYear() === year
    );
  }
}
