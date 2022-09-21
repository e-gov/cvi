import { Component, HostBinding, Input } from '@angular/core';
import { VeeraIconName } from '@ria/veera-icons';

@Component({
  selector: 'veera-ng-labeled-icon',
  templateUrl: './labeled-icon.component.html',
})
export class LabeledIconComponent {
  @Input() name!: VeeraIconName;

  @HostBinding('class') get getHostClasses(): string {
    return 'veera-labeled-icon';
  }
}
