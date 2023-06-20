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
  @Input()
  set disabled(value: boolean) {
    this._disabled = value;
  }

  get disabled(): boolean {
    return this._disabled;
  }

  /** Placeholder */
  @Input() placeholder = '';

  /** Icon added to the right */
  @Input() suffixIconName!: CviIconName;

  /** Emit value on model change */
  @Output() valueChange = new EventEmitter<any>();

  /** Internal */
  _internalValue?: any;

  /** Internal */
  _disabled = false;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onChanged: (_: any) => void = () =>
    this.valueChange.emit(this._internalValue);
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onTouched: () => any = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private propagateDisabled = (_: any) => {};

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
    this._internalValue = value;
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  registerOnDisabledChange(fn: (isDisabled: boolean) => void): void {
    this.propagateDisabled = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
