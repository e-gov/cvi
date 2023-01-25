import { Component, HostBinding } from '@angular/core';
import { RadioButtonComponent } from '../radio-button/radio-button.component';

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
  @HostBinding('attr.role') roleAttr = 'listitem';

  @HostBinding('class') get getHostClasses(): string {
    return `cvi-radio-group__item`;
  }
}
