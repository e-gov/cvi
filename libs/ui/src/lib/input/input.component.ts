import {
  Component,
  EventEmitter,
  forwardRef,
  HostBinding,
  Input,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CviIconName } from '@egov/cvi-icons';

export const inputComponentValueAccessor = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputComponent),
  multi: true,
};

@Component({
  selector: 'cvi-ng-input',
  templateUrl: './input.component.html',
  providers: [inputComponentValueAccessor],
})
export class InputComponent implements ControlValueAccessor {
  /** HTML id passed from FormItem component */
  @Input() htmlId!: string;

  /** Input is disabled */
  @Input() disabled = false;

  /** Placeholder */
  @Input() placeholder = '';

  /** Icon added to the right */
  @Input() suffixIconName!: CviIconName;

  /** Emit value on model change */
  @Output() valueChange = new EventEmitter<any>();

  internalValue?: any;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onChanged: (value: any) => void = () =>
    this.valueChange.emit(this.internalValue);
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onTouched: () => any = () => {};

  @HostBinding('class') get getHostClasses(): string {
    return `cvi-textfield cvi-textfield--type-single-line${
      this.disabled ? ' cvi-textfield--is-disabled' : ''
    }${this.suffixIconName ? ' cvi-textfield--has-suffix-icon' : ''}`;
  }

  setValue(value: any) {
    this.onChanged(value);
    this.onTouched();
  }

  writeValue(value: any): void {
    this.internalValue = value;
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
