import { Component, HostBinding } from '@angular/core';
import { RadioButtonComponent } from '../radio-button/radio-button.component';

// Todo: this component is a full duplicate of radio-group.component aside from styling, get rid of it?
@Component({
  selector: 'cvi-ng-option-button',
  templateUrl: './option-button.component.html',
  providers: [
    {
      provide: RadioButtonComponent,
      useExisting: OptionButtonComponent,
    },
  ],
})
export class OptionButtonComponent extends RadioButtonComponent {
  @HostBinding('class') get getHostClasses(): string {
    return `cvi-radio-group__item`;
  }
}
