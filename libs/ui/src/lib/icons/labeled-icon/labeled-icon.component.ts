import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Input,
  ViewChild,
} from '@angular/core';
import { VeeraIconName } from '@ria/veera-icons';
import { iconSizeDefault } from '../icon/icon';
import { LabeledIconPosition } from './icon-position';
import { LabeledIconVerticalAlignment } from './vertical-alignment';

@Component({
  selector: 'veera-ng-labeled-icon',
  templateUrl: './labeled-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabeledIconComponent {
  /** Icon location */
  @Input() iconPosition: LabeledIconPosition = 'before';

  /** Icon name */
  @Input() name!: VeeraIconName;

  /** Additional classes for the SVG element */
  @Input() svgClass = '';

  /** Icon height in px */
  @Input()
  iconHeight?: number = iconSizeDefault;

  /** Additional classes for the veera-ng-icon element. You can set icon height here */
  @Input() iconClass = 'veera-labeled-icon__icon-wrapper';

  @Input() verticalAlignment: LabeledIconVerticalAlignment = 'normal';

  @ViewChild('content') content!: ElementRef;

  @HostBinding('class') get hostClasses(): string {
    return `veera-labeled-icon`;
  }
}
