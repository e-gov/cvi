import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'ria-poc-option-button',
  templateUrl: './option-button.component.html',
})
export class OptionButtonComponent {
  /** HTML name */
  @Input() name!: string;

  /** Radio button value */
  @Input() value!: string;

  /** Radio button label */
  @Input() label!: string;

  @HostBinding('attr.role') roleAttr = 'listitem';

  @HostBinding('class') get getHostClasses(): string {
    return `veera-radio-buttons__item`;
  }
}
