import { Component, Input } from '@angular/core';

@Component({
  selector: 'ria-poc-radio-button',
  templateUrl: './radio-button.component.html',
})
export class RadioButtonComponent {
  /** HTML name */
  @Input() name!: string;

  /** Radio button value */
  @Input() value!: string;

  /** Radio button label */
  @Input() label!: string;
}
