import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { VeeraIconName } from '@ria/veera-icons';
import { IconPosition } from './icon-position';

@Component({
  selector: 'veera-ng-labeled-icon',
  templateUrl: './labeled-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabeledIconComponent {
  /** Icon location */
  @Input() iconPosition: IconPosition = 'before';

  /** Icon name */
  @Input() name!: VeeraIconName;

  /** Additional classes for the SVG element */
  @Input() svgClass = '';

  @HostBinding('class') get getHostClasses(): string {
    return 'veera-labeled-icon';
  }
}
