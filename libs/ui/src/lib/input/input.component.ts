import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'ria-poc-input',
  templateUrl: './input.component.html',
})
export class InputComponent {
  /** HTML id passed from FormItem component */
  @Input() htmlId!: string;

  /** Button is disabled */
  @Input() disabled = false;

  @HostBinding('class') get getHostClasses(): string {
    return `veera-textfield${this.disabled ? ' veera-textfield--is-disabled' : ''}`;
  }
}
