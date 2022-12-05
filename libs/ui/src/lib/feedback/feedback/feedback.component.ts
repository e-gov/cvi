import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'veera-ng-feedback',
  templateUrl: './feedback.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FeedbackComponent),
      multi: true,
    },
  ],
})
export class FeedbackComponent
  implements ControlValueAccessor, OnInit, OnDestroy
{
  /** Form title */
  @Input() title = 'Did you find what you were looking for?';

  /** Feedback options */
  @Input() options: { value: any; label: string }[] = [
    { value: 'NO', label: 'No' },
    { value: 'PARTIALLY', label: 'Partially' },
    { value: 'YES', label: 'Yes' },
  ];

  /** Should radio buttons have regular or compact outline button styling */
  @Input() appearance: 'regular' | 'compact' = 'regular';

  /** Display or hide 'sad-face' and 'happy-face' icons */
  @Input() showIcons = false;

  radioButtonsControl = new FormControl('');

  private destroyed$ = new Subject();

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private valueChangedFn: (value: any) => void = () => {};

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onTouched: () => void = () => {};

  ngOnInit(): void {
    this.radioButtonsControl.valueChanges
      .pipe(takeUntil(this.destroyed$))
      .subscribe((value) => this.valueChangedFn(value));
  }

  ngOnDestroy(): void {
    this.destroyed$.next(undefined);
    this.destroyed$.complete();
  }

  registerOnChange(fn: (value: any) => void): void {
    this.valueChangedFn = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.radioButtonsControl.disable();
    } else {
      this.radioButtonsControl.enable();
    }
  }

  writeValue(value: any): void {
    this.radioButtonsControl.setValue(value);
  }
}
