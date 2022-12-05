import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'veera-ng-form-item',
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

  @HostBinding('class') get getHostClasses(): string {
    return `veera-form-item veera-form-item--label-position-${
      this.labelPosition
    }${this.required ? ' veera-form-item--is-required' : ''}`;
  }
}
