import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'ria-poc-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() appearance: 'primary' | 'secondary' | 'text' = 'primary';

  /** Button is disabled */
  @Input() disabled = false;

  @HostBinding('class') get getHostClasses(): string {
    return `veera-button veera-button--appearance-${this.appearance}${this.disabled ? ' veera-button--is-disabled' : ''}`;
  }
}
