import { Component, HostBinding } from '@angular/core';
import { RadioButtonComponent } from '../radio-button/radio-button.component';

@Component({
  selector: 'veera-ng-option-button',
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
    return `veera-radio-group__item`;
  }
}
