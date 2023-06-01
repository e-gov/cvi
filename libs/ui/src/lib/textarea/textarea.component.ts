/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AfterViewInit,
  Component,
  EventEmitter,
  forwardRef,
  HostBinding,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';

export const textareaComponentProvider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TextareaComponent),
  multi: true,
};

@Component({
  selector: 'cvi-ng-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  providers: [textareaComponentProvider],
})
export class TextareaComponent implements ControlValueAccessor, AfterViewInit {
  @ViewChild(CdkTextareaAutosize) autosize?: CdkTextareaAutosize;

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

  /** Textarea is resizable. Does not do anything currently since CDK autoresize disables browser resize feature */
  @Input() resizable = true;

  /** Emit value on model change */
  @Output() valueChange = new EventEmitter<any>();

  internalValue?: any;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onChanged: (value: unknown) => void = () =>
    this.valueChange.emit(this.internalValue);
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onTouched: () => unknown = () => {};

  @HostBinding('class') get getHostClasses(): string {
    const baseClass = 'cvi-textfield';
    return `${baseClass} ${baseClass}--type-multiple-lines${
      this.disabled ? ` ${baseClass}--is-disabled` : ''
    }${this.resizable ? '' : ` ${baseClass}--no-resize`}`;
  }

  ngAfterViewInit(): void {
    if (this.autosize) {
      this.resize();
    }
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

  resize(): void {
    setTimeout(() => this.autosize?.resizeToFitContent(true));
  }
}
