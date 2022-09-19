import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'veera-ng-radio-button',
  templateUrl: './radio-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioButtonComponent {
  /** HTML name */
  @Input() name!: string;

  /** Radio button value */
  @Input() value!: string;

  /** Radio button label */
  @Input() label!: string;
}
