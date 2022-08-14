import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'ria-poc-input',
  templateUrl: './input.component.html',
})
export class InputComponent {
  @HostBinding('class') get getHostClasses(): string {
    return `veera-textfield`;
  }
}
