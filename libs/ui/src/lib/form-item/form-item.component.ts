import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'cvi-ng-form-item',
  templateUrl: './form-item.component.html',
})
export class FormItemComponent {
  /** HTML id passed down to form field component */
  @Input() htmlId!: string;

  /** HTML label */
  @Input() label!: string;

  /** Label position */
  @Input() labelPosition: 'top' | 'side' = 'top';

  /** Label is visually hidden */
  @Input() isLabelHidden = false;

  /** Label is visually hidden */
  @Input() required = false;

  /** HTML label ID. Use in aria-labelledby attribute in non-native form widgets */
  @Input() labelId!: string;

  @HostBinding('class') get getHostClasses(): string {
    return `cvi-form-item cvi-form-item--label-position-${this.labelPosition}${
      this.required ? ' cvi-form-item--is-required' : ''
    }`;
  }
}
