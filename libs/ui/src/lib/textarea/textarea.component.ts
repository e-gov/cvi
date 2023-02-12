/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  forwardRef,
  HostBinding,
  Input,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const textareaComponentProvider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TextareaComponent),
  multi: true,
};

@Component({
  selector: 'cvi-ng-textarea',
  templateUrl: './textarea.component.html',
  providers: [textareaComponentProvider],
})
export class TextareaComponent implements ControlValueAccessor {
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

  /** Textarea is resizable */
  @Input() resizable = true;

  /** Emit value on model change */
  @Output() valueChange = new EventEmitter<any>();

  internalValue?: any;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onChanged: (value: unknown) => void = () => {
    this.valueChange.emit(this.internalValue);
  };
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onTouched: () => unknown = () => {};

  @HostBinding('class') get getHostClasses(): string {
    return `cvi-textfield cvi-textfield--type-multiple-lines${
      this.disabled ? ' cvi-textfield--is-disabled' : ''
    }${this.resizable ? '' : ' cvi-textfield--no-resize'}`;
  }

  constructor(private readonly cdRef: ChangeDetectorRef) {}

  setValue(value: any) {
    this.internalValue = value;
    this.onChanged(value);
    this.onTouched();
  }

  writeValue(obj: any): void {
    this.internalValue = obj;
    this.cdRef.markForCheck();
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
