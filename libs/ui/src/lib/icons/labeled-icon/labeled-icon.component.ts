import { Component, HostBinding, Input } from '@angular/core';
import { VeeraIconName } from '@ria/veera-icons';
import { IconPosition } from './icon-position';

@Component({
  selector: 'veera-ng-labeled-icon',
  templateUrl: './labeled-icon.component.html',
})
export class LabeledIconComponent {
  @Input() iconPosition: IconPosition = 'before';
  @Input() name!: VeeraIconName;

  /** Additional class for SVG element */
  @Input() svgClass = '';

  @HostBinding('class') get getHostClasses(): string {
    return 'veera-labeled-icon';
  }
}
