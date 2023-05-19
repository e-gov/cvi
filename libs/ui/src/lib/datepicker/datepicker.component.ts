import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  HostBinding,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const datepickerComponentValueAccessor = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DatepickerComponent),
  multi: true,
};

@Component({
  selector: 'cvi-ng-datepicker',
  templateUrl: './datepicker.component.html',
  providers: [datepickerComponentValueAccessor],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerComponent implements ControlValueAccessor {
  /** HTML id passed from FormItem component */
  @Input() htmlId!: string;
  /** Input is disabled */
  @Input() disabled = false;
  /** Placeholder */
  @Input() placeholder = '';
  @ViewChild('datePickerCalendar') calendarComponent:
    | ElementRef<HTMLElement>
    | undefined;

  private internalValue?: any;

  focus = false;
  valueValidated = '';

  inputContainerClass = {};

  private lifeCycleTicks = 0;
  private checks = 0;
  private readonly select: HTMLElement;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onChanged: (value: unknown) => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onTouched: () => unknown = () => {};

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    if (!this.disabled) {
      if (this.select.contains(event.target as any)) {
        return;
      }

      this.setFocus(false);
    }
  }

  @HostBinding('class') get getHostClasses(): string {
    return `cvi-textfield${
      this.disabled ? ' cvi-datepicker--is-disabled' : ''
    }`;
  }

  constructor(
    private readonly cdRef: ChangeDetectorRef,
    elementRef: ElementRef
  ) {
    this.select = elementRef.nativeElement;
  }

  get value(): any {
    return this.internalValue;
  }

  set value(val: any) {
    this.internalValue = val;
    this.onChanged(val);
    this.onTouched();
    if (this.validateValue(val)) {
      this.valueValidated = val;
    }
  }

  writeValue(obj: any): void {
    if (obj !== this.internalValue) {
      this.internalValue = obj;
      this.cdRef.markForCheck();
    }
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setFocus(focus: boolean): void {
    if (!this.disabled) {
      this.focus = focus;
    }
  }

  handleDateSelect(event: string) {
    this.value = event;
    this.setFocus(false);
  }

  validateValue(val: string) {
    if (
      !/^([1-9]|0[1-9]|1[0-9]|2[0-9]|3[0-1])\.([1-9]|0[1-9]|1[1-2])\.[1-2][0-9]{3}$/.test(
        val
      )
    ) {
      return false;
    }
    const parts = val.split('.').map(Number);
    if (parts.length === 3) {
      const newDate = new Date(parts[2], parts[1] - 1, parts[0]);
      return (
        newDate.getDate() === parts[0] &&
        newDate.getMonth() === parts[1] - 1 &&
        newDate.getFullYear() === parts[2]
      );
    }
    return false;
  }
}
