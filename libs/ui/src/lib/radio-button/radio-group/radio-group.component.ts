import {
  AfterViewInit,
  Component,
  ContentChildren,
  forwardRef,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  QueryList,
  SimpleChanges,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RadioButtonComponent } from '../radio-button/radio-button.component';
import { Subject, takeUntil } from 'rxjs';

// Increasing integer for generating unique ids for radio components.
let nextUniqueId = 0;

@Component({
  selector: 'veera-ng-radio-group',
  templateUrl: './radio-group.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioGroupComponent),
      multi: true,
    },
  ],
})
export class RadioGroupComponent
  implements ControlValueAccessor, AfterViewInit, OnChanges, OnDestroy
{
  /** Fieldset label */
  @Input() title!: string;

  @Input() name = `radio-group-${nextUniqueId++}`;

  @Input() value: unknown = null;

  @Input() disabled = false;

  @Input() appearance: 'regular' | 'compact' = 'regular';

  @HostBinding('class') get getHostClasses(): string {
    return `veera-radio-group veera-radio-group--appearance-${this.appearance}`;
  }

  @ContentChildren(forwardRef(() => RadioButtonComponent), {
    descendants: true,
  })
  radioButtons?: QueryList<RadioButtonComponent>;

  private selected: RadioButtonComponent | null = null;
  private destroyed$ = new Subject();

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private groupValueChangedFn: (value: unknown) => void = () => {};

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched: () => unknown = () => {};

  registerOnChange(fn: (value: unknown) => void): void {
    this.groupValueChangedFn = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: unknown): void {
    this.value = value;
    this.updateSelectedRadioFromValue(value);
  }

  ngAfterViewInit(): void {
    this.radioButtons?.forEach((radio) => {
      radio.name = this.name;
      radio.markForCheck();
      radio.inputInteraction
        .pipe(takeUntil(this.destroyed$))
        .subscribe((value) => {
          this.updateSelectedRadioFromValue(value);
        });
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const value = changes['value'];
    if (value && value.currentValue !== value.previousValue) {
      this.updateSelectedRadioFromValue(value.currentValue);
    }
  }

  ngOnDestroy(): void {
    this.destroyed$.next(undefined);
    this.destroyed$.complete();
  }

  private updateSelectedRadioFromValue(value: unknown): void {
    this.value = value;
    const isAlreadySelected =
      this.selected !== null && this.selected.value === this.value;

    if (this.radioButtons && !isAlreadySelected) {
      this.selected?.markForCheck();
      this.selected = null;

      this.radioButtons.forEach((radio) => {
        radio.checked = this.value === radio.value;

        if (radio.checked) {
          this.selected = radio;
          this.selected.markForCheck();
        }
      });

      this.groupValueChangedFn(value);
    }
  }
}
