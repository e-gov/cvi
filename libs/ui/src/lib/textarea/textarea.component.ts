/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ChangeDetectorRef,
  Component,
  forwardRef,
  HostBinding,
  Input,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'veera-ng-textarea',
  templateUrl: './textarea.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true,
    },
  ],
})
export class TextareaComponent {
  /** HTML id passed from FormItem component */
  @Input() htmlId!: string;

  /** Textarea is disabled */
  @Input() disabled = false;

  /** Max number of characters */
  @Input() maxLength = 2000;

  /** Minimum number of rows to display */
  @Input() minRows = 3;

  /** Maximum number of rows to display */
  @Input() maxRows = 5;

  /** Input placeholder */
  @Input() placeholder = '';

  private internalValue?: any;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onChanged: (value: unknown) => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onTouched: () => unknown = () => {};

  @HostBinding('class') get getHostClasses(): string {
    return `veera-textfield veera-textfield--type-multiple-lines${
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
