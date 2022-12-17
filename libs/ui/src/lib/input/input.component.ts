import {
  ChangeDetectorRef,
  Component,
  forwardRef,
  HostBinding,
  Input,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'veera-ng-input',
  templateUrl: './input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  /** HTML id passed from FormItem component */
  @Input() htmlId!: string;

  /** Input is disabled */
  @Input() disabled = false;

  /** Placeholder */
  @Input() placeholder = '';

  private internalValue?: any;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onChanged: (value: unknown) => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onTouched: () => unknown = () => {};

  @HostBinding('class') get getHostClasses(): string {
    return `veera-textfield veera-textfield--type-single-line${
      this.disabled ? ' veera-textfield--is-disabled' : ''
    }`;
  }

  constructor(private readonly cdRef: ChangeDetectorRef) {}

  get value(): any {
    return this.internalValue;
  }

  set value(val: any) {
    this.internalValue = val;
    this.onChanged(val);
    this.onTouched();
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
}
