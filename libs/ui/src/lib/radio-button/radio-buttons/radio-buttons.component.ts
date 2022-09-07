import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'ria-poc-radio-buttons',
  templateUrl: './radio-buttons.component.html',
})
export class RadioButtonsComponent {
  /** Fieldset label */
  @Input() title!: string;

  @Input() appearance: 'regular' | 'compact' = 'regular';

  @HostBinding('class') get getHostClasses(): string {
    return `veera-radio-buttons veera-radio-buttons--appearance-${this.appearance}`;
  }
}
