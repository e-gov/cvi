import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  forwardRef,
  HostBinding,
  HostListener,
  Inject,
  Input,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DATEPICKER_LABEL_CONFIG } from './datepicker-label-config.token';
import { DatepickerLabelConfig } from './datepicker-label.config';
import { v4 as uuidv4 } from 'uuid';

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

  dayShorthandLabels$ = this.labelConfig.getDayShorthandLabels();
  dayFullLabels$ = this.labelConfig.getDayFullLabels();
  monthLabels$ = this.labelConfig.getMonthLabels();
  screenreaderLabel$ = this.labelConfig.getScreenReaderLabel();
  screenreaderDescription$ = this.labelConfig.getScreenReaderDescription();

  focus = false;
  valueValidated = '';

  /** @internal */
  baseId = 'datepicker-' + uuidv4();

  private readonly select: HTMLElement;

  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  private onChanged = (_: string) => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onTouched = () => {};

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    const targetElement = event.target as HTMLElement;

    if (
      !this.disabled &&
      !this.select.contains(event.target as never) &&
      !targetElement.classList.contains('cvi-datepicker__input-icon-wrapper')
    ) {
      this.setFocus(false);
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.setFocus(false);
    }
  }

  @HostBinding('class') get getHostClasses(): string {
    const baseClass = 'cvi-datepicker';
    return `cvi-textfield${
      this.disabled ? ` ${baseClass}__input-container--is-disabled` : ''
    }`;
  }

  constructor(
    @Inject(DATEPICKER_LABEL_CONFIG) private labelConfig: DatepickerLabelConfig,
    private readonly elementRef: ElementRef
  ) {
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

  toggleFocus(): void {
    const focus = !this.focus;
    this.setFocus(focus);
  }
}
