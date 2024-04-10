import {
  Component,
  EventEmitter,
  forwardRef,
  HostBinding,
  HostListener,
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

type ValidationType = null | 'positiveNumbers';

const inputRegex: { [key: string]: RegExp } = {
  positiveNumbers: /\D/g,
};

const patterns: { [key: string]: string } = {
  positiveNumbers: '[0-9]*',
};

const inputModes: { [key: string]: string } = {
  positiveNumbers: 'numeric',
};

@Component({
  selector: 'cvi-ng-input',
  templateUrl: './input.component.html',
  providers: [inputComponentValueAccessor],
})
export class InputComponent implements ControlValueAccessor {
  /** HTML id passed from FormItem component */
  @Input() htmlId!: string;

  /** Maximum number of characters allowed */
  @Input() maxLength?: string;

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

  /** Only allow certain characters */
  @Input()
  set validationType(value: ValidationType) {
    this._validationType = value;
  }

  get validationType(): ValidationType {
    return this._validationType;
  }
  /** Emit value on model change */
  @Output() valueChange = new EventEmitter<any>();

  /** @internal */
  _internalValue?: any;

  /** @internal */
  _disabled = false;

  _validationType: ValidationType = null;

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

  @HostListener('input', ['$event'])
  onInput(event: InputEvent) {
    const inputElement = event.target as HTMLInputElement;
    inputElement.value = this.handleValue(inputElement.value);
  }

  handleValue(value: string): string {
    if (this.validationType !== null) {
      value = value.replace(inputRegex[this.validationType], '');
    }
    return value;
  }

  get pattern(): string | null {
    return this.validationType !== null && this.validationType in patterns
      ? patterns[this.validationType]
      : null;
  }

  get inputMode(): string | null {
    return this.validationType !== null && this.validationType in inputModes
      ? inputModes[this.validationType]
      : null;
  }

  setValue(value: any) {
    this.onChanged(this.handleValue(value));
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
