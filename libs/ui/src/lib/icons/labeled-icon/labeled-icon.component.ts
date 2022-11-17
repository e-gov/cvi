import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Input,
  ViewChild,
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

  /** Additional classes for the veera-ng-icon element. You can set icon height here */
  @Input() iconClass = 'veera-labeled-icon__icon';

  @Input() alignment: 'start' | 'center' = 'start';

  @ViewChild('content') content!: ElementRef;

  @HostBinding('class') get getHostClasses(): string {
    return `veera-labeled-icon veera-labeled-icon--align-${this.alignment}`;
  }
}
