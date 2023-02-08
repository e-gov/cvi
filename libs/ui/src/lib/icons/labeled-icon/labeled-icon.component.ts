import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Input,
  ViewChild,
} from '@angular/core';
import { CviIconName } from '@egov/cvi-icons';
import { iconSizeDefault } from '../icon/icon';
import { LabeledIconPosition } from './icon-position';
import { LabeledIconVerticalAlignment } from './vertical-alignment';

@Component({
  selector: 'cvi-ng-labeled-icon',
  templateUrl: './labeled-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabeledIconComponent {
  /** Icon location */
  @Input() iconPosition: LabeledIconPosition = 'before';

  /** Icon name */
  @Input() name!: CviIconName;

  /** Additional classes for the SVG element */
  @Input() svgClass = '';

  /** Icon height in px */
  @Input()
  iconHeight?: number = iconSizeDefault;

  /** Additional classes for the cvi-ng-icon element */
  @Input() iconClass = 'cvi-labeled-icon__icon-wrapper';

  @Input() verticalAlignment: LabeledIconVerticalAlignment = 'normal';

  @ViewChild('content') content!: ElementRef;

  @HostBinding('class') get hostClasses(): string {
    return `cvi-labeled-icon`;
  }
}
